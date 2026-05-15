import ContactMain from './ContactMain.jsx';
import { usePageAnimations } from "../../hooks/usePageAnimations"
import { useEffect } from "react";
import { lenis } from "../../main";

function Contact() {
    usePageAnimations({ lockScroll: false });
    useEffect(() => {
        window.scrollTo(0, 0);
        lenis.scrollTo(0);
    }, []);

    return (
        <>
            <ContactMain />
        </>
    )
}

export default Contact