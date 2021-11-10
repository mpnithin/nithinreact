
var express = require('express');
var app = express();
app.route('/route').get((req,res)=>{res.send('get a random book')})
app.listen(3000);