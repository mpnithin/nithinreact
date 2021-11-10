const express= require('express')
const mongoose = require('mongoose')
const authRoute= require('./routers/auth')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
mongoose.connect("mongodb://localhost:27017/myowndb",() =>{
    console.log("Connected to DB");})

const PORT=process.env.PORT || 4500

app.listen(PORT,()=>{
    console.log(`server is running on port no ${PORT}`)
})
app.use('/api',authRoute)
