import React from 'react';
import { useCart } from '../contexts/CartContext';
import CartItem from './CartItem';
import { Link, useNavigate } from 'react-router-dom';

export default function Cart() {
  const { cart, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  if (!cart.length) return (
    <div style={{ padding: 20 }}>
      <p>Tu carrito está vacío.</p>
      <Link to="/">Ir al catálogo</Link>
    </div>
  );

  return (
    <div style={{ padding: 20 }}>
      <h2>Tu carrito</h2>
      <div>
        {cart.map(i => <CartItem key={i.id} item={i} />)}
      </div>
      <h3>Total: ${getTotalPrice()}</h3>
      <div style={{ display: 'flex', gap: 10 }}>
        <button onClick={() => navigate('/checkout')}>Finalizar compra</button>
        <button onClick={clearCart}>Vaciar carrito</button>
      </div>
    </div>
  );
}
