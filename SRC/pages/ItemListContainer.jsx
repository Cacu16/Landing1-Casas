import React, { useEffect, useState } from 'react';
import ItemList from '../components/ItemList';
import { products as mockProducts } from '../data/products';

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const t = setTimeout(() => {
      setProducts(mockProducts);
      setLoading(false);
    }, 400);

    return () => clearTimeout(t);
  }, []);

  if (loading) return <p style={{ padding: 20 }}>Cargando productos...</p>;
  if (!products.length) return <p style={{ padding: 20 }}>No hay productos.</p>;

  return (
    <div>
      <header style={{ padding: 20, textAlign: 'center' }}>
        <h1>Yerba Mate Ciudad Evita — Catálogo</h1>
        <p>Seleccioná tu yerba o accesorio y agrégala al carrito.</p>
      </header>

      <ItemList products={products} />
    </div>
  );
}

