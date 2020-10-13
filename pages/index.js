import Layout from "../components/Layout";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import c from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout header={<Header />} footer={<Footer />}>
        <div className={c.main}>
            <img src="https://cdn.shopify.com/s/files/1/1693/9651/files/dsc00885_4472x.JPG" alt=""/>
        </div>
    </Layout>
  )
}
