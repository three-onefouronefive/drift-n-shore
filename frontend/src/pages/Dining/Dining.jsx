import Dining_Main from './Dining_Main.jsx';
import Footer from '../../components/Footer.jsx'
import { usePageAnimations } from '../../hooks/usePageAnimations'
import { useEffect } from "react";
import { lenis } from "../../main";

function Dining() {
    usePageAnimations({ lockScroll: false });
    useEffect(() => {
        window.scrollTo(0, 0);
        lenis.scrollTo(0);
    }, []);

    return (
        <>
            <Dining_Main />
            <Footer />
        </>
    )
}

export default Dining