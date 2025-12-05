import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products as mockProducts } from '../data/products';
import ItemDetail from '../components/ItemDetail';

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => {
      const found = mockProducts.find(p => p.id === id);
      setProduct(found || null);
      setLoading(false);
    }, 300);
    return () => clearTimeout(t);
  }, [id]);

  if (loading) return <p style={{ padding: 20 }}>Cargando detalle...</p>;
  if (!product) return <p style={{ padding: 20 }}>Producto no encontrado.</p>;

  return <ItemDetail product={product} />;
}
