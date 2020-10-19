import Layout from "../components/Layout";
import c from '../styles/about.module.css'

export default function About() {
    return (
        <Layout>
            <div className="row">
                <div className={c.about}>
                    <h2><b>WRC collision</b></h2>
                    <h2>Here at WRC LA we strive to insure quality and craftsmanship to our valued line of clientele, Quality assurance protocol ensures that we exceed all industry safety guidelines, Our mission is to perform highly specialized repairs, and our workmanship is backed by our word. The safety of our customers and their vehicles is our highest priority. It's our way of showing our commitment to the highest standards of repair work.</h2>
                </div>
            </div>
        </Layout>
    )
}