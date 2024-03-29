"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { RiTimerLine } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import Style from "./questions.module.css";

export default function Questions({ tenQuestion }) {

    const [startIndex, setStartIndex] = useState(0);
    const [table, setTable] = useState([]);
    const [timer, setTimer] = useState(30);
    const [canSelect, setCanSelect] = useState(false);
    const [finishQuiz, setFinishQuiz] = useState(false);
    const [timerColor, setTimerColor] = useState("green");

    const question = tenQuestion[startIndex];

    const [selectedOption, setSelectedOption] = useState({ number: tenQuestion[startIndex].id, answer: "Boş" });

    useEffect(() => {
        document.querySelectorAll('input[type="radio"]').forEach(radio => radio.checked = false);
    }, [startIndex]);

    useEffect(() => {
        if (timer > 0 && !finishQuiz) {
            const interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
                if (timer === 20) {
                    setCanSelect(true);
                }
                if (timer >= 1 && timer < 11) setTimerColor("red");

                if (timer >= 12 && timer < 21) setTimerColor("yellow");

                if (timer >= 22 && timer <= 30) setTimerColor("green");
            }, 1000);
            return () => clearInterval(interval);
        } else if (timer === 0) {
            handleNext();
        }
    }, [timer]);

    const handleRadioChange = (item, index) => {
        if (canSelect) {
            setSelectedOption({
                number: startIndex + 1,
                answer: `${String.fromCharCode(97 + index)}-) ${item}`
            });
        }
    };

    function handleNext() {
        if (startIndex === 9) {
            setTable((table) => [...table, selectedOption]);
            setFinishQuiz(true);
            return;
        }

        setTable((table) => [...table, selectedOption]);
        setStartIndex((value) => value + 1);
        setSelectedOption({
            number: tenQuestion[startIndex + 1].id,
            answer: "Boş"
        });
        setTimer(30);
        setTimerColor("green");
        setCanSelect(false);
    }

    function capitalizeFirstLetter(string) {
        return string.substr(0, 1).toUpperCase() + string.substr(1);
    }

    return (
        <div className={Style.container}>
            <Link className={Style.homeLink} href="/"><FaHome className={Style.iconLink} /> Anasayfa</Link>

            {finishQuiz ? (
                <div className={Style.table}>
                    <div className={Style.head}>
                        <h2 className={Style.headQuestion}>Soru</h2>
                        <h2 className={Style.headAnswer}>Cevap</h2>
                    </div>
                    {table.map((item, index) => (
                        <div key={index}>
                            <div className={Style.row}>
                                <p className={Style.tableNumber}>{item.number}.</p>
                                <p className={Style.tableAnswer}>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className={Style.content}>
                    <h2 className={Style.title}>Soru {question?.id}-) {capitalizeFirstLetter(question?.title)}?</h2>

                    <div className={Style.options}>
                        {question?.body.split("\n").map((item, index) => (
                            <div className={Style.option} key={index}>
                                <input className={Style.radio} type="radio" name="options" id={`option-${index}`} onChange={() => handleRadioChange(item, index)} disabled={!canSelect} />
                                <label className={Style.answer} htmlFor={`option-${index}`}>{String.fromCharCode(97 + index)}-) {item}</label>
                            </div>
                        ))}
                    </div>

                    <div className={Style.actions}>
                        <p className={Style.timer} style={{ color: `${timerColor}` }}><RiTimerLine className={Style.icon} /> {timer} saniye</p>
                        <button className={Style.btn} onClick={handleNext}>{startIndex === 9 ? "Bitir" : "İleri"}</button>
                    </div>
                </div>
            )}
        </div>
    )
}
