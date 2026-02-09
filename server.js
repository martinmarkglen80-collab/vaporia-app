const express = require('express');
const path = require('path');
const app = express();

// Parse form data
app.use(express.urlencoded({ extended: true }));

// Serve the root folder for images
app.use(express.static(__dirname));

// Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'login.html')));

// Simple demo login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    res.send(`<h1>Welcome, ${username}!</h1><p><a href="/">Home</a></p>`);
  } else {
    res.send(`<h1>Login failed</h1><p><a href="/login">Try again</a></p>`);
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Vaporia app running on port ${PORT}`));
