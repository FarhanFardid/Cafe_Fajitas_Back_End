const express = require('express');
const app = express();
const port= 5000;

app.get('/', (req,res)=>{
    res.send("The chef-recipe server is running ")
})

app.listen(port, () =>{
    console.log("The chef server is running on port :", port )
})