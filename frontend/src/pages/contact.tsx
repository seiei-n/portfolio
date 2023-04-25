
import styles from "./contact.module.css";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { useLanguage } from "@/hooks/toggleLang";

export default function Contact() {
    const [language, setLanguage] = useLanguage("EN");

    return (
        <div>
            <div className={styles.header}>
                <Breadcrumb />
                <h1>Contact</h1>
                <div className={styles.language}>{language}</div>
            </div>
            <div
                className={styles.main_en}
                style={{ display: language === "EN" ? "block" : "none" }}
            >
                <div className={styles.content}>
                    <div className={styles.EN}>
                        <h2>Get in touch</h2>
                        <p>
                            If you have any questions or would like to get in
                            touch with me, please feel free to contact me.
                        </p>
                        <p>
                            <a href="mailto:solehamugoyio@gmail.com">Here</a>
                        </p>
                    </div>
                </div>
            </div>

            <div
                className={styles.main_jp}
                style={{ display: language === "JA" ? "block" : "none" }}
            >
                <div className={styles.content}>
                    <div className={styles.JP}></div>
                    <h2>お問い合わせ</h2>
                    <p>
                        ご質問やお問い合わせがございましたら、お気軽にお問い合わせください。
                    </p>
                    <p>
                        <a href="mailto:solehamugoiyo@gmail.com">こちら</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
