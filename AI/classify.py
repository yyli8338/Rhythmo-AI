from openai import OpenAI
import json
import pandas as pd
from termcolor import colored
from halo import Halo

BODY_PART = "Ankle" # for testing purposes

def stringify_injuries (df): 
    output = ""

    for index, row in df.iterrows():
        output += f"INJURY {index + 1}\n" 
        for col in df.columns:
            output += f"{col}: {row[col]}\n" 
        output += "\n" 

    return output

if __name__ == '__main__': 
    client = OpenAI()
    
    datasheet = pd.read_csv('../Data/datasheet.csv')
    datasheet = datasheet[datasheet['body_part'] == BODY_PART]

    all_injuries = stringify_injuries(datasheet)

    with open ('input.txt', 'r') as file:
        patient_info = file.read()

    with open ('prompt.txt', 'r') as file:
        prompt = file.read()

    prompt = prompt.replace('<<BODY_PART>>', BODY_PART)
    prompt = prompt.replace('<<PATIENT_INFO>>', patient_info)
    prompt = prompt.replace('<<INJURIES>>', all_injuries)

    print (colored(prompt, 'yellow'))

    spinner = Halo(spinner='dots')
    spinner.start(f"Generating result...")

    messages = [{ "role": "user", "content": prompt }]
    response = client.chat.completions.create(
        model="gpt-4-0125-preview",
        messages=messages,
        max_tokens=200,
        temperature=0.7,
    )

    spinner.succeed(f"Generated result!")

    result = response.choices[0].message.content

    print (colored(result, 'green'))

    with open ('output.txt', 'w') as file:
        file.write(result)

    print (colored("Output saved to output.txt", 'green'))