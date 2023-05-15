// Copyright https://github.com/sor4chi/portfolio-blog/blob/main/client/public/theme.js

(function initTheme() {
    var theme = (() => {
        const before = localStorage.getItem("theme");
        if (before) {
            return before;
        }
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            localStorage.setItem("theme", "dark");
            return "dark";
        }
        localStorage.setItem("theme", "light");
        return "light";
    })();
    if (theme === "dark") {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
        document.documentElement.style.setProperty(
            "--theme_button_translateX",
            "translateX(0)"
        );
        document.documentElement.style.setProperty(
            "--theme_button_content",
            theme === "light" ? "'light'" : "'dark'"
        );
    }
    if (theme === "light") {
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
        document.documentElement.style.setProperty(
            "--theme_button_translateX",
            "translateX(100%)"
        );
        document.documentElement.style.setProperty(
            "--theme_button_content",
            theme === "light" ? "'light'" : "'dark'"
        );
    }
})();
