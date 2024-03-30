"use client";
import { Col, Row } from 'react-bootstrap';
import { CiSearch } from "react-icons/ci";
import { GoShieldCheck } from "react-icons/go";
import { CgScreen } from "react-icons/cg";
import { IoRocketOutline } from "react-icons/io5";
import { MdOutlinePodcasts } from "react-icons/md";
import { GiSettingsKnobs } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa6";
import Style from "./grow.module.css";
import { useState } from 'react';
import Image from 'next/image';

export default function GrowYourCollection() {

    const [overItems, setOverItems] = useState(new Array(6).fill(false)); // 6 adet false değeri içeren bir dizi oluşturuyoruz

    const handleMouseOver = (index) => {
        const updatedItems = [...overItems];
        updatedItems[index] = true;
        setOverItems(updatedItems);
    };

    const handleMouseLeave = (index) => {
        const updatedItems = [...overItems];
        updatedItems[index] = false;
        setOverItems(updatedItems);
    };

    const items = [
        { icon: <CiSearch className={Style.icon} />, text: 'Bibendum tellus' },
        { icon: <GoShieldCheck className={Style.icon} />, text: 'Cras eget' },
        { icon: <IoRocketOutline className={Style.icon} />, text: 'Dolor pharetra' },
        { icon: <CgScreen className={Style.icon} />, text: 'Amet, fringilla' },
        { icon: <MdOutlinePodcasts className={Style.icon} />, text: 'Amet nibh' },
        { icon: <GiSettingsKnobs className={Style.icon} />, text: 'Sed velit' }
    ];

    return (
        <div className={Style.container}>
            <Row className={Style.row}>
                <Col xxl={10} xl={4} lg={4} md={3} sm={4} xs={8} className={Style.up}>
                    <h2 className={Style.title}>Grow your collection</h2>
                    <p className={Style.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, itaque ducimus
                        inventore excepturi numquam fuga consequatur, libero accusantium, illo
                        sapiente ratione dolor totam vitae atque? Esse ab deserunt saepe expedita.
                        Harum dolore qui incidunt, corporis placeat sunt iusto veritatis illo,
                        dignissimos nisi, adipisci ex molestiae odio. Expedita facilis sit
                        voluptatem temporibus ratione impedit? Molestias, error nam nemo
                        perspiciatis dicta doloribus!
                    </p>
                </Col>
            </Row>

            <Row className={Style.row2}>
                <Col xxl={2} xl={4} lg={4} md={3} sm={4} xs={8} className={Style.left}>
                    {items.map((item, index) => (
                        <button
                            key={index}
                            className={Style.btn}
                            onMouseOver={() => handleMouseOver(index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                        >
                            {item.icon} {item.text} {overItems[index] && <FaArrowRight className={Style.iconHover} />}
                        </button>
                    ))}
                </Col>

                <Col xxl={8} xl={4} lg={4} md={3} sm={4} xs={8} className={Style.right}>
                    <div className={Style.layer1}>
                        <Image className={Style.photo1} src="/grow/Picture.png" width={500} height={500} quality={99} alt="photo" />
                    </div>

                    <div className={Style.layer2}>
                        <Image className={Style.photo2} src="/grow/Desktop2.png" width={500} height={500} quality={99} alt="photo" />
                    </div>

                    <div className={Style.layer3}>
                        <Image className={Style.photo3} src="/grow/Desktop.png" width={500} height={500} quality={99} alt="photo" />
                    </div>
                </Col>
            </Row>
        </div>
    )
}
