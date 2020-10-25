import Layout from "../components/Layout";
import c from '../styles/Home.module.css'
import { Slider } from "../components/Slider";

const sliderImages = [
    '/img/slider/1.jpg',
    '/img/slider/2.jpg',
    '/img/slider/3.jpg',
    '/img/slider/4.jpg',
    '/img/slider/5.jpg',
    '/img/slider/6.jpg',
    '/img/slider/7.jpg',
    '/img/slider/8.jpg',
    '/img/slider/9.jpg',
    '/img/slider/10.jpg',
]

export default function Home() {
  return (
    <Layout>
        <div className={c.main}>
            <Slider data={sliderImages} auto/>
        </div>
    </Layout>
  )
}
