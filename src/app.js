const express = require('express');

const app = express();

app.get("/user", (req,res)=>{
    res.send({firstname:"Akshaya ", lastname : "kumar"})
})
app.post("/user",(req,res)=>{
    res.send("data successfully saved to the database!")
})
app.post("/user",(req,res)=>{
    res.send("data successfully saved to the database!")
})

app.use("/test",(req,res)=> {
    res.send("hello from the server");
})

app.listen(7777, ()=>{
    console.log("server is successfully listening on port 7777...");
    
})
