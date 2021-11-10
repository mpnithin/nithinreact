var express = require('express');
const { Sequelize,DataTypes} = require('sequelize');
var router = express.Router();

const sequelize=new Sequelize('customer','root','password',{host:'localhost',dialect:'mysql'});


async function add()
{
try
{
    await sequelize.authenticate();
    console.log("connected successfully.....");
}
catch(error)
{
    console.error("unable to connect!!!!!!!");
}
}
add();
module.exports = router;
