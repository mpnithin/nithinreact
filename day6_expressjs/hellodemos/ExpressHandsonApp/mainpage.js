var express=require('express');
var app=express();
var fn1=(req,res,next)=>{
    console.log("first callback function ");
    next();
}
var fn2=(req,res,next)=>{
    console.log("second callback function");
    next();
}
var fn3=(req,res,next)=>{
    console.log("third callaback function");
    next();
}
var fn4=(req,res)=>{
    res.send("last call back function");
}

//app.get('/',[fn1,fn2,fn3,fn4]);
app.get('/document',[fn1,fn2,fn3,fn4]);
app.listen(8080);