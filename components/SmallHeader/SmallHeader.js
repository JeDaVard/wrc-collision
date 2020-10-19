import c from './SmallHeader.module.css'
import NavLink from "../NavLink/NavLink";

export default function SmallHeader() {
    return (
        <div className={c.header}>
                <div className={c.content}>
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
                            <li>
                                <NavLink href={'/contact'} activeClassName={c.activeClassName}>
                                    <a className={c.navLink} href="/contact">Contact</a>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
        </div>
    )
}