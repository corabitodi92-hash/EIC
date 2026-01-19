import React from "react";
import { useTranslation } from "react-i18next";
import "./Footer.css";
import logo from "../assets/logo.jpeg";
import congoFlag from "../assets/drapeau.png";

// Icônes sociaux SVG (Uniquement ceux visibles sur la maquette pour plus de clarté)
const socialIcons = {
   instagram: (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5Zm4.25 3.25a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.25-.88a1.12 1.12 0 1 1-2.25 0 1.12 1.12 0 0 1 2.25 0Z"/>
  </svg>
),

linkedin: (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05A4.2 4.2 0 0 1 17.6 8.8c4 0 4.7 2.6 4.7 6V21h-4v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21h-4V9Z"/>
  </svg>
),


  facebook: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  ),
  youtube: (
  <a
    href="https://youtube.com/@2024-1eic?si=E3RlXjCxSL1jWc6B"
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon
        points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
        fill="white"
      />
    </svg>
  </a>
),

  whatsapp: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  ),
};

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="site-footer">
      {/* Ligne décorative supérieure comme sur la maquette */}
      <div className="footer-top-border"></div>

      <div className="footer-container">
        <div className="footer-grid">
          
          {/* Colonne 1 : Contact & Logo */}
          <div className="footer-section">
            <h3 className="footer-title">{t("footer.contactTitle")}</h3>
            <div className="footer-content">
              <img 
                src={logo} 
                alt="Logo École Internationale" 
                className="footer-logo" 
              />
              <div className="footer-info">
                <p><strong>{t("footer.phone")} :</strong> 05 345 66 66</p>
                <p><strong>{t("footer.whatsapp")} :</strong> 06 615 66 66</p>
                <p><strong>{t("footer.email")} :</strong> ecoleinternationalec@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Colonne 2 : Réseaux Sociaux */}
          <div className="footer-section">
            <h3 className="footer-title">{t("footer.web")}</h3>
            <div className="footer-social-links">

              <a
                href="https://www.instagram.com/ecoleinternationalechinoise"
                target="_blank"
                 rel="noreferrer"
                 aria-label="Instagram"
                  >
                {socialIcons.instagram}
                </a>

                <a
                href="https://www.linkedin.com/company/ecole-internationale-chinoise"
                target="_blank"
                rel="noreferrer"
                 aria-label="LinkedIn"
                  >
                  {socialIcons.linkedin}
              </a>


              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                {socialIcons.facebook}
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
                {socialIcons.youtube}
              </a>
              <a href="https://wa.me/242066156666" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                {socialIcons.whatsapp}
              </a>
            </div>
          </div>

          {/* Colonne 3 : Partenaires / Institutions */}
          <div className="footer-section">
            <h3 className="footer-title">{t("footer.partners")}</h3>
            <div className="footer-partners">
              <div className="partner-item">
                <img 
                  src={congoFlag} 
                  alt="Drapeau Congo" 
                  className="footer-flag" 
                />
                <span className="partner-text">EIC - République du Congo</span>
              </div>
            </div>
          </div>

        </div>

        {/* Barre de copyright en bas */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} École Internationale Chinoise. {t("footer.legal")}
          </p>
        </div>
      </div>
    </footer>
  );
}