import c from './Footer.module.css'

export default function Footer() {
    return (
        <div className={c.footer}>
            <div className={c.top}>
                <h4>SOCIAL</h4>
            </div>
            <div className="row">
                <div className={c.bottom}>
                    <div><p>&copy; 2020, WRC collision</p></div>
                    <div>PARTNERS</div>
                </div>
            </div>
        </div>
    )
}