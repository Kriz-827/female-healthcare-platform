from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.json
    start_date = data['start_date']

    # Calculate upcoming period date
    upcoming_date = calculate_upcoming_period(start_date)

    # Here you can add any additional processing or reminders
    # For simplicity, let's just return the upcoming date
    return jsonify({"upcoming_date": upcoming_date})

def calculate_upcoming_period(start_date):
    # Perform calculations to get the upcoming period date
    # For simplicity, let's just add 28 days to the start date
    upcoming_date = start_date + timedelta(days=28)
    return upcoming_date

if __name__ == '__main__':
    app.run(debug=True)
