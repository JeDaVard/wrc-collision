import Layout from "../components/Layout";
import c from '../styles/service.module.css'

export default function Service() {
    return (
        <Layout>
            <div className={c.service}>
                <div className="row">
                    {/*<h1>Service page</h1>*/}
                    <div className={c.highLights}>
                        <h2>Free Estimates</h2>
                        <h2>24&7 Pickup & Drop Off</h2>
                        <h2>Promotional Financing</h2>
                        <h2>Free Rental Cars</h2>
                        <h2>Free Towing</h2>
                        <h2>After Hours Roadside Assistance</h2>
                        <h2>All Major Insurance Companies</h2>
                        <h2>Lifetime Warranty</h2>
                    </div>
                    <div className={c.content}>
                        <div>
                            <div className={c.title}>
                                <h1>AUTO BODY & PAINT</h1>
                            </div>
                            <div className={c.services}>
                                <h2>I-Car Gold Class certified technicians with years of experience</h2>
                                <h2>BASF paint mixing station with guarantee color match</h2>
                                <h2>EZ Liner Frame Machine</h2>
                                <h2>50ft Paint Booth for all types of vehicles including trucks & limo</h2>
                                <h2>Custom Body Work</h2>
                                <h2>Paintless Dent Repair</h2>
                                <h2>Aluminum Repair</h2>
                                <h2>Glass Replacement</h2>
                                <h2>Classic Restoration</h2>
                                <h2>Diagnostics & Calibration</h2>
                            </div>
                        </div>
                        <div>
                            <div className={c.title}>
                                <h1>CUSTOMIZATION</h1>
                            </div>
                            <div className={c.services}>
                                <h2><b>Wraps</b> - Full Color Changes</h2>
                                <h2>Custom Decal’s</h2>
                                <h2>Clear Bra’s</h2>
                                <h2>Blackout Package’s</h2>
                                <h2><b>Wheels</b> - Any style brand wheels & tires</h2>
                                <h2>Powder Coating</h2>
                                <h2><b>Interior</b> - In House Custom upholstery & Refabrication</h2>
                                <h2><b>Body Kits</b> - installer of all companies</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}