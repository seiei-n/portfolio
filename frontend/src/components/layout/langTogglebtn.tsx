import styles from "./langTogglebtn.module.css";
import { useLanguage } from "@/hooks/toggleLang";
import { useEffect } from "react";
import { useState } from "react";

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
    }, [language]);

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
