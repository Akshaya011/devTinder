const express = require('express');
const { adminAuth } = require('./middleware/auth');
const connectdb = require("./config/database");
const User = require("./models/user");
const app = express();

app.post("/signup" , async (req,res) => {
    const user = new User({
        firstName : "king",
        lastName : "kohli",
        emailId : "xyz@gmail.com",
        password : "virat@123",
    })
    try{
        await user.save();
        res.send("new user added successfully..");
    }catch(err){
        res.status(400).send("error saving the user :" + err.message);
    }
    
})


connectdb().then(()=>{
    console.log("Database connection established..");
    app.listen(7777, ()=>{
        console.log("server is successfully listening on port 7777...");
    })
}).catch(err => {
    console.log("database cannot be connected!!");
    
})


