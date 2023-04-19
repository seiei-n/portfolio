import styles from "./card.module.css"
import Link from "next/link";
/**
Path: src/components/blog/card.module.css
.card {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease-in-out;
}

.card:hover {
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
}

.card__title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.card__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
}

.card__tag {
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    background-color: #f1f1f1;
    color: #333;
    font-size: 0.75rem;
    font-weight: 600;
}

.card__description {
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
}

.card__created_at {
    font-size: 0.75rem;
    font-weight: 400;
    color: #999;
}
 */
export type BlogCardParams = {
    title: string;
    date: string;
    slug: string;
    author: string;
};


type Props = BlogCardParams;

export default function Card({ title, date, slug, author }: Props) {
    return (
        
        <Link href={`/blog/${slug}`} className={styles.card__wrapper}>
        <div className={styles.card}>
            <h2 className={styles.card__title}>{title}</h2>
            <p className={styles.card__created_at}>{date}</p>
            <p className={styles.card__slug}>{author}</p>
        </div>
        </Link>

          );
}
