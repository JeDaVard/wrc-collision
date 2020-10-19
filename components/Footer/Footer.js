import c from './Footer.module.css'

export default function Footer() {
    return (
        <div className={c.footer}>
            <div className="row">
                <div className={c.top}>
                    <div className={c.left}>
                        <h4>SOCIAL</h4>
                        <div>
                            <a href="https://www.facebook.com/wrccollsion" target="_blank"><img src="/fb.svg" alt="" width={32} height={32}/></a>
                            <a href="https://instagram.com/wrc_la" target="_blank"><img src="/ig.svg" alt="" width={32} height={32}/></a>
                        </div>
                        <div className={c.contact}>
                            <h3>
                                Phone: +1 818-765-8500
                            </h3>
                            <h3>
                                6926 Lankershim Blvd Los Angeles, CA 91605
                            </h3>
                        </div>
                    </div>
                    <div className={c.about}>
                        <h2><b>WRC collision</b></h2>
                        <h2>Here at WRC LA we strive to insure quality and craftsmanship to our valued line of clientele, Quality assurance protocol ensures that we exceed all industry safety guidelines, Our mission is to perform highly specialized repairs, and our workmanship is backed by our word. The safety of our customers and their vehicles is our highest priority. It's our way of showing our commitment to the highest standards of repair work.</h2>
                    </div>
                </div>
            </div>
            <div className={c.separator}/>
            <div className="row">
                <div className={c.bottom}>
                    <div><p>&copy; 2020, WRC collision</p></div>
                    <div>PARTNERS</div>
                </div>
            </div>
        </div>
    )
}