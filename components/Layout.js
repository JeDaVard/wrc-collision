import Head from 'next/head'
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {useEffect, useState} from "react";
import SmallHeader from "./SmallHeader/SmallHeader";

export default function Layout({ children, header, footer }) {
    const [smallHeader, setSmallHeader] = useState(false)

    const scrollHandler = e => {
        if (window.scrollY > 116 && !smallHeader) {
            setSmallHeader(true)
        } else if (window.scrollY < 116 && smallHeader) {
            setSmallHeader(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',scrollHandler)
    })
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
                <Header />
                {smallHeader && <SmallHeader />}
            </header>
            <main style={{minHeight: 'calc(100vh - 41rem)'}}>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}