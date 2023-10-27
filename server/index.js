import express from "express";

import mongoose from "mongoose";

import dotenv from "dotenv";

import User from './modules/user.js';

import Product from "./modules/product.js";


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

    const userLoged = await User.findOne({ email, password, }).select("name email mobile")

    if (!userLoged) {

        return res.json({
            success: false,
            message: "Invalid credentials",
        });
    }

    res.json({
        success: true,
        data: userLoged,
        message: "login is  successful"
    });
});

//get/products

app.get("/products", async (req, res) => {
    const products = await Product.find();

    res.json({
        success: true,
        data: products,
        message: "product fetched successfully"
    })

});
//post/product

app.post('/product', async (req, res) => {
    try {

        const { name, description, price, image, category, brand } = req.body;


        const newProduct = new Product({ name, description, price, image, category, brand });

        const savedProduct = await newProduct.save()

        res.json({
            success: true,
            message: "new prodect added successfully",
            data: savedProduct,

        });
    } catch (e) {
        res.json({
            success: false,
            message: e.message,

        });
    }
});
//get/product/:id

app.get('/product/:_id', async (req, res)=> {
    const {_id} = req.params;
    const product = await Product.find({_id: _id})

res.json({
    success: true,
    date: product,
    message: 'product fetched successfully'
})
});

    


//put/update

app.put('/product/:_id', async(req, res) =>{

    const { _id} = req.params;

    const { name, description, price, image, category, brand } = req.body;

    
    const updateProduct =  await Product.updateOne({ _id: _id }, {
        $set: {
            name: name,
            description: description,
            price: price,
            image: image,
            category: category,
            brand: brand,
        }
    })
    
    res.json({
        success: true,
        data: updateProduct,
        message: 'update successfully',
    })
});


//-----delete Product by id------
app.delete('/product/:_id', async (req, res) => {
    const { _id } = req.params;
    await Product.deleteOne({ _id: _id });

    res.json({
        success: true,
        message: 'deleted Product SuccessFully.'
    })
});

//-----search Product ------

app.get('/products/search', async (req, res) => {
    const { q } = req.query;
    const searchpro = await Product.find({ name: { $regex: q, $options: 'i' } })
    res.json({
        success: true,
        data: searchpro,
        message: 'Product searched SuccessFully .'
    })
})


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server is running  : ${PORT}`);
    connectDB();
});