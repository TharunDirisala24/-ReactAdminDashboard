const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Backend API running on port 5000");
});

// Dummy users
const users = [
  { id: 1, name: "John", email: "john@gmail.com" },
  { id: 2, name: "David", email: "david@gmail.com" },
];

// Login API
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "admin@gmail.com" && password === "1234") {
    res.json({ success: true, message: "Login successful" });
  } else {
    res.json({ success: false, message: "Invalid credentials" });
  }
});

// Get Users API
app.get("/users", (req, res) => {
  res.json(users);
});

// Add User API
app.post("/users", (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ success: false, message: "Name and email are required" });
  }
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  res.json({ success: true, user: newUser });
});

// Update User API
app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const user = users.find(u => u.id == id);
  if (!user) {
    return res.status(404).json({ success: false, message: "User not found" });
  }
  if (name) user.name = name;
  if (email) user.email = email;
  res.json({ success: true, user });
});

// Delete User API
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  const index = users.findIndex(u => u.id == id);
  if (index === -1) {
    return res.status(404).json({ success: false, message: "User not found" });
  }
  users.splice(index, 1);
  res.json({ success: true, message: "User deleted" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});