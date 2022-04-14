require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology:true
        });

        console.log("db connect successfully");
    } catch (error) {
        console.error("db connect failed");
        console.exit(1);
    }
}

module.exports=connectDB;