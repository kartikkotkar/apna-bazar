import React from "react";
import './ProductCard.css';

function ProductCard({ name, description, price, image, }) {
    return (
        <div className="product-card">
            <img src={image} alt={name} className="product-card-image" />
            <h1 className="product-card-name">{name}</h1>
            <p className="product-card-price">₹ {price}/-</p>

            <button className=" prouduct-card-button">buy now</button>

        </div>
    )
}

export default ProductCard;