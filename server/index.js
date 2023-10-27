import express from "express";

import mongoose from "mongoose";

import dotenv from "dotenv";

import User from './modules/user.js';

dotenv.config();

const app = express();
app.use(express.json());

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    if (conn) {
        console.log(`MongoDB cooected successfully`);
    }
};

//POST /signup

app.post("/signup", async (req, res) => {
    const {
        name,
        email,
        password,
        mobile,
        address,
        gender
    } = req.body;

    const user = new User({
        name: name,
        email: email,
        password: password,
        mobile: mobile,
        address: address,
        gender: gender
    });

    try {
        const savedUser = await user.save();

        res.json({
            success: true,
            data: savedUser,
            message: "signup successfully"
        })
    }

    catch (e) {
        res.json({
            success: false,
            message: e.message
        })
    }
});

//post /login

app.post("/login", async (req, res) => {
    const { email, password } = req.body; 

    const userLoged = await User.findOne({email,password,}).select("name email mobile")

    if (!userLoged) {

        return res.json({
            success: false,
            message: "Invalid credentials",
        });
    }

    res.json({
        success: true,
        data: userLoged,
        message: "login successful"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server runnig on port: ${PORT}`)
    connectDB();
});