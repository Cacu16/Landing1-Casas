import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const raw = localStorage.getItem('cart_v1');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('cart_v1', JSON.stringify(cart));
    } catch {}
  }, [cart]);

  function addItem(item, qty) {
    setCart(prev => {
      const existing = prev.find(p => p.id === item.id);
      if (existing) {
        return prev.map(p =>
          p.id === item.id ? { ...p, qty: Math.min(p.stock, p.qty + qty) } : p
        );
      }
      return [...prev, { ...item, qty }];
    });
  }

  function removeItem(id) {
    setCart(prev => prev.filter(p => p.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  function getTotalQty() {
    return cart.reduce((s, p) => s + p.qty, 0);
  }

  function getTotalPrice() {
    return cart.reduce((s, p) => s + p.qty * p.price, 0);
  }

  const value = { cart, addItem, removeItem, clearCart, getTotalQty, getTotalPrice };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
