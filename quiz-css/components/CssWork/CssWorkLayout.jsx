import Navbar from '@/ui/Navbar';
import Header from './Header';
import Cards from './Cards';
import JoinUs from './JoinUs';
import Slider from './Slider';
import GrowYourCollection from './GrowYourCollection';
import Map from './Map';
import Footer from '@/ui/Footer';
import Style from "./css-work-layout.module.css";

export default function CssWorkLayout() {

    return (
        <main className={Style.main}>
            <Navbar />
            <Header />
            <Cards />
            <JoinUs />
            <Slider />
            <GrowYourCollection />
            <Map />
            <Footer />
        </main>
    )
}
