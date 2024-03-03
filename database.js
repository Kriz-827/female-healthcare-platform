const users = [
    { email: "user1@example.com", password: "password1" },
    { email: "user2@example.com", password: "password2" }
  ];
  
  function findUserByEmail(email) {
    return users.find(user => user.email === email);
  }
  
  module.exports = { findUserByEmail };
  