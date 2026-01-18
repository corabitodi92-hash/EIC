import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Galerie.css";

// Assets
import photo1 from "../assets/photo1.jpeg";
import photo2 from "../assets/photo2.jpeg";

export default function Galerie() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Animation variants pour les cartes
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 }
    })
  };

  return (
    <main className="galerie-container">
      {/* SECTION HERO */}
      <section className="galerie-hero">
        <motion.div 
          className="hero-text-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>
            {t("home.schoolName")}
          </h1>
          <div className="hero-underline-left"></div>
          <p className="hero-motto">{t("home.motto")}</p>
          <p className="hero-description-main">{t("home.description")}</p>
          
          <div className="hero-action-btns">
            <button className="btn-filled" onClick={() => navigate("/enseignement")}>
              {t("home.Icons.title")}
            </button>
            <button className="btn-border" onClick={() => navigate("/contact")}>
              {t("menu.contact")}
            </button>
          </div>
        </motion.div>
        <div className="hero-decorative-shape"></div>
      </section>

      {/* SECTION POURQUOI CHOISIR L'EIC (Features) */}
      <section className="galerie-features">
        <h2 className="section-title-main">{t("home.particularities.title")}</h2>
        <div className="features-flex-grid">
          {[1, 2, 3, 4].map((num) => (
            <motion.div 
              key={num}
              className="feature-glass-card"
              custom={num}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <div className="feature-status-icon">
                {num === 1 ? "🛡️" : num === 2 ? "🌏" : num === 3 ? "🚀" : "🎓"}
              </div>
              <p>{t(`home.particularities.p${num}`)}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION CAMPUS (Image & Texte) */}
      <section className="campus-highlight">
        <div className="campus-grid-layout">
          <motion.div 
            className="campus-info-block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2>{t("home.title")}</h2>
            <div className="small-red-line"></div>
            <p className="campus-long-text">{t("home.description")}</p>
            <ul className="campus-bullet-list">
              <li>{t("home.particularities.p1")}</li>
              <li>{t("home.particularities.p2")}</li>
            </ul>
          </motion.div>

          <div className="campus-visuals">
            <motion.div className="img-frame-large" whileHover={{ scale: 1.02 }}>
              <img src={photo1} alt="Campus View" />
            </motion.div>
            <motion.div className="img-frame-small" whileHover={{ scale: 1.05 }}>
              <img src={photo2} alt="Student Activity" />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}