import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                <meta charSet="utf-8" />
                {/* eslint-disable-next-line @next/next/no-sync-scripts */}
                <script src="/theme.js" />
                {/* eslint-disable-next-line @next/next/no-sync-scripts */}
                <script src="/lang.js" />
                {/* eslint-disable-next-line @next/next/no-css-tags */}
                <link rel="stylesheet" href="/theme.css" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
