import Navbar from '@/ui/Navbar';
import Header from './Header';
import Style from "./css-work-layout.module.css";

export default function CssWorkLayout() {

    return (
        <main className={Style.main}>
            <Navbar />
            <Header />
        </main>
    )
}
