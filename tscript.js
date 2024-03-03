document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);
    var age = parseInt(document.getElementById('age').value);

    // Calculate BMI
    var bmi = weight / ((height/100) * (height/100));

    // Determine BMI category
    var category;
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Healthy weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }

    // Display result
    document.getElementById('result').innerHTML = `Your BMI: ${bmi.toFixed(2)} (${category})`;
});
