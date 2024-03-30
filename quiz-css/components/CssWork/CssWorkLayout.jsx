import Navbar from '@/ui/Navbar';
import Header from './Header';
import Style from "./css-work-layout.module.css";
import Cards from './Cards';

export default function CssWorkLayout() {

    return (
        <main className={Style.main}>
            <Navbar />
            <Header />
            <Cards />
        </main>
    )
}
