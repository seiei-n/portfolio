import { useTheme } from "@/hooks/toggleTheme";
import styles from "./themeTogglebtn.module.css";
import { useEffect } from "react";

export const ThemeToggle = () => {
    const [theme, setTheme] = useTheme("light");
    useEffect(() => {
        document.documentElement.className = theme;
        document.documentElement.style.setProperty(
            "--theme_button_background",
              theme === "light" ? "#ffffff" : "#cfd0d1"
        );
        document.documentElement.style.setProperty(
            "--theme_button_translateX",
              theme === "light" ? "translateX(100%)" : "translateX(0)"
        );
        document.documentElement.style.setProperty(
            "--theme_button_text_align",
              theme === "light" ? "left" : "right"
        );
        document.documentElement.style.setProperty(
            "--theme_button_left",
              theme === "light" ? "5px" : "30px"
        );
        document.documentElement.style.setProperty(
            "--theme_button_content",
              theme === "light" ? "'light'" : "'dark'"
        );
    }, [theme]);



    return (
        <div className={styles.btn}>
            <div className={styles.themebtn}>
                <button
                    className={styles.dark}
                    onClick={() =>
                        setTheme(theme === "light" ? "dark" : "light")
                    }
                >
                    <div className={styles.themetext}></div>
                </button>
            </div>
        </div>
    );
};
