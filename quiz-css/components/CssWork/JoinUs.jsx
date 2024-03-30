import Image from 'next/image';
import Link from 'next/link';
import { Col, Row } from 'react-bootstrap';
import { BiCheck } from "react-icons/bi";
import Style from "./joinus.module.css";

export default function JoinUs() {

    return (
        <div className={Style.container}>
            <Row className={Style.row}>
                <Col xxl={4} xl={4} lg={4} md={3} sm={4} xs={8} className={Style.left}>
                    <div className={Style.content}>
                        <h2 className={Style.title}>Why join us</h2>
                        <p className={Style.text}><BiCheck className={Style.icon} /> Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        <p className={Style.text}><BiCheck className={Style.icon} /> Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                        <p className={Style.text}><BiCheck className={Style.icon} /> Lorem ipsum, dolor sit amet consectetur.</p>
                        <Link href="/signup" className={Style.linkSignUp}>Sign up now</Link>
                    </div>
                </Col>

                <Col xxl={7} xl={4} lg={4} md={3} sm={4} xs={8} className={Style.right}>
                    <div className={Style.layer1}>
                        <Image className={Style.photo1} src="/joinus/Rectangle5.png" width={500} height={500} quality={99} alt="shape" />
                    </div>

                    <div className={Style.layer2}>
                        <Image className={Style.videoPhoto} src="/joinus/Desktop.png" width={500} height={500} quality={99} alt="video" />
                    </div>

                    <div className={Style.layer3}>
                        <Image className={Style.photo3} src="/joinus/Rectangle1.png" width={500} height={500} quality={99} alt="shape" />
                    </div>

                    <div className={Style.layer4}>
                        <Image className={Style.photo4} src="/joinus/Rectangle4.png" width={500} height={500} quality={99} alt="shape" />
                    </div>

                    <div className={Style.layer5}>
                        <Image className={Style.photo5} src="/joinus/Rectangle6.png" width={500} height={500} quality={99} alt="shape" />
                    </div>

                    <div className={Style.layer6}>
                        <Image className={Style.photo6} src="/joinus/Rectangle3.png" width={500} height={500} quality={99} alt="shape" />
                    </div>

                    <div className={Style.layer7}>
                        <Image className={Style.photo7} src="/joinus/Rectangle2.png" width={500} height={500} quality={99} alt="shape" />
                    </div>
                </Col>
            </Row>
        </div>
    )
}
