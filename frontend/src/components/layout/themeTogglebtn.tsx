import { useTheme } from "@/hooks/toggleTheme";
import styles from "./themeTogglebtn.module.css";
import { useEffect } from "react";

export const ThemeToggle = () => {
    const [theme, setTheme] = useTheme("light");
    useEffect(() => {
        document.documentElement.className = theme;
    }, [theme]);

    const btnClassName = theme === "light" ? styles.light : styles.dark;

    return (
        <div className={styles.btn}>
            <div className={styles.themebtn}>
                <button
                    className={btnClassName}
                    onClick={() =>
                        setTheme(theme === "light" ? "dark" : "light")
                    }
                >
                    <div className={styles.themetext}>{theme}</div>
                </button>
            </div>
        </div>
    );
};
