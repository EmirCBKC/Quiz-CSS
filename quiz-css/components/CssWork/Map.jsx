"use client";
import Image from 'next/image';
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Style from "./map.module.css";

export default function Map() {

    useEffect(() => {
        const content = document.querySelector(`.${Style.content}`);
        const circleCount = 9;
        const fixedPositions = [
            { top: 50, left: 100 },
            { top: 300, left: 200 },
            { top: 200, left: 100 },
            { top: 250, left: 500 },
            { top: 800, left: 250 },
            { top: 350, left: 700 },
            { top: 400, left: 900 },
            { top: 450, left: 400 },
            { top: 100, left: 2000 }
        ];

        for (let i = 0; i < circleCount; i++) {
            const circle = document.createElement('div');
            circle.classList.add(Style.circle);

            const position = fixedPositions[i];

            circle.style.top = `${position.top}px`;
            circle.style.left = `${position.left}px`;
            content.appendChild(circle);
        }
    }, []);

    return (
        <div className={Style.container}>
            <Row className={Style.row}>
                <Col xxl={11} xl={11} lg={11} md={11} sm={11} xs={11} className={Style.col}>
                    <div className={Style.background}>
                        <Image className={Style.photo} src="/map/chart.png" width={1050} height={635} quality={99} alt="shape" />
                    </div>

                    <div className={Style.content}>
                        <div className={Style.popup}>
                            <div className={Style.box}>
                                <Image className={Style.photo2} src="/map/col.png" width={1050} height={635} quality={99} alt="popup" />
                            </div>

                            <div className={Style.box2}>
                                <p className={Style.number}>11,658,467</p>
                                <p className={Style.text}>Shoes Collected</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
