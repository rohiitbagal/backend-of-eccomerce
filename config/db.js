import mongoose from "mongoose"
import  Colors  from 'colors'
//conneting with mondodb
const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URL)
        console.log(`connected to mongodb ${conn.connection.host}`.bgMagenta.white)
    }catch(error){
        console.log(`error in mongodb ${error} `.bgRed.white)
    }
}
 

export default connectDB;