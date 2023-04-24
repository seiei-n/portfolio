import Link from "next/link";
import styles from "./navbar.module.css";
import React, { useState } from "react";
import { LanguageToggle } from "./langTogglebtn";


export function Navbar() {
   

    return (
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
        </header>
    );
}



