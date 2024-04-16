const express = require('express');
const cors = require('cors');
const cpuMemory = require('./data/cpu_memory.json');
const cpuUsage = require('./data/cpu_usage.json'); // Changed variable name for better readability


const app = express();
const port = 3001;

// Middleware to enable CORS
app.use(cors());

// Route handler for GET requests to /getdata endpoint
app.get('/', (req, res)=>{
  res.send("Hello From Server")
})

app.get('/api/data/cpu/memory', (req, res)=>{
  res.send(cpuMemory);
})

app.get('/api/data/cpu/usage', (req, res)=>{
  res.send(cpuUsage);
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on  http://localhost:${port}`);
});
