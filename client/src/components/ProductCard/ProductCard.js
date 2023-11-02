import React from "react";
import './ProductCard.css';
import { Link } from "react-router-dom";

function ProductCard({id, name, description, price, image, }) {
    return (
        <div className="product-card">
            <img src={image} alt={name} className="product-card-image" />
            <h1 className="product-card-name">{name}</h1>
            <p className="product-card-price">₹ {price}/-</p>

            <Link to={`/buy/${id}`}
                className=" prouduct-card-button">
                buy now
            </Link>

        </div>
    )
}

export default ProductCard;