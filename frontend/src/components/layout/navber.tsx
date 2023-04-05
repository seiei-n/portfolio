import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
        <div className="container">
            <div className="left">
            <Link href="/">
                <a>Seiei</a>
            </Link>
            </div>
            <div className="right">
            <Link href="/Works">
                <a>Works</a>
            </Link>
            </div>
        </div>
        </nav>
    );
    }
    