import c from './Header.module.css'
import NavLink from "../NavLink/NavLink";
import Link from "next/link";

export default function Header() {
    return (
        <div className={c.header}>
            {/*<div className="row">*/}
                <div className={c.content}>
                    <div className={c.logo}>
                        <Link href="/">
                            <a>
                                <div className={c.logoImg}/>
                                {/*<img src="/wrc_logo_v.svg" alt="logo"/>*/}
                            </a>
                        </Link>
                    </div>
                    <nav className={c.menu}>
                        <ul>
                            <li>
                                <NavLink href={'/'} activeClassName={c.activeClassName}>
                                    <a className={c.navLink} href="/">Home</a>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href={'/services'} activeClassName={c.activeClassName}>
                                    <a className={c.navLink} href="/services">Service</a>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href={'/about'} activeClassName={c.activeClassName}>
                                    <a className={c.navLink} href="/about">About</a>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href={'/contact'} activeClassName={c.activeClassName}>
                                    <a className={c.navLink} href="/contact">Contact</a>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            {/*</div>*/}
        </div>
    )
}
