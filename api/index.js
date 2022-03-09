const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL,{
    
}).then(console.log("connect to mongo")).catch((err) => console.log(err));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);


app.listen(('5003'),()=>{
    console.log('backend running');
});