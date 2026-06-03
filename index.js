// const dotenv = require('dotenv');
// dotenv.config();
const express = require('express');
const dotenv = require('dotenv');
 dotenv.config();
const app = express();
require('./util/db');
const Data = require('./util/config');  

const  cors = require('cors');
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.post('/data',async(req,res)=>{
let data= new Data(req.body);  
let result= await data.save();
res.send(result);
})

app.listen(5000,()=>{
    console.log('Server is running on port 4000');
})