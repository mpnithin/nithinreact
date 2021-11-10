var express=require('express');
var sqlrouter=require('./routes/conn');

var app=express();


app.use('/connection',sqlrouter);
module.exports=app;


app.listen(3000);