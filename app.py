from flask import Flask, request, jsonify

app = Flask(__name__)

# Dummy user data (replace with your own database)
users = {
    'user1@example.com': 'password1',
    'user2@example.com': 'password2'
}

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    # Check if user exists and password matches
    if email in users and users[email] == password:
        return jsonify({'success': True, 'message': 'Login successful'})
    else:
        return jsonify({'success': False, 'message': 'Invalid email or password'})

if __name__ == '__main__':
    app.run(debug=True)
