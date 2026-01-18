import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {
  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mawnktn",
        "template_4qj4g8g",
        e.target,
        "E9ryl_eogSk7_h8Vw"
      )
      .then(() => {
        alert(t("contact.success") || "Message envoyé !");
        e.target.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert(t("contact.error") || "Erreur lors de l'envoi.");
      });
  };

  return (
    <div className="contact-page-wrapper">
      {/* Header de page avec titre */}
      <div className="contact-header">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {t("menu.contact")}
        </motion.h1>
        <div className="title-underline-center"></div>
      </div>

      <div className="contact-container">
        {/* COLONNE GAUCHE : INFOS (Basé sur About / Maquette) */}
        <motion.aside 
          className="contact-info-sidebar"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="info-box">
            <h3>{t("about.contactTitle")}</h3>
            <p className="contact-desc-text">{t("contact.description")}</p>
            
            <div className="contact-details-list">
              <div className="contact-detail-item">
                <span className="icon-circle">📍</span>
                <div>
                  <strong>{t("about.contact.addressLabel")}</strong>
                  <p>{t("about.contact.address")}</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <span className="icon-circle">📞</span>
                <div>
                  <strong>{t("about.contact.phoneLabel")}</strong>
                  <p>{t("about.contact.phone")}</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <span className="icon-circle">✉️</span>
                <div>
                  <strong>{t("about.contact.emailLabel")}</strong>
                  <p>{t("about.contact.email")}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.aside>

        {/* COLONNE DROITE : FORMULAIRE */}
        <motion.main 
          className="contact-form-main"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <form className="main-contact-form" onSubmit={sendEmail}>
            <div className="form-group">
              <label>{t("contact.name")}</label>
              <input type="text" name="name" required placeholder="Ex: Jean Dupont" />
            </div>

            <div className="form-group">
              <label>{t("contact.email")}</label>
              <input type="email" name="email" required placeholder="exemple@mail.com" />
            </div>

            <div className="form-group">
              <label>{t("contact.message")}</label>
              <textarea name="message" required rows="6"></textarea>
            </div>

            <motion.button
              type="submit"
              className="btn-submit-contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {t("contact.send")}
            </motion.button>
          </form>
        </motion.main>
      </div>
    </div>
  );
}