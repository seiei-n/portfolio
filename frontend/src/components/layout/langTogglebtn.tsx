import styles from "./langTogglebtn.module.css";
import { useLanguage } from "@/hooks/toggleLang";
import { useEffect } from "react";

export const LanguageToggle = () => {
    const [language, setLanguage] = useLanguage("en");

    useEffect(() => {
        document.documentElement.lang = language;
        document.documentElement.style.setProperty(
            "--lang_en",
            language === "en" ? "block" : "none"
        );
        document.documentElement.style.setProperty(
            "--lang_jp",
            language === "ja" ? "block" : "none"
        );
        document.documentElement.style.setProperty(
            "--lang_button_background",
            language === "en" ? "#ffffff" : "#cfd0d1"
        );
        document.documentElement.style.setProperty(
            "--lang_button_translateX",
            language === "en" ? "translateX(100%)" : "translateX(0)"
        );
        document.documentElement.style.setProperty(
            "--lang_button_text_align",
            language === "en" ? "left" : "right"
        );
        document.documentElement.style.setProperty(
            "--lang_button_margin",
            language === "en" ? "5px" : "30px"
        );
        document.documentElement.style.setProperty(
            "--lang_button_content",
            language === "en" ? "'EN'" : "'JP'"
        );
    }, [language]);

    return (
        <>
            <div className={styles.langbtn}>
                <button
                    className={language === "en" ? styles.en : styles.jp}
                    onClick={() => setLanguage(language === "en" ? "ja" : "en")}
                >
                    <div className={styles.langtext}>
                    </div>
                </button>
            </div>
        </>
    );
};
