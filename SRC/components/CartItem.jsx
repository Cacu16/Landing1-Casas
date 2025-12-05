import React from 'react';
import { useCart } from '../contexts/CartContext';

export default function CartItem({ item }) {
  const { removeItem } = useCart();

  return (
    <div style={{ display: 'flex', gap: 12, padding: 10, borderBottom: '1px solid #eee', alignItems: 'center' }}>
      <img src={item.image} alt={item.title} width={80} style={{ objectFit: 'cover', borderRadius: 6 }} />
      <div style={{ flex: 1 }}>
        <h4 style={{ margin: 0 }}>{item.title}</h4>
        <p style={{ margin: 0 }}>{item.qty} x ${item.price} = ${item.qty * item.price}</p>
      </div>
      <div>
        <button onClick={() => removeItem(item.id)}>Eliminar</button>
      </div>
    </div>
  );
}
