import React from "react";
import { useTranslation } from "react-i18next";
import "./About.css";
import logo from "../assets/logo.jpeg";
import cours from "../assets/photo2.jpeg";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      {/* Hero Banner avec titre intégré */}
      <section className="about-hero" style={{ backgroundImage: `linear-gradient(rgba(13, 27, 62, 0.7), rgba(13, 27, 62, 0.7)), url(${cours})` }}>
        <div className="hero-content">
          <h1>{t("about.title")}</h1>
          <p className="hero-slogan">{t("about.slogan")}</p>
        </div>
      </section>

      <div className="about-container">
        {/* Section Identité */}
        <section className="identity-section">
          <div className="logo-badge">
            <img src={logo} alt={t("about.logoAlt")} />
          </div>
          <div className="mission-content">
            <h2 className="section-title-navy">{t("about.missionTitle")}</h2>
            <div className="accent-bar"></div>
            <ul className="modern-list">
              <li>{t("about.mission.li1")}</li>
              <li>{t("about.mission.li2")}</li>
              <li>{t("about.mission.li3")}</li>
              <li>{t("about.mission.li4")}</li>
            </ul>
          </div>
        </section>

        {/* Section Infrastructure & Équipe */}
        <div className="info-split-grid">
          <section className="info-block">
            <h2 className="section-title-navy">{t("about.infrastructureTitle")}</h2>
            <ul className="infrastructure-list">
              <li>{t("about.infrastructure.li1")}</li>
              <li>{t("about.infrastructure.li2")}</li>
              <li>{t("about.infrastructure.li3")}</li>
              <li>{t("about.infrastructure.li4")}</li>
              <li>{t("about.infrastructure.li5")}</li>
            </ul>
          </section>

          <section className="info-block team-block">
            <h2 className="section-title-navy">{t("about.teamTitle")}</h2>
            <p className="team-text">{t("about.teamText")}</p>
            <div className="discount-highlight">
              <span className="star-icon">★</span>
              <strong>{t("about.discount")}</strong>
            </div>
          </section>
        </div>

        {/* Section Inscription & Contact */}
        <section className="registration-contact">
          <div className="registration-card">
            <h2 className="section-title-white">{t("about.registrationTitle")}</h2>
            <p>{t("about.registrationText")}</p>
          </div>
          
          <div className="contact-info-grid">
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <strong>{t("about.contact.addressLabel")}</strong>
                <p>{t("about.contact.address")}</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <strong>{t("about.contact.phoneLabel")}</strong>
                <p>{t("about.contact.phone")}</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <div>
                <strong>{t("about.contact.emailLabel")}</strong>
                <p>{t("about.contact.email")}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;