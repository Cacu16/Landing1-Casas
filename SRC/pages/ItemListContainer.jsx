import React, { useEffect, useState } from "react";
import ItemList from "../components/ItemList";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsData);
      } catch (error) {
        console.error("Error al traer productos:", error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) return <p style={{ padding: 20 }}>Cargando productos...</p>;
  if (!products.length) return <p style={{ padding: 20 }}>No hay productos.</p>;

  return (
    <div>
      <header style={{ padding: 20, textAlign: "center" }}>
        <h1>Yerba Mate Ciudad Evita — Catálogo</h1>
        <p>Seleccioná tu yerba o accesorio y agrégala al carrito.</p>
      </header>

      <ItemList products={products} />
    </div>
  );
}
