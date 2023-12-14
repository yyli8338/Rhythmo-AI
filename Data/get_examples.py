import pandas as pd

# Load the CSV file
df = pd.read_csv('datasheet.csv')

# Prepare to save output to a text file
output_path = 'examples.txt'
with open(output_path, 'w') as output_file:
    for index, row in df.iterrows():
        output_file.write(f"EXAMPLE {index + 1}\n")
        for column in df.columns:
            output_file.write(f"{column}: {row[column]}\n")
        output_file.write("\n\n\n")

output_path