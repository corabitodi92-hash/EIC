import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import styles from "./Enseignement.module.css";

export default function Enseignement() {
  const [animate, setAnimate] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setAnimate(true);
  }, []);

  // Extraction dynamique des programmes
  const programmes = [
    t("enseignement.programme1"),
    t("enseignement.programme2"),
    t("enseignement.programme3"),
    t("enseignement.programme4"),
    t("enseignement.programme5"),
    t("enseignement.programme6"),
    t("enseignement.programme7"),
    t("enseignement.programme8"),
  ];

  return (
    <div className={styles.teachingPage}>
      {/* Header avec Overlay */}
      <header className={styles.heroHeader}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className={styles.heroContent}
        >
          <h1>{t("enseignement.title")}</h1>
          <div className={styles.divider}></div>
          <p className={styles.slogan}>{t("enseignement.slogan")}</p>
        </motion.div>
      </header>

      <div className={styles.container}>
        {/* Section Programmes : Grille interactive */}
        <section className={styles.programSection}>
          <h2 className={styles.sectionTitle}>{t("enseignement.subtitleProgram")}</h2>
          <div className={styles.programGrid}>
            {programmes.map((item, index) => (
              <motion.div 
                key={index}
                className={styles.programCard}
                initial={{ opacity: 0, y: 20 }}
                animate={animate ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
              >
                <div className={styles.cardIndex}>0{index + 1}</div>
                <p>{item}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section Description : Style Institutionnel */}
        <section className={styles.descriptionSection}>
          <div className={styles.descImageHolder}>
            {/* Emplacement pour une image de classe ou d'élève */}
            <div className={styles.accentSquare}></div>
          </div>
          <div className={styles.descContent}>
            <h2 className={styles.sectionTitle}>{t("enseignement.subtitleSchool")}</h2>
            <div className={styles.infoBox}>
              <p>{t("enseignement.description")}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}