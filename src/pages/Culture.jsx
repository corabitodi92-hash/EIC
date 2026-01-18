import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Culture.module.css";
import { motion } from "framer-motion";

// Images
import photo1 from "../assets/photo2.jpeg";
import photo2 from "../assets/photo1.jpeg";
import photo3 from "../assets/photo3.jpeg";
import photo4 from "../assets/photo4.jpeg";
import logo from "../assets/logo.jpeg";
import hero from "../assets/hero.jpeg";

// Vidéos
import videoChi from "../assets/videoChi.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";
import animation_scolaire from "../assets/animation_scolaire.mp4";
import parles_chinoi from "../assets/parles_chinoi.mp4";
import celebration_anniv from "../assets/celebration_anniv.mp4";
import Reunion_prise_contacte from "../assets/Reunion_prise_contacte.mp4";
import activite_sportives from "../assets/activite_sportives.mp4";
import comportement_eleve from "../assets/comportement_eleve.mp4";
import presentation_Ecole from "../assets/presentation_Ecole.mp4";
import Remise_polo from "../assets/Remise_polo.mp4";

const Culture = () => {
  const { t } = useTranslation();
  const [animateHero, setAnimateHero] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimateHero(true), 100);
  }, []);

  // On génère dynamiquement les items de galerie pour correspondre aux index du JSON
  const galleryItems = [
    { id: 1, src: photo1 },
    { id: 2, src: photo2 },
    { id: 3, src: photo3 },
    { id: 4, src: photo4 },
    { id: 5, src: logo },
    { id: 6, src: hero },
  ];

  // Idem pour les vidéos
  const videoSources = [
    videoChi, video2, video3, animation_scolaire, parles_chinoi, 
    celebration_anniv, Reunion_prise_contacte, activite_sportives, 
    comportement_eleve, presentation_Ecole, Remise_polo
  ];

  return (
    <main className={styles["culture-container"]}>
      {/* SECTION HERO */}
      <section className={`${styles["hero-section"]} ${animateHero ? styles.animate : ""}`}>
        <div className={styles["hero-overlay"]}>
          <h1>{t("culture.hero.title")}</h1>
          <div className={styles["hero-underline"]}></div>
          <p>{t("culture.hero.description")}</p>
        </div>
      </section>

      <div className={styles["content-wrapper"]}>
        
        {/* SECTION GALERIE PHOTOS */}
        <section className={styles.section}>
          <div className={styles["section-header"]}>
            <h2 className={styles.subtitle}>{t("culture.gallery.subtitle")}</h2>
            <div className={styles["red-bar"]}></div>
          </div>
          
          <div className={styles["gallery-grid"]}>
            {galleryItems.map((item, index) => (
              <motion.div 
                key={item.id} 
                className={styles["gallery-card"]}
                whileHover={{ y: -10 }}
              >
                <div className={styles["image-container"]}>
                  <img src={item.src} alt={t(`culture.gallery.items.${index}`)} />
                </div>
                <div className={styles["card-footer"]}>
                  <p>{t(`culture.gallery.items.${index}`)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION VIDÉOTHÈQUE */}
        <section className={styles["section-white"]}>
          <div className={styles["section-header"]}>
            <h2 className={styles.subtitle}>{t("culture.videos.subtitle")}</h2>
            <div className={styles["red-bar"]}></div>
          </div>

          <div className={styles["video-grid"]}>
            {videoSources.map((src, index) => (
              <div key={index} className={styles["video-card"]}>
                <div className={styles["video-wrapper"]}>
                  <video controls>
                    <source src={src} type="video/mp4" />
                    {t("culture.videos.unsupported")}
                  </video>
                </div>
                <div className={styles["video-info"]}>
                  <h3>{t(`culture.videos.items.${index}.title`)}</h3>
                  <p>{t(`culture.videos.items.${index}.description`)}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* RÉSEAUX SOCIAUX */}
        <section className={styles["social-footer"]}>
          <h2>{t("culture.social.title")}</h2>
          <p>{t("culture.social.description")}</p>
          <div className={styles["social-links"]}>
            <a href="#" className={styles["facebook"]}><i className="bi bi-facebook"></i></a>
            <a href="#" className={styles["instagram"]}><i className="bi bi-instagram"></i></a>
            <a href="#" className={styles["youtube"]}><i className="bi bi-youtube"></i></a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Culture;