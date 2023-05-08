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


    }
    if (theme === "light") {
        document.documentElement.className = "light";
    }
})();
