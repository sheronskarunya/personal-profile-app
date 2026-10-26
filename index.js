const express = require('express');
const app = express();
const PORT = 3000;

// Root Endpoint
app.get('/', (req, res) => {
  res.send("Welcome to Camper Bot's homepage!");
});

// Hobbies Endpoint
app.get('/hobbies', (req, res) => {
  res.send("I cycle, go boating, and play guitar.");
});

// Skills Endpoint
app.get('/skills', (req, res) => {
  res.send("JavaScript, Node.js, and Express.js!");
});

// Profile JSON Endpoint
app.get('/api/profile', (req, res) => {
  // Enforce correct Content-Type format explicitly
  res.setHeader('Content-Type', 'application/json');
  res.json({
    name: "Camper Bot",
    hobbies: ['cycling', 'boating', 'guitar'],
    skills: ['JavaScript', 'Node.js', 'Express.js']
  });
});

// Server Initialization
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
