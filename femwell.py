# Import necessary libraries
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Define a function to create a new menstrual cycle entry
def add_entry(df):
    date = input("Enter the date of your period (YYYY-MM-DD): ")
    df = df.append({'Date': date}, ignore_index=True)
    return df

# Initialize an empty dataframe to store menstrual cycle data
df = pd.DataFrame(columns=['Date'])

# Loop to allow user to add new entries
while True:
    add_new = input("Do you want to add a new entry? (yes/no) ")
    if add_new.lower() == 'no':
        break
    else:
        df = add_entry(df)

# Calculate the number of days between each period
df['Cycle Day'] = df['Date'].diff().dt.days

# Shift the cycle day column by one day to account for the first day of the cycle
df['Cycle Day'] = df['Cycle Day'].shift(-1)

# Fill the missing value at the end of the cycle day column with the number of days in the last cycle
df.loc[df.shape[0]-1, 'Cycle Day'] = df['Cycle Day'].sum()

# Calculate the length of each cycle
df['Cycle Length'] = df['Cycle Day'].cumsum()

# Create a line plot to visualize the cycle length over time
sns.lineplot(data=df, x='Date', y='Cycle Length')
plt.title('Menstrual Cycle Length Over Time')
plt.xlabel('Date')
plt.ylabel('Cycle Length (days)')
plt.show()