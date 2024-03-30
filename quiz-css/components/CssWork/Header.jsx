import Image from 'next/image';
import Link from 'next/link';
import { Col, Row } from 'react-bootstrap';
import { FaRegPlayCircle } from "react-icons/fa";
import Style from "./header.module.css";

export default function Header() {

    return (
        <div className={Style.container}>
            <div className={Style.clip}></div>

            <div className={Style.content}>
                <Row className={Style.upRow}>
                    <Col xxl={6} xl={4} lg={4} md={3} sm={4} xs={8} className={Style.collectible}>
                        <h2 className={Style.title}>Collectible Sneakers</h2>
                        <p className={Style.collectibleText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ad sed
                            alias doloribus, tempore error molestias deserunt labore aliquam culpa autem
                            praesentium dolore deleniti eum tenetur unde provident, non incidunt!
                        </p>
                        <div className={Style.actions}>
                            <Link href="/signup" className={Style.link}>Sign up now</Link>
                            <button className={Style.btn}><FaRegPlayCircle className={Style.icon} /> Watch Demo</button>
                        </div>
                    </Col>

                    <Col xxl={5} xl={4} lg={4} md={3} sm={4} xs={8} className={Style.sneaker}>
                        <div className={Style.background}>

                        </div>

                        <div className={Style.image}>
                            <Image className={Style.photo} src="/header/pexels.png" width={500} height={500} quality={99} alt="shoe" />
                        </div>
                    </Col>
                </Row>

                <Row className={Style.downRow}>
                    <Col xxl={3} xl={4} lg={4} md={3} sm={4} xs={8} className={Style.box}>
                        <div className={Style.images}>
                            <div className={Style.back}>
                                <Image className={Style.photo1_1} src="/header/Rectangle25.png" width={500} height={500} quality={99} alt="shoe" />
                            </div>

                            <div className={Style.forward}>
                                <Image className={Style.photo1_2} src="/header/icon.png" width={500} height={500} quality={99} alt="shoe" />
                            </div>
                        </div>

                        <p className={Style.name}>Nibh vivera</p>
                        <p className={Style.comment}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur non fuga
                            molestiae accusamus aspernatur? Enim, mollitia! Sit expedita nihil deserunt
                        </p>
                    </Col>

                    <Col xxl={3} xl={4} lg={4} md={3} sm={4} xs={8} className={Style.box}>
                        <div className={Style.images}>
                            <div className={Style.back}>
                                <Image className={Style.photo2_1} src="/header/Rectangle26.png" width={500} height={500} quality={99} alt="shoe" />
                            </div>

                            <div className={Style.forward}>
                                <Image className={Style.photo1_2} src="/header/tunnel.png" width={500} height={500} quality={99} alt="shoe" />
                            </div>
                        </div>

                        <p className={Style.name}>Cursus amet</p>
                        <p className={Style.comment}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur non fuga
                            molestiae accusamus aspernatur? Enim, mollitia! Sit expedita nihil deserunt
                        </p>
                    </Col>

                    <Col xxl={3} xl={4} lg={4} md={3} sm={4} xs={8} className={Style.box}>
                        <div className={Style.images}>
                            <div className={Style.back}>
                                <Image className={Style.photo3_1} src="/header/Rectangle27.png" width={500} height={500} quality={99} alt="shoe" />
                            </div>

                            <div className={Style.forward}>
                                <Image className={Style.photo1_2} src="/header/tv.png" width={500} height={500} quality={99} alt="shoe" />
                            </div>
                        </div>

                        <p className={Style.name}>Ipsum fermentum</p>
                        <p className={Style.comment}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur non fuga
                            molestiae accusamus aspernatur? Enim, mollitia! Sit expedita nihil deserunt
                        </p>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
