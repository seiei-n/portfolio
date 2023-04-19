import Link from "next/link";
import { useState } from "react";
import styles from "./ShowMoreButton.module.css";

const ShowMoreButton = () => {
    const [showMore, setShowMore] = useState(false);

    const handleClick = () => {
        setShowMore(!showMore);
    };

    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={handleClick}>
                {showMore ? "Show less" : "Show more"}
            </button>
            {showMore && (
                <div className={styles.showmore}>
                    <Link href="/blog">
                        <h2>Show More</h2>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default ShowMoreButton;
