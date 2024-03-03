from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/calculate_bmi', methods=['POST'])
def calculate_bmi():
    # Get form data from request
    height = float(request.form['height'])
    weight = float(request.form['weight'])
    age = int(request.form['age'])

    # Calculate BMI
    bmi = weight / ((height/100) * (height/100))

    # Determine BMI category
    if bmi < 18.5:
        category = 'Underweight'
    elif bmi >= 18.5 and bmi < 24.9:
        category = 'Healthy weight'
    elif bmi >= 25 and bmi < 29.9:
        category = 'Overweight'
    else:
        category = 'Obese'

    # Return result as JSON
    return jsonify({'bmi': bmi, 'category': category})

if __name__ == '__main__':
    app.run(debug=True)
