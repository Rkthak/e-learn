const mongoose = require("mongoose");

const url = process.env.MONGODB_URL;

const connectDB = async () =>{
    try {
        mongoose.connect(url);
        console.log("mongoose connected");
        
    } catch (error) {
        console.error("mongoose error");
        process.exit(0);
    }
}

module.exports = connectDB;