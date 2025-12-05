import React, { useState } from 'react';

export default function ItemCount({ stock, initial = 1, onAdd }) {
  const [qty, setQty] = useState(initial);

  function inc() {
    setQty(q => Math.min(stock, q + 1));
  }
  function dec() {
    setQty(q => Math.max(1, q - 1));
  }

  return (
    <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginTop: 12 }}>
      <button onClick={dec} disabled={qty <= 1}>-</button>
      <span>{qty}</span>
      <button onClick={inc} disabled={qty >= stock}>+</button>
      <button onClick={() => onAdd(qty)} disabled={stock === 0} style={{ marginLeft: 6 }}>
        Agregar al carrito
      </button>
    </div>
  );
}
