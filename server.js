const express = require("express");
const bodyParser = require("body-parser");
const database = require("./database");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = database.findUserByEmail(email);

  if (!user || user.password !== password) {
    res.status(401).json({ message: "Invalid email or password" });
  } else {
    res.status(200).json({ message: "Login successful" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
