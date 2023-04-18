import "@/styles/globals.css";
import { Navbar } from "@/components/layout/navber";
import { Footer } from "@/components/layout/footer";
import type { AppProps } from "next/app";
import "../styles/prism.css";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </div>
    );
}
