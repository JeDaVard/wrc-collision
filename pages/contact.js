import Layout from "../components/Layout";
import c from '../styles/contact.module.css'
import Head from "next/head";

export default function Contact() {
    return (
        <Layout>
            <Head>
                <title>Contacts</title>
                <meta key="description" name="description" content="Contacts - Here at WRC LA, we strive to insure quality and craftsmanship to our valued line of clientele" />
                <meta key="og:title" property="og:title" content="Contacts" />
                <meta key="og:description" property="og:description" content="Contacts - Here at WRC LA, we strive to insure quality and craftsmanship to our valued line of clientele" />
            </Head>
            <div className="row">
                <div className={c.contact}>
                    <h2>
                        Phone: <a href = "tel: +1 818-765-8500">+1 818-765-8500</a>
                    </h2>
                    <h2>
                        E-mail: <a href = "mailto: team@wrccollision.com">team@wrccollision.com</a>
                    </h2>
                    <h2>
                        <a href="https://goo.gl/maps/dTnSKYK23BL4c3KN9" target="_blank" rel="noreferrer noopener">6926 Lankershim Blvd Los Angeles, CA 91605</a>
                    </h2>
                </div>
            </div>
        </Layout>
    )
}