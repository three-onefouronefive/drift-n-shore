import AmenitiesTabs from "../../components/AmenitiesTabs"
import Amenities_Facilities from "./Amenities_Facilities"
import Amenities_Hero from "./Amenities_Hero"
import Amenities_Watersports from "./Amenities_Watersports"

import '../../css/Amenities_Main.css';
import Amenities_Details from "./Amenities_Details";
import Footer from "../../components/Footer";
import DnSCTA from "../../components/DnSCTA";

function Amenities_Main() {

    return (
        <>
            <div className="amenities_main_wrapper">
                <Amenities_Hero />
                <AmenitiesTabs />
                <Amenities_Facilities />
                <Amenities_Watersports />
                <Amenities_Details />
                <DnSCTA />
                <Footer />
            </div>
        </>
    )
}

export default Amenities_Main