import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <h2>{greeting}</h2>
      <p>Próximamente vas a ver nuestro catálogo de productos 👇</p>
    </div>
  );
};

export default ItemListContainer;