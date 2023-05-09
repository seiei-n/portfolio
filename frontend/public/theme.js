// Copyright https://github.com/sor4chi/portfolio-blog/blob/main/client/public/theme.js

(function initTheme() {
    var theme = (() => {
        const before = localStorage.getItem("theme");
        if (before) {
            return before;
        }
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            return "dark";
        }
        return "light";
    })();
    if (theme === "dark") {
        document.documentElement.className = "dark";
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
    }
    if (theme === "light") {
        document.documentElement.className = "light";
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
    }
})();
