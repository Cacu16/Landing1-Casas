import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import './CartWidget.css';

export default function CartWidget() {
  const { getTotalQty } = useCart();
  const qty = getTotalQty();

  return (
    <Link to="/cart" className="cart-widget" aria-label="Ver carrito">
      🛒
      <span className="cart-count">{qty}</span>
    </Link>
  );
}

