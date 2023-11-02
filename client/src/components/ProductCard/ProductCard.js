import React from "react";
import './ProductCard.css';

function ProductCard({name, description, price, image, category, brand}){
    return(
        <div className="product-card">
            <img src={image} alt={name} className="product-card-image"/>
            <p>{name}</p>

        </div>
    )
}

export default ProductCard ;