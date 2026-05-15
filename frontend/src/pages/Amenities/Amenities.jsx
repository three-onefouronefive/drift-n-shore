import { usePageAnimations } from "../../hooks/usePageAnimations"
import Amenities_Main from "./Amenities_Main"
import { useEffect } from "react";
import { lenis } from "../../main";

function Amenities() {
    usePageAnimations({ lockScroll: false });
    useEffect(() => {
        window.scrollTo(0, 0);
        lenis.scrollTo(0);
    }, []);

    return (
        <>
            <Amenities_Main />
        </>
    )
}

export default Amenities