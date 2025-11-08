import React from "react";

import { Link } from "react-router-dom";

const ShopDetail = ({ cart, increase, decrease, totalPrice }) => {
  const items = Object.values(cart);

  if (items.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Savat bo‘sh </h2>
        <Link to="/"> Mahsulotlarga qaytish</Link>
      </div>
    );
  }

  return (
    <div className="main-container">
      <div className="shop-container">
        <h2>Savatdagi mahsulotlar</h2>

        {items.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.thumbnail} alt={item.title} className="cart-image" />
            <div className="cart-info">
              <h3>{item.title}</h3>
              <p>{item.price.toLocaleString()} so‘m / dona</p>
              <div className="quantity">
                <button onClick={() => decrease(item.id)}>-</button>
                <span>{item.count}</span>
                <button onClick={() => increase(item.id)}>+</button>
              </div>
            </div>
            <div className="cart-total">
              {(item.price * item.count).toLocaleString()} so‘m
            </div>
          </div>
        ))}

        <div className="summary">
          <h3>Jami to‘lov: {totalPrice.toLocaleString()} so‘m</h3>
          <button className="checkout-btn">Rasmiylashtirish</button>
        </div>
      </div>
    </div>
  );
};

export default ShopDetail;
