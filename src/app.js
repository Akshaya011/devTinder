const express = require('express');

const app = express();

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

app.listen(7777, ()=>{
    console.log("server is successfully listening on port 7777...");
    
})
