import AmenitiesHeader from '../../components/AmenitiesHeader';
import '../../css/Amenities_Facilities.css';

function Amenities_Facilities() {
    return (
        <>
            <div className="amenities_facilities_wrapper">
                <div className='amenities_facilities_margin_sep anim-up'>
                    <AmenitiesHeader label="FACILITIES" header={<p>More ways to <span className='italics'>drift</span></p>} label_orientation="l" />
                </div>

                <div className='amenities_facilities_grid'>
                    <div className='amenities_facilities_grid_item amenities_grid_item_black'>
                        <h1>💪</h1>
                        <h2>Tidal Gym</h2>
                        <p>Opens 5AM — 11PM</p>
                    </div>
                    <div className='amenities_facilities_grid_item amenities_grid_item_orange'>
                        <h1>🍸</h1>
                        <h2>The Undertow Bar</h2>
                        <p>5PM — 2AM daily</p>
                    </div>
                    <div className='amenities_facilities_grid_item amenities_grid_item_green'>
                        <h1>🌿</h1>
                        <h2>Shore Garden</h2>
                        <p>Open all day</p>
                    </div>
                    <div className='amenities_facilities_grid_item amenities_grid_item_beachy'>
                        <h1>🏖️</h1>
                        <h2>Private Beach</h2>
                        <p>Exclusive ⋅ 3 Coves</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Amenities_Facilities