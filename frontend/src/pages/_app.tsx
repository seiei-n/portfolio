import "@/styles/globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import type { AppProps } from "next/app";
import "../styles/prism.css";
import { Breadcrumb } from "@/components/layout/breadcrumb";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
    
            <div className="container">
            <Navbar />
            <Component {...pageProps} />
            <Footer />
            </div>
        </>
    );
}
