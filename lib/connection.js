import mongoose from 'mongoose'
let URI = process.env.MONGO_URI
const main = async ()=>{
    await mongoose.connect(URI)
    console.log("connection successful")
} 
export default main;