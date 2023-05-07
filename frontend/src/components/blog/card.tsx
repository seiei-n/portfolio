import styles from "./card.module.css";
import Link from "next/link";
import { tagstringToArray } from "@/lib/filter";
import { useRouter } from "next/router";

export type BlogCardParams = {
    title: string;
    date: string;
    slug: string;
    author: string;
    type: string;
    lang: string;
    tags: string;
};

type Props = BlogCardParams;

export default function Card({ title, date, slug, type, tags }: Props) {
    const tagArray = tagstringToArray(tags);
    const router = useRouter();
    return (
        <div className={styles.card__wrapper}>
            <div className={styles.card}>
                <div className={styles.card__title}>
                    <Link href={`/${type}/${slug}`}>
                        <h2 className={styles.card__title}>{title}</h2>
                        <p className={styles.card__created_at}>{date}</p>
                    </Link>
                </div>
                <div className={styles.card__tags}>
                    {tagArray.map((tag) => (
                        <Link
                            key={tag}
                            href={{ pathname: `/${type}`, query: { tag } }}
                        >
                            {router.query.tag === tag ? (
                                <p className={styles.card__tag__active}>
                                    {tag}
                                </p>
                            ) : (
                                <p className={styles.card__tag}>{tag}</p>
                            )}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
