import styles from "./card.module.css";
import Link from "next/link";
import { tagstringToArray } from "@/lib/filter";
import { useRouter } from "next/router";
import Image from "next/image";

export type BlogCardParams = {
    title: string;
    date: string;
    slug: string;
    author: string;
    type: string;
    lang: string;
    tags: string;
    thumbnail: string;
};

type Props = BlogCardParams;

export default function Card({
    title,
    date,
    slug,
    type,
    tags,
    thumbnail,
}: Props) {
    const tagArray = tagstringToArray(tags);
    const router = useRouter();
    console.log(thumbnail);
    const thumbnailUrl = thumbnail;
    return (
        <div className={styles.card__wrapper}>
            <div className={styles.card}>
                <Link href={`/${type}/${slug}`}>
                    <div className={styles.card__upper}>
                        {thumbnail ? (
                            <div className={styles.card__thumbnail}>
                                <Image
                                    src={thumbnailUrl}
                                    alt={title}
                                    width={465}
                                    height={480}
                                />
                            </div>
                        ) : (
                            <div></div>
                        )}
                        <div className={styles.card__created_at}>
                            <p>{date}</p>
                        </div>
                        <div className={styles.card__title}>
                            <h2 className={styles.card__title}>{title}</h2>
                        </div>
                    </div>
                </Link>

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
                            ) : tag ? (
                                <p className={styles.card__tag}>{tag}</p>
                            ) : (
                                <p></p>
                            )}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
