const express=require('express');
const app=express();
const mongoose=require('mongoose');
app.use(express.json());
const festroute=require('./routes/festivals');

app.use('/festivals',festroute);


mongoose.connect("mongodb://localhost:27017/myowndb",() =>{ console.log("Connected to DB"); });

 app.listen(8000);