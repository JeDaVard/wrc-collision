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
                            <a href="/">
                                <div className={c.logoImg}/>
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
                                <NavLink href={'/service'} activeClassName={c.activeClassName}>
                                    <a className={c.navLink} href="/service">Service</a>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink href={'/about'} activeClassName={c.activeClassName}>
                                    <a className={c.navLink} href="/about">About</a>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            {/*</div>*/}
        </div>
    )
}