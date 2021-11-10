const express = require("express");

const app = express();
app.use(express.json());

var foodsRouter = require('./routes/foods');
var categoriesRouter = require('./routes/categories');

app.use('/foods', foodsRouter);
app.use('/categories', categoriesRouter);

app.listen(3000);