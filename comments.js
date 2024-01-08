// Create web server

const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.static('client/dist'));

// Routes
app.get('/api/comments', (req, res) => {
  console.log('GET request received');
  res.send('GET request received');
});

app.post('/api/comments', (req, res) => {
  console.log(req.body);
  res.send('POST request received');
});

app.patch('/api/comments', (req, res) => {
  console.log(req.body);
  res.send('PATCH request received');
});

app.delete('/api/comments', (req, res) => {
  console.log(req.body);
  res.send('DELETE request received');
});

// Start server
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});