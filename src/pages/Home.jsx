import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ImageSlider from "../components/ImageSlider";
import activitiesImage from "../assets/photo4.jpeg";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="home-wrapper">
      {/* 1. HERO SLIDER */}
      <ImageSlider />

      {/* 2. MAIN CONTENT (GRID LAYOUT) */}
      <main className="main-content">
        <div className="content-container">
          
          {/* COLONNE GAUCHE : IDENTITÉ & VALEURS */}
          <aside className="column-left">
            <section className="info-card identity-card">
              <h2 className="section-title">{t("home.particularities.title")}</h2>
              <div className="title-underline"></div>
              <p className="description-text">{t("home.description")}</p>
              <ul className="feature-list">
                <li><span className="bullet">✓</span> {t("home.particularities.p1")}</li>
                <li><span className="bullet">✓</span> {t("home.particularities.p2")}</li>
                <li><span className="bullet">✓</span> {t("home.particularities.p3")}</li>
              </ul>
            </section>

            {/* BOX ADMISSION RAPIDE */}
            <div className="admission-cta" onClick={() => navigate("/pieces-inscription")}>
               <h3>{t("home.admission.title")}</h3>
               <p>{t("home.admission.subtitle")}</p>
               <button className="btn-small">{t("common.details")}</button>
            </div>
          </aside>

          {/* COLONNE DROITE : PROGRAMMES & ACTIVITÉS */}
          <div className="column-right">
            
            {/* SECTION PROGRAMMES */}
            <section className="info-card">
              <h2 className="section-title">{t("home.Icons.title")}</h2>
              <div className="title-underline"></div>
              <div className="programs-grid">
                <div className="program-item">
                  <div className="icon-circle">🎓</div>
                  <h4>{t("home.Icons.p1")}</h4>
                  <button className="btn-link" onClick={() => navigate("/enseignement")}>
                    {t("common.learnMoreUpper")}
                  </button>
                </div>
                <div className="program-item">
                  <div className="icon-circle">🏫</div>
                  <h4>{t("home.Icons.p2")}</h4>
                  <button className="btn-link" onClick={() => navigate("/ecole-moderne")}>
                    {t("common.learnMoreUpper")}
                  </button>
                </div>
                <div className="program-item">
                  <div className="icon-circle">✏️</div>
                  <h4>{t("home.Icons.p3")}</h4>
                  <button className="btn-link" onClick={() => navigate("/pieces-inscription")}>
                    {t("common.learnMoreUpper")}
                  </button>
                </div>
              </div>
            </section>

            {/* SECTION ACTIVITÉS */}
            <section className="info-card activities-section">
              <h2 className="section-title">{t("home.activities.title")}</h2>
              <div className="title-underline"></div>
              <div className="activity-layout">
                <div className="activity-info">
                  <p className="activity-subtitle">{t("home.activities.subtitle")}</p>
                  <p className="news-text">{t("home.activities.newsText")}</p>
                </div>
                <div className="activity-visual">
                   <img src={activitiesImage} alt={t("home.activities.title")} className="activity-image" />
                </div>
              </div>
              {/* Dans la section activités */}
            <button className="btn-secondary" onClick={() => navigate("/culture")}>
              {t("common.viewMore")}
            </button>
             </section>
          </div>
        </div>

        {/* 3. SECTION MAP */}
       {/* 3. SECTION CONTACT & MAP (Side-by-Side) */}
<section className="map-section-new">
  <div className="map-info-container">
    <div className="map-info-card-side">
      <h2 className="section-title">{t("home.location.title")}</h2>
      <div className="title-underline"></div>
      
      <div className="contact-item">
        <span className="contact-icon">📍</span>
        <div className="contact-details">
          <strong>{t("home.location.address")}</strong>
          <p>{t("home.location.city")}</p>
        </div>
      </div>

    </div>
  </div>

  <div className="google-map-side">
    {/* Iframe fixée sur les coordonnées exactes */}
    <iframe 
      title="EIC Brazzaville Map"
      src="https://maps.google.com/maps?q=-4.279675,15.264199&hl=fr&z=17&output=embed" 
      width="100%" 
      height="100%" 
      style={{ border: 0 }} 
      allowFullScreen="" 
      loading="lazy"
    ></iframe>
  </div>
</section>
      </main>
    </div>
  );
}