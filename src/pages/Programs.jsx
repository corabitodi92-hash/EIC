import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "./Programs.css";

// Assets
import logo from "../assets/logo.jpeg";
import cours from "../assets/photo2.jpeg";

export default function Programs() {
  const { t } = useTranslation();

  const data = t("programs", { returnObjects: true }) || {};
  const maternList = data.maternelleList || [];
  const lyceeList = data.lyceeList || [];
  const particularitiesList = data.particularitiesList || [];
  const tableHeaders = data.tableHeaders || [];
  const tableBody = data.tableBody || [];

  return (
    <div className="programs-page-wrapper">
      {/* 1. HERO : Impact visuel fort */}
      <section className="programs-hero">
        <img src={cours} alt="Students" className="hero-bg" />
        <div className="hero-overlay">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-text-box"
          >
            <h1>{data.title}</h1>
            <div className="accent-bar"></div>
          </motion.div>
        </div>
      </section>

      <main className="programs-content-flow">
        
        {/* 2. INTRO : Le Logo et le texte d'accueil */}
        <section className="intro-block">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="intro-inner-card"
          >
            <img src={logo} alt="Logo EIC" className="institution-logo" />
            <p className="main-intro-text">{data.intro}</p>
          </motion.div>
        </section>

        {/* 3. CURRICULUM : Organisation des cycles scolaires */}
        <section className="educational-block">
          <div className="curriculum-grid">
            <div className="curriculum-item">
              <div className="item-header">
                <span className="icon-sphere">🧸</span>
                <h3>{data.maternelleTitle}</h3>
              </div>
              <ul className="styled-list">
                {maternList.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="curriculum-item">
              <div className="item-header">
                <span className="icon-sphere">📚</span>
                <h3>{data.lyceeTitle}</h3>
              </div>
              <ul className="styled-list">
                {lyceeList.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 4. PARTICULARITIES : Ce qui rend l'école unique */}
        <section className="features-block">
          <div className="features-container">
            <h3>{data.particularitiesTitle}</h3>
            <div className="features-pills">
              {particularitiesList.map((item, idx) => (
                <span key={idx} className="feature-pill">
                  <i className="check-icon">✓</i> {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 5. PRICING : Tableau institutionnel aéré */}
        <section className="financial-block">
          <div className="pricing-card">
            <div className="pricing-header">
              <h2>{data.pricingTitle}</h2>
              <p className="currency-hint">Tarifs en Francs CFA (XAF)</p>
            </div>

            <div className="table-responsive-container">
              {/* Petit indicateur visuel pour le scroll sur mobile */}
              <div className="scroll-indicator">↔ Glissez pour voir les tarifs</div>
              
              <table className="institution-table">
                <thead>
                  <tr>
                    {tableHeaders.map((header, idx) => (
                      <th key={idx}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableBody.map((row, idx) => (
                    <tr key={idx}>
                      {row.map((cell, cidx) => (
                        <td key={cidx}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {data.note && (
              <div className="legal-note">
                <span className="info-badge">INFO</span>
                <p>{data.note}</p>
              </div>
            )}
          </div>
        </section>

      </main>
    </div>
  );
}