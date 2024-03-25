import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
    const { id, title, price, description, image, rating } = product;

    return (
        <div className="product-card" key={id}>
            <img className="product-image" src={image} alt={title} />
            <div className="product-info">
                <h3 className="product-title">{title}</h3>
                <p className="product-description">{description}</p>
                <p className="product-rating">{rating}</p>
                <p className="product-price">{`$${price}`}</p>
            </div>
        </div>
    );
};