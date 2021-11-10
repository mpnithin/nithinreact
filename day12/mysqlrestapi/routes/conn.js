const mysql=require('mysql2');
const express=require('express');
var router=express.Router();


var mysqlconnection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'college',
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
router.get('/student',(req,res)=>{
    mysqlconnection.query('select * from student;',(err,rows,fields)=>{
        if(!err)
            res.send(rows);
        else
            console.log(err);
    })
    
});

router.get('/course',(req,res)=>{
    mysqlconnection.query('select * from course;',(err,rows,fields)=>{
        if(!err)
            res.send(rows);
        else
            console.log(err);
    })
});
router.get('/exams',(req,res)=>{
    mysqlconnection.query('select * from exams;',(err,rows,fields)=>{
        if(!err)
            res.send(rows);
        else
            console.log(err);
    })
});
//get specific item using id
router.get('/student/:id',(req,res)=>{
    mysqlconnection.query('select * from student where sid= ?',[req.params.id],(err,rows,fields)=>{
        if(!err)
            res.send(rows);
        else
            console.log(err);
    })
});

//join tables
router.get('/scjoin',(req,res)=>{
    mysqlconnection.query('select s.sname,c.cname from student s join course c where s.cid=c.cid;',(err,rows,fields)=>{
        if(!err)
            res.send(rows);
        else 
            console.log(err);
    })
});

router.get('/sejoin',(req,res)=>{
    mysqlconnection.query('select s.sname,e.ename from student s join exams e where e.sid=s.sid;',(err,rows,fields)=>{
        if(!err)
            res.send(rows);
        else 
            console.log(err);
    })
});

//update
router.post('/edit',(req,res)=>{
    mysqlconnection.query("insert into student(sid,sname,age,cid) values('8','manu','24','c3');",(err,rows)=>{
        if(!err)
         res.send(rows);
        else 
         console.log(err);
    })
})



module.exports=router;