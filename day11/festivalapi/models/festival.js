const mongoose=require('mongoose');
const festschema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    place:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    celebrations:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model('Festival',festschema);