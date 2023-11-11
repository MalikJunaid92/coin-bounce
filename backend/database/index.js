const mongoose= require('mongoose')

const MongoDb='mongodb+srv://Junaid:junaid1234@traversycluster.lexf7ss.mongodb.net/?retryWrites=true&w=majority' 

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