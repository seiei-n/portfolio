import "@/styles/globals.css";
import { Navbar } from "@/components/layout/navber";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div>
            <Navbar />
            <Component {...pageProps} />
        </div>
    );
}
