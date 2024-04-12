const express = require('express');
const cors = require('cors');
const cpuData = require('./data/cpu_utilization.json'); // Changed variable name for better readability

const app = express();
const port = 3001;

// Middleware to enable CORS
app.use(cors());

// Route handler for GET requests to /getdata endpoint
app.get('/getdata', (req, res) => {
  req.send("Hello from server"); // Sending JSON data as response
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
