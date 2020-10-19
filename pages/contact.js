import Layout from "../components/Layout";
import c from '../styles/contact.module.css'

export default function Contact() {
    return (
        <Layout>
            <div className="row">
                <div className={c.contact}>
                    <h2>
                        <b>WRC collision</b>
                    </h2>
                    <h2>
                        Phone: +1 818-765-8500
                    </h2>
                    <h2>
                        6926 Lankershim Blvd Los Angeles, CA 91605
                    </h2>
                </div>
            </div>
        </Layout>
    )
}