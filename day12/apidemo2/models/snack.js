const mongoose = require("mongoose");
const snackschema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    about:{
        type:String,
        required:true
    },
    calories:{
        type:String,
        required:true

    }
});

module.exports=mongoose.model('snack',snackschema);