const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config()

mongoose.connect(process.env.MONGO_URL,{
    
}).then(console.log("connect to mongo")).catch((err) => console.log(err));

app.listen(('5003'),()=>{
    console.log('backend running');
});