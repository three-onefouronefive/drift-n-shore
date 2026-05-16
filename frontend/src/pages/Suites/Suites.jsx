import Suites_Main from './Suites_Main.jsx'
import { useReservation } from "../../context/ReservationContext"
import { useEffect } from "react"
import { lenis } from "../../main.jsx"

function Suites() {
    useEffect(() => {
            window.scrollTo(0, 0);
            lenis.scrollTo(0);
        }, []);

    return (
        <>
            <Suites_Main />
        </>
    )
}

export default Suites