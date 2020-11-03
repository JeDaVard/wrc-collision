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
                <meta name="robots" content="index, follow" />
                <meta property="og:site_name" content="WRC collision"/>
                <meta key="og:type" property="og:type" content="website" />
                <meta key="keywords" name="keywords" content="WRC collision, WRC, collision, Free Estimates, Pickup, Drop Off, Promotional Financing, Free Rental Cars, Free Towing, Roadside Assistance, Lifetime Warranty, AUTO BODY PAINT, certified technicians, Aluminum Repair, Glass Replacement, Diagnostics, Calibration, Clear Bra’s, Custom Decal’s, Blackout Package’s, Powder Coating, EZ Liner Frame Machine" />
                <meta key="description" name="description" content="Here at WRC LA, we strive to insure quality and craftsmanship to our valued line of clientele" />
                <meta key="og:title" property="og:title" content="WRC collision" />
                <meta key="og:description" property="og:description" content="Here at WRC LA we strive to insure quality and craftsmanship to our valued line of clientele." />
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