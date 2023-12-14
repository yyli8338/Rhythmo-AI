from openai import OpenAI
import json
from termcolor import colored
import time
from halo import Halo

current_run_step = 0

if __name__ == '__main__':
    try: 
        client = OpenAI()
        thread = client.beta.threads.create()
    except KeyboardInterrupt:
        print(colored("\nUser interruption detected. Canceling the run...", 'red'))

        run = client.beta.threads.runs.cancel(
            thread_id=thread.id,
            run_id=run.id,
        )

        print(colored("\nRun canceled. Exiting program.", 'red'))