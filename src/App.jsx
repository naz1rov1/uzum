import React, { useState, useMemo, useCallback } from "react";
import { Routes, Route } from "react-router-dom"; 
import Header from "./components/Header";
import Products from "./pages/Products";
import ShopDetail from "./pages/ShopDetail";
import Footer from "./components/Footer";

const App = () => {
  const [cart, setCart] = useState({});

  const totalPrice = useMemo(() => {
    return Object.values(cart).reduce(
      (total, item) => total + item.price * item.count,
      0
    );
  }, [cart]);

  const totalCount = useMemo(() => {
    return Object.values(cart).reduce((total, item) => total + item.count, 0);
  }, [cart]);

  const addToCart = useCallback((product) => {
    setCart((c) => {
      const existing = c[product.id];
      if (existing) {
        return {
          ...c,
          [product.id]: { ...existing, count: existing.count + 1 },
        };
      } else {
        return {
          ...c,
          [product.id]: { ...product, count: 1 },
        };
      }
    });
  }, []);

  const increase = useCallback((id) => {
    setCart((c) => {
      const item = c[id];
      if (item) {
        return {
          ...c,
          [id]: { ...item, count: item.count + 1 },
        };
      }
      return c;
    });
  }, []);

  const decrease = useCallback((id) => {
    setCart((c) => {
      const item = c[id];
      if (!item) return c;

      if (item.count === 1) {
        const copy = { ...c };
        delete copy[id];
        return copy;
      } else {
        return {
          ...c,
          [id]: { ...item, count: item.count - 1 },
        };
      }
    });
  }, []);

  return (
    <>
      <Header totalCount={totalCount} totalPrice={totalPrice} />
      <Routes>
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
        <Route
          path="/cart"
          element={
            <ShopDetail
              cart={cart}
              increase={increase}
              decrease={decrease}
              totalPrice={totalPrice}
            />
          }
        />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
