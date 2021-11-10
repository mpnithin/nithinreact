const mongoose = require('mongoose'); 
 const bookschema= mongoose.Schema({
      title:{ type:String, required:true},
      description:{ type:String, required:true },
      price:{ type:Number, required:true}
 });

 module.exports=mongoose.model('Book',bookschema); 
