const mongoose=require('mongoose');
const custschema=mongoose.Schema({
    name:{
        firstname:{
            type:String,
            required:true
        },
        lastname:{
            type:String,
            required:true
        }
        
    },
    location:{
        location_name:{
            type:String,
            required:true
        },
        zipcode:{
            type:String,
            required:true
        },
        cityname:{
            type:String,
            required:true
        }
    },
    email:{
        type:String,
        required:true
    }

});

module.exports=mongoose.model('Customer',custschema);