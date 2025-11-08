import React from "react";
import { Link } from "react-router-dom";
import uzum from "../assets/uzum-logo.png";

const Header = ({ totalCount, totalPrice }) => {
  return (
    <header className="header">
      <div className="top-bar">
        <div className="container top-inner">
          <div className="top-left">
            <span className="location"> Toshkent </span>
            <a href="#">Topshirish punktlari</a>
          </div>
          <div className="top-right">
            <a href="#">Sotuvchi bo‘lish</a>
            <a href="#">Savol-javob</a>
            <span className="lang">🇺🇿 O‘zbekcha</span>
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

          <button className="catalog"> Katalog</button>

          <div className="search-bar">
            <input type="text" placeholder="Mahsulotlar va turkumlar izlash" />
            <button>
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>

        <div className="right">
          <a href="#">
            <i class="fa-solid fa-circle-user"></i> Kirish
          </a>
          <a href="#">
            <i class="fa-regular fa-heart"></i> Saralangan
          </a>

          <Link to="/cart" className="cart">
            <i class="fa-solid fa-basket-shopping"></i> Savat
            <span className="cart-count">{totalCount}</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
