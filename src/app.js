const express = require('express');
const { adminAuth } = require('./middleware/auth');

const app = express();

app.use("/admin", adminAuth);
app.use("/admin/getalluser",
    (req,res)=> {
        res.send("getAlluser called..")
})
app.use("/admin/deleteuser",
    (req,res)=> {
        res.send("delete user called..")
})
app.use("/giverror",(req,res)=>{
    throw new Error("dshjjgfjhg")
    res.send("error")
})
app.get("/usr", (req,res)=>{
    res.send({firstname:"Akshaya ", lastname : "kumar"})
})
app.get("/user",
    (req,res,next)=>{
        console.log("hi ha ha");
        
    // res.send("data successfully saved to the database!")
    next();
    }
    ,(req,res,next)=>{
        console.log("hello");
        next();
        // res.send("data successfully saved to the database2!")
        
    },(req,res)=>{
        res.send("data successfully saved to the database3!")
    }
)
app.post("/user",(req,res)=>{
    res.send("data successfully saved to the database!")
})

app.use("/test",(req,res)=> {
    res.send("hello from the server");
})

app.use("/",(err,req,res,next) =>{
    if(err){
        res.status(500).send("Something went Wrong...")
    }
})
app.listen(7777, ()=>{
    console.log("server is successfully listening on port 7777...");
    
})
