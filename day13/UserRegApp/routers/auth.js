const express = require('express')
const router = express.Router()
const authController = require('../controllers/authcontroller');
const User = require('../models/user');


const MongoClient = require('mongoose');


router.post('/register',authController.register)
router.post('/login',authController.login)


router.get('/',async(req,res)=>{
    try{
        const u=await User.find();
        res.json(u);
    }
    catch(err)
    {
        res.json({message:err});
    }
   
}); 





module.exports=router
