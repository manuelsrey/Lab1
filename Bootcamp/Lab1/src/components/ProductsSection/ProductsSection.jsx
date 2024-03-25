import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductsSection.css";
import data from "../../fakeapi/data.json";

function ProductsSection() {
    return (
        <div className="procuts-section">
            {data.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductsSection;