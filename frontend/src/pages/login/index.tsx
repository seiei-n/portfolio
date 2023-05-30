import styles from "./login.module.css";

export default function Login() {
    return (
        <div className={styles.main}>
            <div className={styles.login}>
                <h1>Login</h1>
                <div className={styles.loginform}>
                    <form action="/api/login" method="POST">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" />
                        <br />
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" />
                        <br />
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
