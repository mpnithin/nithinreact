const express=require('express');
const mysql=require('mysql2');
var router=express.Router();

const Category=require('../models/food');


//created mysql connection
var mysqlconnection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"food",
    multipleStatements:true
});

//check connection
const sql=mysqlconnection.connect(err=>{
    if(!err)
    {
        console.log('connected to database...');
    }
    else
    {
        console.log('not connected');
    }
});

//post
router.post('/pc',(req,res)=>{
    //let c=req.query.cid;
    //let cn=req.query.cname;
    const ct=new Category.category;
 
     mysqlconnection.query("insert into category(cid,cname) values(?,?)",[ct.cid,ct.cname],(err,rows)=>{
         if(!err)
         {
             res.send('inserted');
         }
         else{
             console.log(err);
         }
     });
 });

//getting value
router.get('/category',(req,res)=>{
    mysqlconnection.query('select *from category;',(err,rows)=>{
        if(!err)
        {
            res.send(rows);
        }
        else{
            console.log(err);
        }
    });
   
})
router.get('/fooditems',(req,res)=>{
    mysqlconnection.query('select *from fooditems;',(err,rows)=>{
        if(!err)
        {
            res.send(rows);
        }
        else{
            console.log(err);
        }
    });
   
})

router.get('/join',(req,res)=>{
    mysqlconnection.query("select c.cname,f.fname,f.price from category c inner join fooditems f on c.cid=f.cid ",(err,rows)=>{
        if(!err)
        {
            res.send(rows);
        }
        else{
            console.log(err);
        }
    });
   
})


module.exports=router;

