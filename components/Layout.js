import Head from 'next/head'

export default function Layout({ children, header, footer }) {
    return (
        <div>
            <Head>
                <title>WRC collision</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#ffffff" />
                <meta key="description" name="description" content="WRC collision" />
                <meta key="keywords" name="keywords" content="WRC collision, WRC, collision" />
                <meta key="og:title" property="og:title" content="WRC collision" />
                <meta key="og:description" property="og:description" content="WRC collision" />
                <meta key="og:type" property="og:type" content="website" />
                <meta property="og:site_name" content="WRC collision"/>
                <meta name="robots" content="index, follow" />
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
            </Head>
            <header>
                {header}
            </header>
            <main>
                {children}
            </main>
            <footer>
                {footer}
            </footer>
        </div>
    )
}