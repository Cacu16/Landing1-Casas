import React from 'react';

const CartWidget = () => {
  return (
    <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
      🛒
      <span style={{ marginLeft: 5 }}>3</span>
    </div>
  );
};

export default CartWidget;