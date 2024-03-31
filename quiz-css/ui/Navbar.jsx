import Link from "next/link";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import Style from "./navbar.module.css";

export default function Navbar() {

    return (
        <nav className={Style.nav}>
            <div className={Style.left}>
                <Link className={Style.logo} href="/css-calismasi">Collers</Link>
            </div>

            <div className={Style.bars}>
                <button className={Style.btn}><HiMiniBars3BottomRight className={Style.icon} /></button>
            </div>

            <div className={Style.right}>
                <ul className={Style.ul}>
                    <li className={Style.li}>
                        <Link className={Style.link} href="/products">Products</Link>
                    </li>
                    <li className={Style.li}>
                        <Link className={Style.link} href="/solutions">Solutions</Link>
                    </li>
                    <li className={Style.li}>
                        <Link className={Style.link} href="/pricing">Pricing</Link>
                    </li>
                    <li className={Style.li}>
                        <Link className={Style.link} href="/resources">Resources</Link>
                    </li>
                    <li className={Style.li}>
                        <Link className={Style.link} href="/login">Log In</Link>
                    </li>
                    <li className={Style.li}>
                        <Link className={`${Style.link} ${Style.signUp}`} href="/signup">Sign up now</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
