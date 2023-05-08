import styles from "./contact.module.css";
import { Breadcrumb } from "@/components/layout/breadcrumb";

export default function Contact() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Breadcrumb />
                <h1>Contact</h1>
            </div>
            <div className={styles.main} style={{ display: "var(--lang_en)" }}>
                <div className={styles.content}>
                    <div className={styles.en}>
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

            <div className={styles.main} style={{ display: "var(--lang_jp)" }}>
                <div className={styles.content}>
                    <div className={styles.jp}></div>
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
