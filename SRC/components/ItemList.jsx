import React from 'react';
import Item from './Item';

export default function ItemList({ products }) {
  return (
    <div style={{ display: 'grid', gap: 20, padding: 20 }}>
      {products.map(p => (
        <Item key={p.id} product={p} />
      ))}
    </div>
  );
}
