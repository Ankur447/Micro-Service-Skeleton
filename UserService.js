const express = require("express");
const app = express();
const port = 3000;

app.use(express.json()); // Parse incoming JSON requests

const users = [  // Array of users (fixed typo)
  { id: 1, name: "ankur" },
  { id: 2, name: "kobe" },
];

app.get('/users', (req, res) => {
  res.send(users); // Send all users
});

app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id); // Use parseInt for number conversion
  const user = users.find(user => user.id === userId);
  if (!user) {
    res.status(404).send("User not found");
  } else {
    res.send(user);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});