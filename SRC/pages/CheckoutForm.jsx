import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

export default function CheckoutForm() {
  const { cart, getTotalPrice, clearCart } = useCart();
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const navigate = useNavigate();

  if (!cart.length) return (
    <div style={{ padding: 20 }}>
      <p>Carrito vacío.</p>
      <button onClick={() => navigate('/')}>Volver al catálogo</button>
    </div>
  );

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const order = {
      buyer: form,
      items: cart,
      total: getTotalPrice(),
      date: new Date().toISOString()
    };

    await new Promise(r => setTimeout(r, 800));
    const id = 'ORDER_' + Date.now();
    setOrderId(id);
    clearCart();
    setLoading(false);
  }

  if (orderId) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Compra confirmada</h2>
        <p>Gracias por tu compra — tu orden tiene id: <strong>{orderId}</strong></p>
        <button onClick={() => navigate('/')}>Volver al inicio</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 480, padding: 20 }}>
      <h2>Checkout</h2>
      <label>
        Nombre
        <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
      </label>
      <br />
      <label>
        Email
        <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
      </label>
      <br />
      <label>
        Teléfono
        <input required value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
      </label>

      <p>Total: ${getTotalPrice()}</p>

      <button type="submit" disabled={loading}>{loading ? 'Procesando...' : 'Confirmar compra'}</button>
    </form>
  );
}
