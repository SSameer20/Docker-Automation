const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express();
app.use(cors());


const PORT =  process.env.PORT || 5000
app.get("/",(req,res)=>{
    res.send("hello from server");
})


app.listen(PORT, (req,res) => {
    console.log(`Server is running on http://localhost:${PORT}`);
})