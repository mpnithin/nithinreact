const express=require('express');
const router=express.Router();
const Fest=require('../models/festival');

//getting festivals
router.get('/',async(req,res)=>{
    try{
        const fest=await Fest.find();
        res.json(fest);
    }
    catch(err)
    {
        res.json({message:err});
    }
   
});

//post festivals
router.post('/',(req,res)=>{
   
        const fest= new Fest({
            name:req.body.name,
            place:req.body.place,
            date:req.body.date,
            celebrations:req.body.celebrations
            
        });
        fest.save().
           then(data=>{
               res.json(data);
           }).catch(err=>{
               res.json({message:err});
           })
    
});

//getting festival by id
router.get('/:festid',async(req,res)=>
{
    try{
        const fest=await Fest.findById(req.params.festid);
        res.json(fest);
    }
    catch(err){
        res.json({message:err});
    }
});

//delete festival
router.delete('/:festid',async(req,res)=>{
    try{
        const fest=await Fest.deleteOne({_id:req.params.festid});
        res.json(fest);
    }
    catch(err){
        res.json({message:err});
    }

});

//update customer
router.patch('/:festid',async(req,res)=>{
    try{
        const fest=await Fest.findByIdAndUpdate({_id:req.params.festid});
        res.json(fest);
        if(req.body.name)
        {
            fest.name=req.body.name;
        }
        if(req.body.place)
        {
            fest.date=req.body.place;
        }
        if(req.body.date)
        {
            fest.date=req.body.date;
        }
        if(req.body.celebrations)
        {
            fest.celebrations=req.body.celebrations;
        }
        
        await fest.save();
    }
    catch(err)
    {
        res.json({message:err});
    }
});

module.exports=router;