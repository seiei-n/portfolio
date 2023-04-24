import styles from "./contact.module.css";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { useRouter } from "next/router";

export default function Contact() {
    return (
        <div className={styles.main}>
            <div className={styles.breadcrumb}>
                <Breadcrumb />
                <h1>Contact</h1>
            </div>

            <div className={styles.content}>
                <div className={styles.left}>
                    <h2>Get in touch</h2>
                    <p>
                        If you have any questions or would like to get in touch
                        with me, please feel free to contact me.
                    </p>
                    <p>
                        <a href="mailto:solehamugoyio@gmail.com">Here</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

