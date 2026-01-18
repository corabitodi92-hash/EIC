import { useTranslation } from "react-i18next";
import "./Home.css";

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="home">

      {/* ===== SECTION ACCUEIL / SLIDER ===== */}
      <section className="slider">

        {/* flèche gauche */}
     

        <div className="slider-content">

          {/* 1. HISTORIQUE */}
          <div className="slide-box history">
            <h3>{t("home.title")}</h3>
            <p>{t("home.history")}</p>
          </div>

          {/* 2. IMAGE + TEXTE */}
          <div className="slide-box hero-image">
            <div className="hero-text">
              <h2>{t("home.welcome")}</h2>
              <button className="btn-orange">
                {t("common.learnMore")}
              </button>
            </div>
          </div>

          {/* 3. IMAGE ÉCOLE */}
          <div className="slide-box school-image">
            {/* image via CSS */}
          </div>

        </div>

        {/* flèche droite */}
       

        {/* pagination */}
        
      </section>

      {/* ===== SECTION PROGRAMMES ===== */}
      <section className="bottom-section">

        {/* 1. PROGRAMME */}
        <div className="bottom-box blue">
          <h3>{t("home.programs.title")}</h3>
          <p>{t("home.programs.bilingual.desc")}</p>
        </div>

        {/* 2. NOS PROGRAMMES */}
        <div className="bottom-box un">
          <h3>{t("home.programs.title")}</h3>

          <div className="sub-programs">
            <div className="sub-box">
              <h4>Cursus</h4>
              <button className="btn-orange">+</button>
            </div>

            <div className="sub-box">
              <h4>Activités</h4>
              <button className="btn-orange">+</button>
            </div>

            <div className="sub-box">
              <h4>Établissement</h4>
              <button className="btn-orange">+</button>
            </div>
          </div>
        </div>

        {/* 3. ACTIVITÉS CULTURELLES */}
        <div className="bottom-box white">
          <h3>Activités culturelles</h3>
         <div className="bottom-box un">
          <h3>{t("home.programs.title")}</h3>

          <div className="sub-programs">
            <div className="sub-box">
              <img src="" alt="" />
            </div>

            <div className="sub-box">
              <button className="btn-orange">+</button>
            </div>

            <div className="sub-box">
              <img src="" alt="" />
            </div>
          </div>
        </div>
        </div>

      </section>

    </main>
  );
}
