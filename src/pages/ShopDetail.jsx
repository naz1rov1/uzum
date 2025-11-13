import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ShopDetail = ({ cart, increase, decrease, totalPrice }) => {
  const { t } = useTranslation();
  const items = Object.entries(cart);

  if (items.length === 0) {
    return (
      <div className="empty-cart">
        <h2>{t("empty_cart") || "Savat bo‘sh"}</h2>
        <Link to="/" className="back-btn">
          {t("back_to_products") || "Mahsulotlarga qaytish"}
        </Link>
      </div>
    );
  }

  return (
    <div className="main-container">
      <div className="shop-container">
        <h2>{t("cart_items") || "Savatdagi mahsulotlar"}</h2>

        {items.map(([id, item]) => (
          <div key={id} className="cart-item">
            <img src={item.thumbnail} alt={item.title} className="cart-image" />

            <div className="cart-info">
              <h3>{item.title}</h3>
              <p>
                {item.price.toLocaleString()} so‘m / {t("unit") || "dona"}
              </p>
              <div className="quantity">
                <button onClick={() => decrease(id)}>-</button>
                <span>{item.count}</span>
                <button onClick={() => increase(id)}>+</button>
              </div>  
            </div>

            <div className="cart-total">
              {(item.price * item.count).toLocaleString()} so‘m
            </div>
          </div>
        ))}

        <div className="summary">
          <h3>
            {t("total_payment") || "Jami to‘lov"}: {totalPrice.toLocaleString()}{" "}
            so‘m
          </h3>
          <button className="checkout-btn">
            {t("checkout") || "Rasmiylashtirish"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopDetail;
