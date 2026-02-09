const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(__dirname));

// Serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve login.html
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

// Simple login POST handler (no database yet)
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // For demo purposes: any username/password works
  if (username && password) {
    res.send(`<h1>Welcome, ${username}!</h1><p><a href="/">Go back to Home</a></p>`);
  } else {
    res.send(`<h1>Login failed</h1><p><a href="/login">Try again</a></p>`);
  }
});

app.listen(PORT, () => {
  console.log(`Vaporia app running on port ${PORT}`);
});
