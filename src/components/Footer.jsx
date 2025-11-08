import React from "react";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top container">
        <div className="footer-column">
          <h4>Biz haqimizda</h4>
          <a href="#">Topshirish punktlari</a>
          <a href="#">Vakansiyalar</a>
        </div>

        <div className="footer-column">
          <h4>Foydalanuvchilarga</h4>
          <a href="#">Biz bilan bog‘lanish</a>
          <a href="#">Savol-Javob</a>
        </div>

        <div className="footer-column">
          <h4>Tadbirkorlarga</h4>
          <a href="#">Uzumda soting</a>
          <a href="#">Sotuvchi kabinetiga kirish</a>
          <a href="#">Topshirish punktini ochish</a>
        </div>

        <div className="footer-column">
          <h4>Ilovani yuklab olish</h4>
          <div className="store-buttons">
            <p>
              {" "}
              <i class="fa-brands fa-google-play"></i>  google play 
            </p>

            <p>
              {" "}
              <i class="fa-brands fa-apple"></i>
              appStore
            </p>
          </div>

          <h4 className="social-title">Uzum ijtimoiy tarmoqlarda</h4>
          <div className="social-icons">
            <a href="#">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-telegram"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom container">
        <div className="links">
          <a href="#">Maxfiylik kelishuvi</a>
          <a href="#">Foydalanuvchi kelishuvi</a>
        </div>
        <p>
          ©2025 XК MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar
          himoyalangan.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
