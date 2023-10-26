import Express from "express";

import mongoose from "mongoose";

import dotenv  from "dotenv";

dotenv.config();

const app = Express();
app.use(Express.json());

const connectDB = async () =>{
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    if (conn) {
        console.log(`MongoDB cooected successfully`);
    }
};

const PORT = process.env.PORT || 5000;

app.listen(PORT,() =>{
    console.log(`Server runnig on port: ${PORT}`)
    connectDB();
});