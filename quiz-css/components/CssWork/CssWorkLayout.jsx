import Navbar from '@/ui/Navbar';
import Header from './Header';
import Style from "./css-work-layout.module.css";
import Cards from './Cards';
import JoinUs from './JoinUs';

export default function CssWorkLayout() {

    return (
        <main className={Style.main}>
            <Navbar />
            <Header />
            <Cards />
            <JoinUs />
        </main>
    )
}
