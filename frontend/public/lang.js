(function initLang() {
    var lang = (() => {
        const before = localStorage.getItem("lang");
        if (before) {
            return before;
        }
        return "ja";
    })();
    if (lang === "en") {
        document.documentElement.lang = "en";
        document.documentElement.style.setProperty(
            "--lang_en",
            lang === "en" ? "block" : "none"
        );
        document.documentElement.style.setProperty(
            "--lang_jp",
            lang === "ja" ? "block" : "none"
        );
    };
    if (lang === "ja") {
        document.documentElement.lang = "ja";
        document.documentElement.style.setProperty(
            "--lang_jp",
            lang === "ja" ? "block" : "none"
        );
        document.documentElement.style.setProperty(
            "--lang_en",
            lang === "en" ? "block" : "none"
        );
    };
})();
