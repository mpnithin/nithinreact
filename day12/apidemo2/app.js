const express=require('express');
const app=express();
const mongoose=require('mongoose');
app.use(express.json());
const snackroute=require('./routes/snackroutes');

app.use('/snack',snackroute);


const uploadroute=require('./routes/fileroute');
app.use('/images',uploadroute);


mongoose.connect("mongodb://localhost:27017/myowndb",() =>{ console.log("Connected to DB"); });

 app.listen(3000); 