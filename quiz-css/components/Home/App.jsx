import Link from 'next/link';
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import Style from "./app.module.css";

export default function App() {

    return (
        <div className={Style.container}>
            <Link className={Style.linkCss} href="/css-calismasi"><FaCss3Alt className={Style.icon} /> CSS Çalışması</Link>
            <Link className={Style.linkJs} href="/quiz-app"><SiJavascript className={Style.icon} /> Javascript Çalışması(Quiz App)</Link>
        </div>
    )
}
