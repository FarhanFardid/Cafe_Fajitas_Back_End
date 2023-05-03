const express = require('express');
const app = express();
const port= 5000;
const chefs = require('./chefs.json')

app.get('/', (req,res)=>{
    res.send("The chef-recipe server is running ")
})
app.get('/chefs',(req,res)=>{
    res.send(chefs)
})
app.listen(port, () =>{
    console.log("The chef server is running on port :", port )
})