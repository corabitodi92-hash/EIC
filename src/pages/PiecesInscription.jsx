import React, { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import "./PiecesInscription.css";

const PiecesInscription = () => {
  const { t } = useTranslation();
  const [checkedItems, setCheckedItems] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  // Génération dynamique basée sur les clés de ton fichier de traduction
  const documents = useMemo(() => [
    { key: "doc1", text: t("pieces.doc1") },
    { key: "doc2", text: t("pieces.doc2") },
    { key: "doc3", text: t("pieces.doc3") },
    { key: "doc4", text: t("pieces.doc4") },
    { key: "doc5", text: t("pieces.doc5") },
    { key: "doc6", text: t("pieces.doc6") },
    { key: "doc7", text: t("pieces.doc7") },
    { key: "doc8", text: t("pieces.doc8") },
    { key: "doc9", text: t("pieces.doc9") },
    { key: "doc10", text: t("pieces.doc10") },
    { key: "doc11", text: t("pieces.doc11") },
    { key: "doc12", text: t("pieces.doc12") },
    { key: "doc13", text: t("pieces.doc13") },
  ], [t]);

  const filteredDocuments = documents.filter(doc =>
    doc.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCheckboxChange = (key) => {
    setCheckedItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const progressPercentage = (checkedCount / documents.length) * 100;

  return (
    <div className="registration-page">
      {/* HERO HEADER */}
      <header className="registration-hero">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="hero-content"
        >
          <h1>{t("pieces.headerTitle")}</h1>
          <div className="red-divider"></div>
          <p>{t("pieces.title")}</p>
        </motion.div>
      </header>

      <main className="registration-main">
        {/* PROGRESS BAR FLOATING */}
        <div className="sticky-progress">
          <div className="progress-text">
            <span>{checkedCount} / {documents.length} {t("common.documents", "documents")}</span>
            <span className="percent">{Math.round(progressPercentage)}%</span>
          </div>
          <div className="progress-track">
            <motion.div 
              className="progress-thumb"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ type: "spring", stiffness: 50 }}
            />
          </div>
        </div>

        <div className="content-grid">
          {/* LISTE DES PIÈCES */}
          <section className="documents-section">
            <div className="search-box">
              <input
                type="text"
                placeholder={t("common.search") || "Rechercher..."}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <span className="search-icon">🔍</span>
            </div>

            <div className="checklist-container">
              <AnimatePresence>
                {filteredDocuments.map((doc, index) => (
                  <motion.div 
                    key={doc.key}
                    layout
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: index * 0.05 }}
                    className={`document-card ${checkedItems[doc.key] ? 'is-checked' : ''}`}
                    onClick={() => handleCheckboxChange(doc.key)}
                  >
                    <div className="custom-checkbox">
                      {checkedItems[doc.key] && <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }}>✓</motion.span>}
                    </div>
                    <span className="doc-label">{doc.text}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </section>

          {/* ASIDE : CAS SPÉCIAUX */}
          <aside className="special-instructions">
            <div className="instruction-card">
              <h3>⚠️ {t("pieces.specialTitle")}</h3>
              <div className="instruction-line"></div>
              <p>{t("pieces.specialDoc")}</p>
              <div className="help-box">
                <p><strong>{t("pieces.helpBox.title")}</strong></p>
                <p>{t("pieces.helpBox.description")}</p>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default PiecesInscription;