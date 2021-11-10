const express=require('express');
const router=express.Router();
const Cust=require('../models/customer');



//getting customers
router.get('/',async(req,res)=>{
    try{
        const cust1=await Cust.find();
        res.json(cust1);
    }
    catch(err){
        res.json({message:err});
    }
});


//creating customer
router.post('/',(req,res)=>{
    const cust=new Cust({
        name:{
            firstname:req.body.name.firstname,
            lastname:req.body.name.lastname
        },
        location:{
            location_name:req.body.location.location_name,
            zipcode:req.body.location.zipcode,
            cityname:req.body.location.cityname
        },
        email:req.body.email
    });
    cust.save().
        then(data=>{
            res.json(data);
        }).catch(err=>{
            res.json({message:err});
        })
});

//getting cuustomer by id
router.get('/:custid',async(req,res)=>
{
    try{
        const cust=await Cust.findById(req.params.custid);
        res.json(cust);
    }
    catch(err){
        res.json({message:err});
    }
});


//delete customer
router.delete('/:custid',async(req,res)=>{
    try{
        const cust=await Cust.deleteOne({_id:req.params.custid});
        res.json(cust);
    }
    catch(err){
        res.json({message:err});
    }

});

//update customer
router.patch('/:custid',async(req,res)=>{
    try{
        const cust=await Cust.findByIdAndUpdate({_id:req.params.custid});
        res.json(cust);
        if(req.body.name){
            cust.name=req.body.name;
          }
          
         if(req.body.email){
           cust.email=req.body.email;
         }
         if(req.body.location){
           cust.location=req.body.location;
         }
         
         await cust.save();
       }
    catch(err){
        res.json({message:err});
    }
});

module.exports=router;