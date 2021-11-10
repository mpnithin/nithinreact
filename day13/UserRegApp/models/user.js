const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
const Userschema= mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    password:{
        type:String
    }
    
}, {timestamp: true})

const User = mongoose.model('User',Userschema)
module.exports=User;
