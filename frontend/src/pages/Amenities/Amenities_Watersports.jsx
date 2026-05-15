import AmenitiesHeader from "../../components/AmenitiesHeader"

import '../../css/Amenities_Watersports.css';

function Amenities_Watersports() {
    return (
        <>
            <div className="amenities_watersports_wrapper">
                <div className="amenities_watersports_content_wrapper">
                    <div className="amenities_watersports_content_label_div anim-up">
                        <AmenitiesHeader label="WATER SPORTS" header={<p>Ride the <span className="italics">wave</span></p>} label_orientation={'l'} />
                        <p>From leisurely banana boats to the raw thrill of water jetpacks -- we've got the whole ocean on the menu.</p>
                    </div>
                    <div className="amenities_watersports_content_faux_grid_div anim-up">
                        <div className="amenities_watersports_content_faux_grid_upper">
                            <div className="amenities_watersports_content_item">
                                <p>₱1,500 / 30 min</p>
                                <h1>🚤</h1>
                                <h2>Jet Ski</h2>
                                <label>Single or tandem · Guided route available</label>
                            </div>
                            <div className="amenities_watersports_content_item">
                                <p>₱2,500 / session</p>
                                <h1>💦</h1>
                                <h2>Water Jetpack</h2>
                                <label>Training included · 20-min sessions</label>
                            </div>
                            <div className="amenities_watersports_content_item">
                                <p>₱800 / person</p>
                                <h1>🍌</h1>
                                <h2>Banana Boat</h2>
                                <label>Up to 6 riders · The crowd pleaser</label>
                            </div>
                        </div>
                        <div className="amenities_watersports_content_faux_grid_lower">
                            <div className="amenities_watersports_content_item">
                                <p>₱3,500 / flight</p>
                                <h1>🪂</h1>
                                <h2>Parasailing</h2>
                                <label>Soar 60 meters above the sea · Tandem available · Breathtaking 15-minute flight</label>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="fade-left">- The ocean is calling. Don't keep it waiting. -</p>
            </div>
        </>
    )
}

export default Amenities_Watersports