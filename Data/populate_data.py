from openai import OpenAI
import json
from termcolor import colored
import time
from halo import Halo
import pandas as pd

current_run_step = 0

ASSISTANT_ID = "asst_9Ywys6nfge2RfQahASPmCuPl"

USER = """Please provide accurate and detailed healthcare information for all of the following body_part and injury_type pairs by calling add_spreadsheet_row and completing the following rows: 

body_part,injury_type,mild_description,moderate_description,severe_description,subcategories,description,mild_min_healing_duration,mild_max_healing_duration,moderate_min_healing_duration,moderate_max_healing_duration,severe_min_healing_duration,severe_max_healing_duration,self_recovery,symptoms,"immediate_remedies ",when_to_see_doctor,mild_min_pain_level,moderate_avg_pain_level,severe_max_pain_level,common_causes,risk_factors,treatment_types,treatment_side_effects,physiotherapy_exercises,"long_term_remedies ",potential_chronic_injuries,specific_body_part,complications,diagnosis_methods,how_common,What is the recovery rate,professional_help_frequency,home_treatment_expectation,doctor_recommendation,surgery_requirement,lowering_risk,treatment_goals,prevention_measures,initial_and_delayed_symptoms

Here are all the body_part and injury_type pairs that need to be completed:
<<REMAINING_INJURIES>>"""

def stringify_remaining_injuries (remaining_injuries):
    remaining_injuries_str = ""

    for injury in remaining_injuries:
        remaining_injuries_str += f"body_part: {injury['body_part']}\ninjury_type: {injury['injury_type']}\n\n"

    return remaining_injuries_str

def get_remaining_injuries():
    df = pd.read_csv('datasheet.csv')

    injuries = df[df['description'].isnull()]
    injuries = injuries[['body_part', 'injury_type']]

    injuries = injuries.drop_duplicates()
    injuries = injuries.to_dict('records')

    # get the first 10 only for this run
    injuries = injuries[:10]

    return injuries

def count_completed_run_steps(thread, run):
    run_steps = client.beta.threads.runs.steps.list(thread_id=thread.id, run_id=run.id, order="asc").data
    completed_run_steps = [run_step for run_step in run_steps if run_step.status == "completed"]
    return len(completed_run_steps)

def wait_on_run(run, thread):
    global current_run_step

    is_first_run = True

    spinner = Halo(spinner='dots')  # Initialize the spinner
    timer = 0
    spinner.start(f"Loading [{timer} seconds elapsed]")  # Start the spinner

    while run.status == "queued" or run.status == "in_progress" or is_first_run:
        run = client.beta.threads.runs.retrieve(
            thread_id=thread.id,
            run_id=run.id,
        )

        spinner.text = f'Loading [{timer} seconds elapsed]'

        completed_run_steps = count_completed_run_steps(thread, run)
        if completed_run_steps > current_run_step:
            spinner.succeed(f"Completed in {timer} seconds!")
            print ()

            for i in range(current_run_step, completed_run_steps):
                display_run_step(thread, run, i)
            current_run_step = completed_run_steps

            # reset spinner
            spinner = Halo(spinner='dots')  # Initialize the spinner
            timer = 0
            spinner.start(f"Loading [{timer} seconds elapsed]")  # Start the spinner

        timer += 1
        time.sleep(1)  

        is_first_run = False

    spinner.succeed(f"Completed in {timer} seconds!")

    # Print the final status
    print(colored(f"Status: {run.status}", 'green' if run.status == "completed" else "red"))
    return run

def display_run_step (thread, run, index):
    step = client.beta.threads.runs.steps.list(thread_id=thread.id, run_id=run.id, order="asc").data[index]
    step_details = step.step_details

    if step_details.type != "message_creation":
        if len(step_details.tool_calls) == 0:
            print (colored("SKIP\n", 'red'))
        else: 
            print (colored(json.dumps(json.loads(step_details.tool_calls[0].function.arguments), indent=4), 'magenta'))
    
def add_spreadsheet_row(arguments):
    df = pd.read_csv('datasheet.csv')
    print (colored(f"body_part: {arguments['body_part']}\ninjury_type: {arguments['injury_type']}", 'yellow'))

    # find the indices of rows with corresponding body_part and injury_type
    indices = df[(df['body_part'] == arguments['body_part']) & (df['injury_type'] == arguments['injury_type'])].index

    # check if the rest of the columns are blank for this injury by checking if description is null
    if df.loc[indices, 'description'].notnull().any():
        print (colored(f"ERROR: Attempt to override existing entry.", 'red'))
        return {
            'status': 'error',
            'message': 'This injury already has data in the spreadsheet. Please move on to the next injury.',
        }

    # update the rows with the new data
    for column in arguments:
        df.loc[indices, column] = arguments[column]

    df.to_csv('datasheet.csv', index=False)
    print (colored(f"Datasheet updated.", 'green'))

    return {
        'status': 'success',
        'message': 'Successfully updated the spreadsheet.',
    }

if __name__ == '__main__':
    try: 
        client = OpenAI()
        thread = client.beta.threads.create()

        remaining_injuries = get_remaining_injuries()

        if len(remaining_injuries) == 0:
            print (colored("All injuries have been completed. Exiting program.", 'green'))
            exit()

        remaining_injuries_str = stringify_remaining_injuries(remaining_injuries)

        user_prompt = USER.replace("<<REMAINING_INJURIES>>", remaining_injuries_str)

        print (colored("Current batch:", 'green'))
        print (colored(remaining_injuries_str, 'green'))

        user_message = client.beta.threads.messages.create(thread_id=thread.id, role="user", content=user_prompt)
        run = client.beta.threads.runs.create(thread_id=thread.id, assistant_id=ASSISTANT_ID)
        run = wait_on_run(run, thread)

        while run.status == "requires_action":
            tool_call = run.required_action.submit_tool_outputs.tool_calls[0]
            name = tool_call.function.name
            arguments = json.loads(tool_call.function.arguments)

            if name == "add_spreadsheet_row":
                response = add_spreadsheet_row(arguments)
            else:
                print (colored(f"ERROR: Unrecognized function name: {name}", 'red'))

            run = client.beta.threads.runs.submit_tool_outputs(
                thread_id=thread.id,
                run_id=run.id,
                tool_outputs=[
                    {
                        "tool_call_id": tool_call.id,
                        "output": json.dumps(response),
                    }
                ],
            )

            run = wait_on_run(run, thread)

    except KeyboardInterrupt:
        print(colored("\nUser interruption detected. Canceling the run...", 'red'))
        run = client.beta.threads.runs.cancel(thread_id=thread.id, run_id=run.id)
        print(colored("\nRun canceled. Exiting program.", 'red'))