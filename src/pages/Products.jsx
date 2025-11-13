import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Products = ({ cart, addToCart, increase, decrease }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log("Xatolik:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <h2 style={{ textAlign: "center", marginTop: "40px" }}>Yuklanmoqda...</h2>
    );

  return (
    <div className="products-container">
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Mahsulotlar</h2>

      <div className="products-grid">
        {products.map((item) => {
          const inCart = cart[String(item.id)];
          return (
            <div className="product-card" key={`product-${item.id}`}>
              <div className="favorite">
                <i className="fa-regular fa-heart"></i>
              </div>

              {/* Rasmga bosilganda detail sahifaga o'tadi */}
              <img
                src={item.thumbnail}
                alt={item.title}
                onClick={() => navigate(`/product/${item.id}`)}
                style={{ cursor: "pointer" }}
              />

              <div className="info">
                <h3>{item.price.toLocaleString()} so'm</h3>
                <p className="brand">{item.brand}</p>
                <p className="desc">{item.description.slice(0, 60)}...</p>
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
                  <i className="fa-solid fa-basket-shopping"></i> Savatchaga
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
