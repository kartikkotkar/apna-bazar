import { Schema, model } from "mongoose";

const orderSchema = new Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },

    quantity: {
        type: Number,
        default: 1,
    },

    deliveryCharges: {
        type: Number,
        required: true,
    },

    shippingAddress: {
        type: String,
        required: true,
    },

    status: {
        type: String,
        default: 'pending',
        required: true,
    }

}, {
    timestamps: true,
});

const Order = model('Order', orderSchema);

export default Order;
