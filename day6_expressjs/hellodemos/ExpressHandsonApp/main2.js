var express=require('express');
var app=express();
app.get("/post",function(req,res,next){
    res.send("function of get");
    next();
},function(req,res)
{
    console.log("call back function exe....");
})

app.post("/postm",function(req,res)
{
    console.log("welcome to express");
})
app.listen(8000);