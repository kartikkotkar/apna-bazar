import React from "react";
import "./BuyPage.css";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";


function BuyPage() {

    const { id } = useParams();
    const [product, setProduct] = useState();
    const [quantity, setQuantity] = useState(1);
    const [deliveryCharges, setDeliveryCharges] = useState(0)
    const [shippingAddress, setShippingAddress] = useState('');

    const loadProducts = async () => {
        if (!id) {
            return;
        }
        const response = await axios.get(`/product/${id}`);
        setProduct(response?.data?.date[0]);
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    }

    const decreaseQuantity = () => {
        if (quantity === 1) {
            return;
        }
        setQuantity(quantity - 1);
    }

    const placeOrder = async () => {
        const currentUser = JSON.parse(localStorage.getItem('user'));
        const orderDetails = {
            user: currentUser._id,
            product: id,
            quantity: quantity,
            shippingAddress: shippingAddress,
            deliveryCharges: deliveryCharges,
        }

        const response = await axios.post('/order', orderDetails);
        alert(response?.data?.message);
        if (response?.data?.success) {
            window.location.href = "/orders"
        }
    }


    useEffect(() => {
        loadProducts();
    }, []);

    return (

        <div>
            <Navbar />
            <div className="buy-product-container">

                <div className="buy-product-info">
                    <div>
                        <img src={product?.image} alt={product?.name} className="buy-product-image" />
                    </div>
                    <div className="card-menu-container">
                        <h1 className="card-menu-price">₹ {product?.price}/-</h1>
                        <h1 className="card-menu-name">{product?.name}</h1>
                        <p className="card-menu-description">{product?.description}</p>

                        <div>

                            <span className="btn-decrease-quantity" onClick={decreaseQuantity}>➖</span>
                            <span className="product-quantity-text">{quantity}</span>
                            <span className=" btn-increase-quantity" onClick={increaseQuantity}>➕</span>

                        </div>
                        <div  className="shipping-charges">
                            <input type="radio"
                                value={0}
                                onClick={(e) => { setDeliveryCharges(e.target.value) }}
                                name="shippingCharges"/> free-shipping
                            <input type="radio"
                                value={500}
                                onClick={(e) => { setDeliveryCharges(e.target.value) }}
                                name="shippingCharges" /> fast-shipping
                        </div>
                        <div>{deliveryCharges}</div>
                        <input type="text"
                            placeholder="Enter Shipping address"
                            className="input-shipping-address"
                            value={shippingAddress}
                            onChange={(e) => setShippingAddress(e.target.value)}
                        />
                <button type="button" className="btn btn-place-order"
                    onClick={placeOrder}>
                    place Order
                </button>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default BuyPage