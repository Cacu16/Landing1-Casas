// src/components/ItemDetail.jsx
import React, { useState } from 'react';
import ItemCount from './ItemCount';
import { useCart } from '../contexts/CartContext';
import './ItemDetail.css';
import { Link } from 'react-router-dom';

export default function ItemDetail({ product }) {
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  if (!product) return <p>Producto no encontrado</p>;

  function handleAdd(qty) {
    addItem(product, qty);
    setAdded(true);
  }

  return (
    <div className="detail-wrap">
      <div className="detail-img">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="detail-info">
        <h2>{product.title}</h2>
        <p className="detail-desc">{product.description}</p>
        <p className="detail-price">Precio: <strong>${product.price}</strong></p>
        <p>Stock disponible: {product.stock}</p>

        {!added ? (
          <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
        ) : (
          <div style={{ marginTop: 12 }}>
            <p style={{ color: '#2f7a3e' }}>Producto agregado al carrito ✅</p>
            <Link to="/cart" className="item-btn">Ir al carrito</Link>
            <Link to="/" style={{ marginLeft: 8 }} className="item-btn">Seguir comprando</Link>
          </div>
        )}
      </div>
    </div>
  );
}
