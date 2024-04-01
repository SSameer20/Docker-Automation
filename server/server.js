const express = require('express');
const cors = require('cors')
const { exec } = require('child_process');

const app = express();
app.use(cors());
const port = 3001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


app.get('/rundocker', (req, res) => {

  
});
