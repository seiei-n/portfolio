import styles from './footer.module.css';  

export function Footer() {
    return (
        <footer className={styles.footer}>
        <div className={styles.container}>
            <div className={styles.left}>
            <p>© 2023 Seiei</p>
            </div>
            <div className={styles.right}>
            <p>Powered by Next.js</p>
            </div>
        </div>
        </footer>
    );
    }

