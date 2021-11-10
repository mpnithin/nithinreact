const jwt= require('jsonwebtoken')
const bcrypt= require('bcrypt')

const User = require('../models/user')


const register =(req,res)=>{
    bcrypt.hash(req.body.password,10,(err,_hashedPass)=>{
        if(err){
            res.json({error: err});
            console.log("Cannot saved user , error: " +err)
        }
       let user = new User({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        password: _hashedPass       
    })
    user.save().
            then(user =>{
                res.json({message:"User added successfully"})
            }).catch(err=>{
                res.json({message:"Error occured"})
    })
})
}


const login = (req,res)=>{
    username = req.body.username,
    password = req.body.password,

   User.findOne({$or: [{email:username},{phone:username}]})
   .then(function (user) {
           if (user) {
               bcrypt.compare(password, user.password, (err, result) => {
                   if (err) {
                       res.json({ error: err })
                   }
                   if (result) {
                       const token = jwt.sign({ name: user.name }, 'sercretvaluehellohowareyouasdfffafas',
                        { expiresIn: '15 minutes' })
                       res.json({ message: "login succesfull", token })

                   } else {
                       res.json({ message: "username/ password does not match" })
                   }
               })
           } else {
               res.json("no user found")
           }
       })
}
module.exports={register, login}



