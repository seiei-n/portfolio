import styles from "./langTogglebtn.module.css";
import { useLanguage } from "@/hooks/toggleLang";

export const LanguageToggle = () => {
    const [language, setLanguage] = useLanguage("en");
    if (typeof window === "object") {
        document.documentElement.lang = language;
        document.title = language === "en" ? "Contact" : "お問い合わせ";
        document.documentElement.style.setProperty(
            "--lang_en",
            language === "en" ? "block" : "none"
        );
        document.documentElement.style.setProperty(
            "--lang_jp",
            language === "ja" ? "block" : "none"
        );
    }

    const btnClassName = language === "en" ? styles.en : styles.jp;

    return (
        <div className={styles.langbtn}>
            <button
                className={btnClassName}
                onClick={() => setLanguage(language === "en" ? "ja" : "en")}
            >
                <div className={styles.langtext}>{language}</div>
            </button>
        </div>
    );
};
