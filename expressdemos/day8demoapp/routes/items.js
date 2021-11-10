const mysql=require('mysql2');
const express=require('express');
var router=express.Router();

///config express server
var mysqlconn=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'customer',
    multipleStatements:true
});

//check connection
mysqlconn.connect((err)=>{
    if(!err)
        console.log('connected succesfully..........');
    else
        console.log('connection Failed !'+JSON.stringify(err,undefined,2));
});

router.get('/',(req,res)=>{
    mysqlconn.query('select *from employee;',(err,rows,fields)=>{
        if(!err)
            res.send(rows);
            //console.log(rows);
        else
            console.log(err);
    })
    
});


//Router to GET specific item detail from the MySQL database
router.get('/:id' , (req, res) => {
    mysqlconn.query('SELECT * from employee WHERE id = ?',[req.params.id], (err, rows, fields) => {
    if (!err)
        res.send(rows);
    else
         console.log(err);
    })
    } );

module.exports=router;