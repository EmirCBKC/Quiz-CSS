"use client";
import Image from 'next/image';
import React, { useState, useRef } from 'react';
import { Card } from 'react-bootstrap';
import { Col, Row } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Style from "./slider.module.css";

const Slider = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [offset, setOffset] = useState(0);
    const [baseOffset, setBaseOffset] = useState(0);
    const sliderRef = useRef(null);

    const cards = [
        { logo: 'Logo-grey', pp: 'UserThumb', name: "Ralph Edwards", job: "Product Designer" },
        { logo: 'Logo-grey', pp: 'UserThumb', name: "Hellen Jummy", job: "Team Lead" },
        { logo: 'Logo-grey(1)', pp: 'UserThumb(1)', name: "Hellena John", job: "Co-founder" },
        { logo: 'Logo-grey(2)', pp: 'UserThumb(2)', name: "David Oshodi", job: "Manager" },
        { logo: 'Logo-grey(2)', pp: 'UserThumb(3)', name: "Charolette Hanlin", job: "CEO" },
    ];

    const handlePrev = () => {
        setOffset(0);
    };

    const handleNext = () => {
        setOffset(-717);
    };

    const handleMouseDown = (event) => {
        setIsDragging(true);
        setStartX(event.clientX);
        setBaseOffset(offset);
    };

    const handleMouseMove = (event) => {
        if (!isDragging) return;
        const x = event.clientX;
        const deltaX = x - startX;
        setOffset(baseOffset + deltaX);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        setStartX(0);
        setBaseOffset(offset);
        if (offset > 50) {
            handlePrev();
        } else if (offset < -50) {
            handleNext();
        }
    };

    console.log(offset);

    return (
        <div className={Style.container}>
            <Row>
                <Col xxl={6} xl={4} lg={4} md={3} sm={4} xs={8} className={Style.left}>
                    <h2 className={Style.title}>Because they love us</h2>
                </Col>

                <Col xxl={6} xl={4} lg={4} md={3} sm={4} xs={8} className={Style.right}>
                    <button className={Style.btn} onClick={handlePrev}><FaArrowLeft /></button>
                    <button className={Style.btn} onClick={handleNext}><FaArrowRight /></button>
                </Col>
            </Row>

            <Row>
                <Col xxl={12} xl={4} lg={4} md={3} sm={4} xs={8} className={Style.sliderCol}>
                    <div className={Style.background}></div>

                    <div
                        className={Style.slider}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        ref={sliderRef}
                        style={{
                            transform: `translateX(${offset}px)`,
                            transition: isDragging ? 'none' : 'transform 0.3s ease',
                        }}
                    >
                        {cards.map((item, index) => (
                            <Card className={Style.card} key={index}>
                                <Card.Body>
                                    <Image className={Style.photo} src={`/slider/${item.logo}.png`} width={500} height={500} quality={99} alt="logo" />
                                    <Card.Text className={Style.text}>Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus,
                                        viverra turpis lorem. Varius a turpis urna id porttitor.
                                    </Card.Text>
                                    <div className={Style.profile}>
                                        <Image className={Style.profilePhoto} src={`/slider/${item.pp}.png`} width={500} height={500} quality={99} alt="picture" />
                                        <div className={Style.userInfo}>
                                            <p className={Style.name}>{item.name}</p>
                                            <p className={Style.job}>{item.job}</p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Slider;
