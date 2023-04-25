import Link from "next/link";
import styles from "./navbar.module.css";
import React, { useState } from "react";
import { LanguageToggle } from "./langTogglebtn";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <header className={styles.navbar}>
                <div className={styles.link}>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/works">Works</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/contact">Contact</Link>
                </div>

                <div className={styles.langbtn}>
                    <LanguageToggle />
                </div>
                <div className={styles.hambuger_menu}>
                    <div
                        className={styles.hambuger_menu_icon}
                        onClick={toggleMenu}
                    >
                        <span className={styles.hambuger_menu_icon_line}></span>
                        <span className={styles.hambuger_menu_icon_line}></span>
                        <span className={styles.hambuger_menu_icon_line}></span>
                    </div>
                    <div className={styles.hambuger_menu_content}>
                        <div className={styles.hambuger_menu_content_inner}>
                            <div className={styles.hambuger_menu_content_item}>
                                <Link href="/">Home</Link>
                            </div>
                            <div className={styles.hambuger_menu_content_item}>
                                <Link href="/about">About</Link>
                            </div>
                            <div className={styles.hambuger_menu_content_item}>
                                <Link href="/works">Works</Link>
                            </div>
                            <div className={styles.hambuger_menu_content_item}>
                                <Link href="/blog">Blog</Link>
                            </div>
                            <div className={styles.hambuger_menu_content_item}>
                                <Link href="/contact">Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            
        </>
    );
}
