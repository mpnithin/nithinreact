const express=require('express');
const router=express.Router();
const Snack=require('../models/snack');

//getting snacks

router.get('/',async(req,res)=>{
    try{
        const snack=await Snack.find();
        res.json(snack);
    }
    catch(err)
    {
        res.json({message:err});

    } 
});

//post
router.post('/',(req,res)=>{
    const snack=new Snack({
        name:req.body.name,
        price:req.body.price,
        about:req.body.about,
        calories:req.body.calories
    });
    snack.save().then(data=>{
        res.json(data);
    }).catch(err=>{
        res.json({message:err});
    })
});

//getting snack by id
router.get('/:snackid',async(req,res)=>
{
    try{
        const snack=await Snack.findById(req.params.snackid);
        res.json(snack);
    }
    catch(err){
        res.json({message:err});
    }
});


//delete snack
router.delete('/:snackid',async(req,res)=>{
    try{
        const snack=await Snack.deleteOne({_id:req.params.snackid});
        res.json(snack);
    }
    catch(err){
        res.json({message:err});
    }

});

//update customer
router.patch('/:snackid',async(req,res)=>{
    try{
        const snack=await Snack.findByIdAndUpdate({_id:req.params.snackid});
        res.json(snack);
        if(req.body.name){
            snack.name=req.body.name;
          }
          
         if(req.body.price){
            snack.price=req.body.price;
         }
         if(req.body.about){
            snack.about=req.body.about;
         }
         if(req.body.calories){
             snack.calories=req.body.calories;
         }
         
         await snack.save();
       }
    catch(err){
        res.json({message:err});
    }
});

module.exports=router;