import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className="language-container">
      <select 
        className="language-select" 
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        aria-label="Changer de langue"
      >
        <option value="fr">FR</option>
        <option value="en">EN</option>
        <option value="zh">ZH</option>
        <option value="ru">RU</option>
      </select>
      <div className="select-arrow"></div>
    </div>
  );
}