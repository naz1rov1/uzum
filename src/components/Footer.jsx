import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-top container">
        <div className="footer-column">
          <h4>{t("about_us")}</h4>
          <a href="#">{t("submission_points")}</a>
          <a href="#">{t("vacancies")}</a>
        </div>

        <div className="footer-column">
          <h4>{t("for_users")}</h4>
          <a href="#">{t("contact_us")}</a>
          <a href="#">{t("faq")}</a>
        </div>

        <div className="footer-column">
          <h4>{t("for_entrepreneurs")}</h4>
          <a href="#">{t("sell_on_uzum")}</a>
          <a href="#">{t("seller_dashboard")}</a>
          <a href="#">{t("open_submission_point")}</a>
        </div>

        <div className="footer-column">
          <h4>{t("download_app")}</h4>
          <div className="store-buttons">
            <p>
              <i className="fa-brands fa-google-play"></i> Google Play
            </p>
            <p>
              <i className="fa-brands fa-apple"></i> App Store
            </p>
          </div>

          <h4 className="social-title">{t("social_media")}</h4>
          <div className="social-icons">
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-telegram"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom container">
        <div className="links">
          <a href="#">{t("privacy_policy")}</a>
          <a href="#">{t("terms_of_use")}</a>
        </div>
        <p>©2025 XК MCHJ «UZUM MARKET». STIR 309376127. {t("copyright")}.</p>
      </div>
    </footer>
  );
};

export default Footer;
