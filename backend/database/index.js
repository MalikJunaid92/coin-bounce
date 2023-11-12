const mongoose= require('mongoose')

const {MongoDb}=require('../config/index') 

const connectDB= async()=>
{
    try {
        const conn= await mongoose.connect(MongoDb)
        console.log(`Mongodb sucessfully connected ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(`Error ${error}`)
    }
}
module.exports=connectDB