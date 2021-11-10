const mysql=require('mysql2');
const express=require('express');
const { response } = require('express');
var router=express.Router();

var mysqlconnection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'customer',
    multipleStatements:true
});

//check connection
mysqlconnection.connect((err)=>{
    if(!err)
        console.log('connected successfully........');
    else
        console.log('connection failed!!!!!!'+JSON.stringify(err,undefined,2));
});

//get all values
router.get('/',(req,res)=>{
    mysqlconnection.query('select * from employee;',(err,rows,fields)=>{
        if(!err)
            res.send(rows);
        else
            console.log(err);
    })
});
//get specific item using id
router.get('/:id',(req,res)=>{
    mysqlconnection.query('select * from employee where id= ?',[req.params.id],(err,rows,fields)=>{
        if(!err)
            res.send(rows);
        else
            console.log(err);
    })
});

//insert row into table
router.get('/insert',(req,res)=>{
    mysqlconnection.query("insert into  employee set ?",[10,'rajani','sweeper',20000,'tvm'],(err,rows,fields)=>{
        if(!err)
            console.log('1 row inserted');
        else 
            console.log(err);
    })
});

//update table
router.post('/update',(req,res)=>{
    mysqlconnection.query('update employee set salary=70000 where id=1',(err,rows,fields)=>{
        if(!err)
            console.log('updated ...........');
        else 
            console.log(err);
    })
});

//delete row
router.get('/delete',(req,res)=>{
    mysqlconnection.query('delete from employee where id=9',(err,rows,fields)=>{
        if(!err)
            console.log('deleted ...........');
        else 
            console.log(err);
    })
});


module.exports=router;