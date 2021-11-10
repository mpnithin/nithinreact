const express= require('express'); 
const router= express.Router();
 const Book= require('../models/book'); 

//creating book
 router.post('/',(req,res)=>{
    const book =new Book({ 
      title:req.body.title,
       description:req.body.description,
       price:req.body.price });
  book.save(). 
    then(data =>{
      res.json(data); })
      .catch (err=>{ 
         res.json({message:err}); }) 
        
  }); 




  module.exports= router;