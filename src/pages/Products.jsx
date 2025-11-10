import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Products = ({ cart, addToCart, increase, decrease }) => {
  const { t } = useTranslation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log("Xatolik:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <h2 style={{ textAlign: "center" }}>
        {t("loading") || "Yuklanmoqda..."}
      </h2>
    );

  return (
    <div className="products-container">
      <h2>{t("products") || "Mahsulotlar"}</h2>
      <div className="products-grid">
        {products.map((item) => {
          const inCart = cart[String(item.id)];
          return (
            <div className="product-card" key={`product-${item.id}`}>
              <div className="favorite">
                <i className="fa-regular fa-heart"></i>
              </div>
              <img src={item.thumbnail} alt={item.title} />
              <div className="info">
                <h3>{item.price.toLocaleString()} so'm</h3>
                <p className="brand">{item.brand}</p>
                <p className="desc">{item.description}</p>
                <div className="rating">
                  <i className="fa-regular fa-star"></i> {item.rating}{" "}
                  <span>({item.stock} reviews)</span>
                </div>
              </div>

              {inCart ? (
                <div className="count-controls">
                  <button onClick={() => decrease(item.id)}>-</button>
                  <span>{inCart.count}</span>
                  <button onClick={() => increase(item.id)}>+</button>
                </div>
              ) : (
                <button className="add-btn" onClick={() => addToCart(item)}>
                  <i className="fa-solid fa-basket-shopping"></i>{" "}
                  {t("add_to_cart") || "Savatchaga"}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(Products);
