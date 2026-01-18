import { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom"; // 1. Importer le hook
import "./ImageSlider.css";

// Import des images
import photo2 from "../assets/photo2.jpeg";
import ecoleA from "../assets/ecoleA.jpeg";
import photo1 from "../assets/photo1.jpeg";
import photo3 from "../assets/photo3.jpeg";
import photo4 from "../assets/photo4.jpeg";

const slidesData = [
  { src: photo2, key: "slide1" },
  { src: ecoleA, key: "slide2" },
  { src: photo1, key: "slide3" },
  { src: photo3, key: "slide4" },
  { src: photo4, key: "slide5" },
];

export default function ImageSlider() {
  const { t } = useTranslation();
  const navigate = useNavigate(); // 2. Initialiser le hook
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slidesData.length) % slidesData.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="image-slider" aria-roledescription="carousel">
      <div className="slider-wrapper">
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${slide.src})` }}
          >
            <div className="slide-content">
              <h2 className="slide-title">{t(`home.slider.${slide.key}.title`)}</h2>
              <p className="slide-description">{t(`home.slider.${slide.key}.description`)}</p>
              
              {/* 3. Ajouter l'événement onClick avec navigate */}
              <button 
                className="slide-cta" 
                onClick={() => navigate("/tarifs")} 
              >
                {t("common.learnMore")}
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="nav-btn prev" onClick={prevSlide} aria-label={t("common.previous")}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      
      <button className="nav-btn next" onClick={nextSlide} aria-label={t("common.next")}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
      </button>

      <div className="dots-container">
        {slidesData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}