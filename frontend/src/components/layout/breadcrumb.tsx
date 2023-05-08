import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./breadcrumb.module.css";

type BreadcrumbItem = {
    label: string;
    href: string;
    
};

export function Breadcrumb() {
    const router = useRouter();
    const pathSegments = router.asPath.split("/").filter((s) => s);

    if (pathSegments[pathSegments.length - 1].includes("?")) {
        pathSegments[pathSegments.length - 1] = pathSegments[
            pathSegments.length - 1
        ].split("?")[0];
    }


    const items: BreadcrumbItem[] = pathSegments.map((segment, index) => {
        const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
        return { label: segment, href };
    });

    return (
        <nav className={styles.breadcrumb}>
            <ol className={styles.breadcrumb__list}>
                <li className={styles.breadcrumb__item}>
                    <Link href="/" className={styles.breadcrumb__item_link}>
                        Home
                    </Link>
                </li>
                {items.map((item, index) => (
                    <li key={index} className={styles.breadcrumb__item}>
                        {index === items.length - 1 ? (
                            <span className={styles.breadcrumb__item_current}>
                                {item.label}
                            </span>
                        ) : (
                            <Link
                                href={item.href}
                                className={styles.breadcrumb__item_link}
                            >
                                {item.label}
                            </Link>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}


