import React from "react";
import "./BuyPage.css";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";


function BuyPage() {

    const { id } = useParams();
    const [product, setProduct] = useState();
    const loadProducts = async () => {

        if (!id) {
            return;
        }
        const response = await axios.get(`/product/${id}`);
        setProduct(response?.data?.date[0]);
    };
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
                    <div>
                        <h1>₹ {product?.price}</h1>
                        <h1>{product?.name}</h1>
                        <p>{product?.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default BuyPage