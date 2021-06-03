import Layout from "../components/Layout";
import c from '../styles/Home.module.css'
import { Slider } from "../components/Slider";

const sliderImages = [
    '/img/slider/14.jpg',
    '/img/slider/13.jpg',
    '/img/slider/12.jpg',
    '/img/slider/11.jpg',
    '/img/slider/10.jpg',
    '/img/slider/7.jpg',
    '/img/slider/9.jpg',
    '/img/slider/8.jpg',
    '/img/slider/6.jpg',
    '/img/slider/5.jpg',
    '/img/slider/4.jpg',
    '/img/slider/3.jpg',
    '/img/slider/2.jpg',
    '/img/slider/1.jpg',
]

export default function Home() {
  return (
    <Layout>
        <div className={c.videoSection}>
            <div className={c.video}>
                <video src="/vid/1.mp4" muted playsInline autoPlay loop/>
            </div>
            <div className={c.video}>
                <video src="/vid/4.mp4" muted playsInline autoPlay loop/>
            </div>
            <div className={c.video}>
                <video src="/vid/3.mp4" muted playsInline autoPlay loop/>
            </div>
            <div className={c.video}>
                <video src="/vid/2.mp4" muted playsInline autoPlay loop/>
            </div>
        </div>
        <div className={c.section}>
            <img src="/logo_gold.png" alt=""/>
        </div>
        <div className={c.main}>
            <Slider data={sliderImages} auto/>
        </div>
    </Layout>
  )
}
