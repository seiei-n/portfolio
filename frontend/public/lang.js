(function initLang() {
    var lang = (() => {
        const before =sessionStorage.getItem("lang");
        if (before) {

            return before;
        }else{
        if (navigator.language === "en-US" || navigator.language === "en") {
        sessionStorage.setItem("lang", "en");
            return "en";
        }
        if (navigator.language === "ja-JP" || navigator.language === "ja") {
        sessionStorage.setItem("lang", "ja");
            return "ja";
        }
        return "ja";
    }
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
        document.documentElement.style.setProperty(
            "--lang_button_background",
            lang === "en" ? "#ffffff" : "#cfd0d1"
        );
        document.documentElement.style.setProperty(
            "--lang_button_translateX",
            lang === "en" ? "translateX(100%)" : "translateX(0)"
        );
        document.documentElement.style.setProperty(
            "--lang_button_text_align",
            lang === "en" ? "left" : "right"
        );
        document.documentElement.style.setProperty(
            "--lang_button_margin",
            lang === "en" ? "5px" : "30px"
        );
        document.documentElement.style.setProperty(
            "--lang_button_content",
            lang === "en" ? "'EN'" : "'JP'"
        );
    }
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
        document.documentElement.style.setProperty(
            "--lang_button_background",
            lang === "en" ? "#ffffff" : "#cfd0d1"
        );
        document.documentElement.style.setProperty(
            "--lang_button_translateX",
            lang === "en" ? "translateX(100%)" : "translateX(0%)"
        );
        document.documentElement.style.setProperty(
            "--lang_button_text_align",
            lang === "en" ? "left" : "right"
        );
        document.documentElement.style.setProperty(
            "--lang_button_margin",
            lang === "en" ? "5px" : "30px"
        );
        document.documentElement.style.setProperty(
            "--lang_button_content",
            lang === "en" ? "'EN'" : "'JP'"
        );
    }
})();
