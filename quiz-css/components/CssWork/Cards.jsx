"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { SlBasket } from "react-icons/sl";
import Style from "./cards.module.css";

export default function Cards() {

    return (
        <div className={Style.container}>
            <Row className={Style.upRow}>
                <Col xxl={6} xl={4} lg={4} md={3} sm={4} xs={8} className={Style.bestCol}>
                    <h2 className={Style.bestOfTitle}>The best of best</h2>
                </Col>

                <Col xxl={6} xl={4} lg={4} md={3} sm={4} xs={8} className={Style.signUpCol}>
                    <Link href="/signup" className={Style.linkSignUp}>Sign up now</Link>
                </Col>
            </Row>

            <Row className={Style.downRow}>
                <Col xxl={4} xl={4} lg={4} md={3} sm={4} xs={8} className={Style.cardSide}>
                    <div className={Style.back}>
                        <Image className={Style.backPhoto} src="/cards/Rectangle4.png" width={500} height={500} quality={99} alt="shoe" />
                    </div>

                    <Card className={Style.card}>
                        <Image className={Style.photo} src="/cards/Picture.png" width={500} height={500} quality={99} alt="shoe" />
                        <Card.Body className={Style.cardBody}>
                            <Card.Title className={Style.cardTitle}>Title</Card.Title>
                            <Card.Text className={Style.cardText}>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Link href="/buynow" className={Style.linkBuyNow}><SlBasket className={Style.icon} /> Buy Now</Link>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xxl={4} xl={4} lg={4} md={3} sm={4} xs={8} className={Style.cardSide}>
                    <div className={Style.back2}>
                        <div className={Style.up}>
                            <Image className={Style.backPhoto1} src="/cards/Rectangle2.png" width={500} height={500} quality={99} alt="shoe" />
                        </div>

                        <div className={Style.down}>
                            <Image className={Style.backPhoto2} src="/cards/Rectangle3.png" width={500} height={500} quality={99} alt="shoe" />
                        </div>
                    </div>

                    <Card className={Style.card}>
                        <Image className={Style.photo} src="/cards/Picture(1).png" width={500} height={500} quality={99} alt="shoe" />
                        <Card.Body className={Style.cardBody}>
                            <Card.Title className={Style.cardTitle}>Title</Card.Title>
                            <Card.Text className={Style.cardText}>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Link href="/buynow" className={Style.linkBuyNow}><SlBasket className={Style.icon} /> Buy Now</Link>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xxl={4} xl={4} lg={4} md={3} sm={4} xs={8} className={Style.cardSide}>
                    <div className={Style.back3}>
                        <div className={Style.up3}>
                            <Image className={Style.backPhoto3} src="/cards/Rectangle5.png" width={500} height={500} quality={99} alt="shoe" />
                        </div>

                        <div className={Style.down3}>
                            <Image className={Style.backPhoto4} src="/cards/Rectangle1.png" width={500} height={500} quality={99} alt="shoe" />
                        </div>
                    </div>

                    <Card className={Style.card}>
                        <Image className={Style.photo} src="/cards/Picture(2).png" width={500} height={500} quality={99} alt="shoe" />
                        <Card.Body className={Style.cardBody}>
                            <Card.Title className={Style.cardTitle}>Title</Card.Title>
                            <Card.Text className={Style.cardText}>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Link href="/buynow" className={Style.linkBuyNow}><SlBasket className={Style.icon} /> Buy Now</Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
