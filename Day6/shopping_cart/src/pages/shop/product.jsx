import React from 'react';
import '../../styles/product.css';

export default function Product(props) {
  const { name, img, price, desc, quantity } = props.data;
  
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={img} alt={name} />
      </div>
      <div className="product-details">
        <h2 className="product-name">{name}</h2>
        <p className="product-price">${price}</p>
        <p className="product-description">{desc}</p>
        <p className="product-quantity">Quantity: {quantity}</p>
      </div>
    </div>
  );
}
