import Footer from "../../components/Footer"
import NavBar from "../../components/Navbar"
import Reservation_Main from "./Reservation_Main"
import { useReservation } from "../../context/ReservationContext"
import { useEffect } from "react"
import { lenis } from "../../main.jsx"


function Reservation() {
    const { reservation, setReservation } = useReservation()

    useEffect(() => {
        window.scrollTo(0, 0);
        lenis.scrollTo(0);
    }, []);

    return (
        <>
            <Reservation_Main/>
            <Footer/>
        </>
    )
}

export default Reservation