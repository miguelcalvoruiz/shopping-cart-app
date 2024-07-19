import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, removeProduct }) => {
    return (
        <div className="card flex items-center p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
            <img className="image w-24 h-24 object-cover rounded-lg mr-4" src={product.image} alt={product.name} />
            <div className="details flex-1">
                <h2 className="text-xl font-semibold text-primary">{product.name}</h2>
                <p className="text-gray-600">{product.description}</p>
                <span className="text-lg font-bold text-accent">{product.price}€</span>
            </div>
            <button onClick={() => removeProduct(product)} className="remove-button text-red-500 text-2xl ml-4">❌</button>
        </div>
    );
}

export default ProductCard;
