import styles from "./langTogglebtn.module.css";
import { useLanguage } from "@/hooks/toggleLang";

export const LanguageToggle = () => {
    
    const [language, setLanguage] = useLanguage("en");

    
    const btnClassName = language === "en" ? styles.en : styles.jp;

    return (
        <div className={styles.langbtn}>
            <button className={btnClassName} onClick={() => setLanguage(language === "en" ? "ja" : "en")}>
                <div className={styles.langtext}>{language}</div>
            </button>
        </div>
    );
};
