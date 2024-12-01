import styles from "../styles/modules/Header.module.css";
import Icon from "./common/IconComponent";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();
  return (
    <header className={styles.header}>
      <div className={styles["header-left"]}>
        <Icon name="menu" className={styles.menuIcon} />
        <h1>{t("todoList.title")}</h1>
      </div>
      <Icon name="setting" className={styles.settingIcon} />

      <div className={styles["header-right"]}>
        <button 
          onClick={() => i18n.changeLanguage(i18n.language === 'zh-TW' ? 'en' : 'zh-TW')}
          className={styles.langButton}
        >
          {i18n.language === 'zh-TW' ? 'EN' : '中文'}
        </button>
        <Icon name="setting" className={styles.settingIcon} />
      </div>
    </header>
  );
}
