import { useState } from "react";
import styles from "./langTogglebtn.module.css";


export const LanguageToggle = () => {
    const [language, setLanguage] = useState("EN");
    const btnClassName = language === "EN" ? styles.en : styles.ja;


    const toggleLanguage = () => {
        const newLanguage = language === "EN" ? "JP" : "EN";
        setLanguage(newLanguage);
        console.log(language);
    };

    return (
        <div className={styles.langbtn}>
            <button onClick={toggleLanguage} className={btnClassName}>
                <div className={styles.langtext}>{language}</div>
            </button>
        </div>
    );
};

