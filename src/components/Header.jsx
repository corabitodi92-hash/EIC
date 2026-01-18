import logo from "../assets/logo.jpeg";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import "./Header.css";

export default function Header() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Effet pour le scroll du header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu UNIQUEMENT quand on change de page
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Bloquer le scroll du body UNIQUEMENT quand le menu est ouvert
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [open]);

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        
        <div className="logo-section">
          <Link to="/" onClick={handleLogoClick} className="logo-link">
            <img src={logo} alt="Logo" className="logo-img" />
          </Link>
        </div>

        {/* La classe mobile-open doit être ici */}
        <nav className={`nav-menu ${open ? "mobile-open" : ""}`}>
          <div className="nav-links">
            <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
              {t("menu.home")}
            </Link>
            <Link to="/apropos" className={`nav-item ${location.pathname === '/apropos' ? 'active' : ''}`}>
              {t("menu.about")}
            </Link>
            <Link to="/Programs" className={`nav-item ${location.pathname === '/Programs' ? 'active' : ''}`}>
              {t("menu.programs")}
            </Link>
            <Link to="/contact" className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
              {t("menu.contact")}
            </Link>
          </div>
          <div className="header-actions">
            <LanguageSwitcher />
          </div>
        </nav>

        <button
          className={`hamburger ${open ? 'is-active' : ''}`}
          onClick={() => setOpen(!open)} // Bascule l'état open
          aria-label="Menu"
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
      </div>
    </header>
  );
}