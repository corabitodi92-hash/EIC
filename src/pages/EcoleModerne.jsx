import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import styles from "./EcoleModerne.module.css";

export default function EcoleModerne() {
  const [animate, setAnimate] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setAnimate(true);
  }, []);

  // On crée un tableau d'objets pour pouvoir associer une icône à chaque point i18n
  const specifications = [
    { icon: "🏫", text: t("ecoleModerne.item1") },
    { icon: "🛡️", text: t("ecoleModerne.item2") },
    { icon: "👨‍🏫", text: t("ecoleModerne.item3") },
    { icon: "📹", text: t("ecoleModerne.item4") },
    { icon: "💧", text: t("ecoleModerne.item5") },
    { icon: "⚡", text: t("ecoleModerne.item6") },
    { icon: "🚌", text: t("ecoleModerne.item7") },
    { icon: "🧸", text: t("ecoleModerne.item8") },
    { icon: "🩺", text: t("ecoleModerne.item9") },
    { icon: "⚽", text: t("ecoleModerne.item10") },
    { icon: "🌍", text: t("ecoleModerne.item11") },
    { icon: "📅", text: t("ecoleModerne.item12") },
    { icon: "💬", text: t("ecoleModerne.item13") },
  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Hero Header */}
      <header className={styles.hero}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.heroContent}
        >
          <h1>{t("ecoleModerne.title")}</h1>
          <div className={styles.underline}></div>
          <p>{t("ecoleModerne.subtitle")}</p>
        </motion.div>
      </header>

      <main className={styles.mainContent}>
        {/* Grille des spécifications */}
        <div className={styles.specsGrid}>
          {specifications.map((item, index) => (
            <motion.div 
              key={index}
              className={styles.specCard}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={animate ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.05 }}
            >
              <span className={styles.icon}>{item.icon}</span>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Section Valeurs (Bas de page) */}
        <motion.div 
          className={styles.valuesSection}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className={styles.valuesDecor}></div>
          <p>{t("ecoleModerne.values")}</p>
        </motion.div>
      </main>
    </div>
  );
}