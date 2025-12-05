import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

export default function Item({ product }) {
  return (
    <article className="item-card">
      <div className="item-img">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="item-body">
        <h3>{product.title}</h3>
        <p className="item-price">${product.price}</p>
        <p className="item-stock">{product.stock > 0 ? `Stock: ${product.stock}` : 'Sin stock'}</p>
        <Link to={`/product/${product.id}`} className="item-btn">Ver detalle</Link>
      </div>
    </article>
  );
}


