const express = require('express')
const cors = require('cors')


const app = express();
app.use(cors());


const PORT =  5000
app.get("/",(req,res)=>{
    res.send("hello from server");
})