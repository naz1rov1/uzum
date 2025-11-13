import React, { useState, useMemo, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import DetailProducts from "./pages/Detailproducts";

const App = () => {
  const [cart, setCart] = useState({});

  // jami narxni hisoblash
  const totalPrice = useMemo(() => {
    return Object.values(cart).reduce(
      (total, item) => total + item.price * item.count,
      0
    );
  }, [cart]);

  // jami mahsulotlar soni
  const totalCount = useMemo(() => {
    return Object.keys(cart).length;
  }, [cart]);

  // savatchaga qo‘shish
  const addToCart = useCallback((product) => {
    const id = String(product.id);
    setCart((prev) => {
      const existing = prev[id];
      if (existing) {
        return {
          ...prev,
          [id]: { ...existing, count: existing.count + 1 },
        };
      }
      return {
        ...prev,
        [id]: { ...product, count: 1 },
      };
    });
  }, []);

  // sonini oshirish
  const increase = useCallback((id) => {
    const key = String(id);
    setCart((c) => {
      const item = c[key];
      if (!item) return c;
      return {
        ...c,
        [key]: { ...item, count: item.count + 1 },
      };
    });
  }, []);

  // sonini kamaytirish
  const decrease = useCallback((id) => {
    const key = String(id);
    setCart((c) => {
      const item = c[key];
      if (!item) return c;

      if (item.count === 1) {
        const copy = { ...c };
        delete copy[key];
        return copy;
      }
      return {
        ...c,
        [key]: { ...item, count: item.count - 1 },
      };
    });
  }, []);

  return (
    <>
      <Header totalCount={totalCount} totalPrice={totalPrice} />
      <Routes>
        {/* Barcha mahsulotlar sahifasi */}
        <Route
          path="/"
          element={
            <Products
              cart={cart}
              addToCart={addToCart}
              increase={increase}
              decrease={decrease}
            />
          }
        />

        {/* Mahsulot tafsilot sahifasi */}
        <Route
          path="/product/:id"
          element={
            <DetailProducts
              cart={cart}
              addToCart={addToCart}
              increase={increase}
              decrease={decrease}
            />
          }
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
