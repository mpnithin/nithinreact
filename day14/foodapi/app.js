var express=require('express');
var connrouter=require('./routes/conn');
var app=express();


app.use('/',connrouter);
app.use(express.json());



module.exports=app;
app.listen(3000);