import { Schema, model } from 'mongoose';

const productSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    description: {
        type: String,

    },
    price: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true
    },
    category: {
        type: String,

    },
    brand: {
        type: String,


    },

}, {
    timestamps: true,
});

const Product = model('Product', productSchema);

export default Product