import styles from "./pagination.module.css";
import { useState } from "react";

type Props = {
    postsPerPage: number;
    totalPosts: number;
    paginate: (pageNumber: number) => void;

};

export default function Pagination({
    postsPerPage,
    totalPosts,
    paginate,
}: Props) {
    const [activePage, setActivePage] = useState(1);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className={styles.pagination} >
                {pageNumbers.map((number) => (
                    <li key={number} className={styles.pageItem}>
                        <div
                            onClick={() => {
                                paginate(number);
                                setActivePage(number);
                            }}
                            className={styles.pageLink}
                            style={
                                number === activePage
                                    ? { backgroundColor: "#ddd" }
                                    : {}
                            }
                        >
                            {number}
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
