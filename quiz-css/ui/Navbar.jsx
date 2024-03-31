"use client";
import Link from "next/link";
import { useState } from "react";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Style from "./navbar.module.css";

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={Style.nav}>
            <div className={Style.left}>
                <Link className={Style.logo} href="/css-calismasi">Collers</Link>
            </div>

            <div className={Style.bars}>
                <button className={Style.btn} onClick={() => setIsOpen((value) => !value)}>{isOpen ? <IoMdCloseCircleOutline className={Style.icon} /> : <HiMiniBars3BottomRight className={Style.icon} />}</button>
                {isOpen &&
                    <div className={Style.openMenu}>
                        <ul className={Style.ulMenu}>
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
                    </div>}
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
