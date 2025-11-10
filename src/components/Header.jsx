import React from "react";
import { Link } from "react-router-dom";
import uzum from "../assets/uzum-logo.png";
import { useTranslation } from "react-i18next";

const Header = ({ totalCount }) => {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <header className="header">
      <div className="top-bar">
        <div className="container top-inner">
          <div className="top-left">
            <span className="location">{t("location")}</span>
            <a href="#">{t("delivery_points")}</a>
          </div>
          <div className="top-right">
            <a href="#">{t("be_seller")}</a>
            <a href="#">{t("faq")}</a>
            <span className="lang">{t("language")}</span>
            <select onChange={handleChangeLanguage} value={i18n.language}>
              <option value="uz">O‘zbekcha</option>
              <option value="en">English</option>
              <option value="ru">Русский</option>
            </select>
          </div>
        </div>
      </div>

      <div className="container main-header">
        <div className="left">
          <div className="logo">
            <Link to="/">
              <img src={uzum} alt="Uzum Market" />
            </Link>
          </div>

          <button className="catalog">{t("catalog")}</button>

          <div className="search-bar">
            <input type="text" placeholder={t("search_placeholder")} />
            <button>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>

        <div className="right">
          <a href="#">
            <i className="fa-solid fa-circle-user"></i> {t("login")}
          </a>
          <a href="#">
            <i className="fa-regular fa-heart"></i> {t("favorites")}
          </a>

          <Link to="/cart" className="cart">
            <i className="fa-solid fa-basket-shopping"></i> {t("cart")}
            <span className="cart-count">{totalCount}</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
