import Image from 'next/image';
import Link from 'next/link';
import { Col, Row } from 'react-bootstrap';
import { BsYoutube } from "react-icons/bs";
import { GrLanguage } from "react-icons/gr";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Style from "./footer.module.css";

export default function Footer() {

    return (
        <footer className={Style.footer}>
            <Row className={Style.up}>
                <Col xxl={3} xl={6} lg={6} md={12} sm={12} xs={12} className={Style.prod}>
                    <div>
                        <h4 className={Style.title}>Product</h4>
                        <ul className={Style.ul}>
                            <li className={Style.li}>
                                <Link className={Style.liLink} href="/pricing">Pricing</Link>
                            </li>
                            <li className={Style.li}>
                                <Link className={Style.liLink} href="/overview">Overview</Link>
                            </li>
                            <li className={Style.li}>
                                <Link className={Style.liLink} href="/browse">Browse</Link>
                            </li>
                            <li className={Style.li}>
                                <Link className={Style.liLink} href="/accessibility">Accessibility</Link>
                            </li>
                            <li className={Style.li}>
                                <Link className={Style.liLink} href="/five">Five</Link>
                            </li>
                        </ul>
                    </div>
                </Col>

                <Col xxl={3} xl={6} lg={6} md={12} sm={12} xs={12} className={Style.sol}>
                    <div>
                        <h4 className={Style.title}>Solutions</h4>
                        <ul className={Style.ul}>
                            <li className={Style.li}>
                                <Link className={Style.liLink} href="/brainstorming">Brainstorming</Link>
                            </li>
                            <li className={Style.li}>
                                <Link className={Style.liLink} href="/ideation">Ideation</Link>
                            </li>
                            <li className={Style.li}>
                                <Link className={Style.liLink} href="/wireframing">Wireframing</Link>
                            </li>
                            <li className={Style.li}>
                                <Link className={Style.liLink} href="/research">Research</Link>
                            </li>
                            <li className={Style.li}>
                                <Link className={Style.liLink} href="/design">Design</Link>
                            </li>
                        </ul>
                    </div>
                </Col>

                <Col xxl={3} xl={6} lg={6} md={12} sm={12} xs={12} className={Style.sup}>
                    <div>
                        <h4 className={Style.title}>Support</h4>
                        <ul className={Style.ul}>
                            <li className={Style.li}>
                                <Link className={Style.liLink} href="/contact-us">Contact Us</Link>
                            </li>
                            <li className={Style.li}>
                                <Link className={Style.liLink} href="/developers">Developers</Link>
                            </li>
                            <li className={Style.li}>
                                <Link className={Style.liLink} href="/documentation">Documentation</Link>
                            </li>
                            <li className={Style.li}>
                                <Link className={Style.liLink} href="/integrations">Integrations</Link>
                            </li>
                            <li className={Style.li}>
                                <Link className={Style.liLink} href="/reports">Reports</Link>
                            </li>
                        </ul>
                    </div>
                </Col>

                <Col xxl={3} xl={6} lg={6} md={12} sm={12} xs={12} className={Style.app}>
                    <div className={Style.links}>
                        <h4 className={Style.title}>Get the App</h4>
                        <Link className={Style.link} href="/app-store">
                            <Image className={Style.photo} src="/footer/AppStore.png" width={500} height={500} quality={99} alt="appstore" />
                        </Link>
                        <Link className={Style.link} href="/google-play">
                            <Image className={Style.photo2} src="/footer/GooglePlay.png" width={500} height={500} quality={99} alt="googleplay" />
                        </Link>
                    </div>

                    <div>
                        <h4 className={Style.title}>Follow Us</h4>
                        <div>
                            <ul className={Style.ulIcons}>
                                <li className={Style.li}>
                                    <Link className={Style.iconLink} href="/youtube"><BsYoutube /></Link>
                                </li>
                                <li className={Style.li}>
                                    <Link className={Style.iconLink} href="/facebook"><FaFacebookF /></Link>
                                </li>
                                <li className={Style.li}>
                                    <Link className={Style.iconLink} href="/twitter"><FaTwitter /></Link>
                                </li>
                                <li className={Style.li}>
                                    <Link className={Style.iconLink} href="/instagran"><FaInstagram /></Link>
                                </li>
                                <li className={Style.li}>
                                    <Link className={Style.iconLink} href="/linkedin"><FaLinkedinIn /></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>

            <div className={Style.border}></div>

            <Row className={Style.down}>
                <Col xxl={6} xl={12} lg={12} md={12} sm={12} xs={12} className={Style.cop}>
                    <p className={Style.copyRight}>Collers @ 2023. All rights reserved.</p>
                </Col>

                <Col xxl={6} xl={12} lg={12} md={12} sm={12} xs={12} className={Style.pol}>
                    <div className={Style.content}>
                        <ul className={Style.ulPolicy}>
                            <li className={Style.li}>
                                <Link className={Style.iconLink} href="/terms">Terms</Link>
                            </li>
                            <li className={Style.li}>
                                <Link className={Style.iconLink} href="/privacy">Privacy</Link>
                            </li>
                            <li className={Style.li}>
                                <Link className={Style.iconLink} href="/contact">Contact</Link>
                            </li>
                            <li className={Style.li}>
                                <Link className={Style.iconLink} href="/instagran"><GrLanguage /> EN</Link>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </footer>
    )
}
