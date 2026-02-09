const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/images', express.static(path.join(__dirname, 'images')));

// Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'login.html')));

// Demo login POST
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    res.send(`<h1>Welcome, ${username}!</h1><p><a href="/">Home</a></p>`);
  } else {
    res.send(`<h1>Login failed</h1><p><a href="/login">Try again</a></p>`);
  }
});

app.listen(PORT, () => console.log(`Vaporia app running on port ${PORT}`));
