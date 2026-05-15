import '../../css/Amenities_Details.css';
import AmenitiesHeader from '../../components/AmenitiesHeader';

function Amenities_Details() {
    return (
        <>
            <div className='amenities_details_wrapper'>
                <div className='amenities_details_grid'>
                    <div className='amenities_details_grid1 amenities_watersports_grey'>
                        <div className='anim-up amenities_details_white'>
                            <div className='amenities_scale_down'>
                                <AmenitiesHeader label="WELLNESS" header={<p>Tidal <span className='italics'>Gym</span></p>} />
                            </div>
                        </div>
                        <p className='anim-up amenities_details_white'>Our oceanside fitness studio is equipped with Technogym machines, free weights, TRX suspension systems, and a dedicated yoga deck facing the sea. Open daily 5AM--11PM.</p>
                        <div className='amenities_details_taglist anim-up'>
                            <label>CARDIO DECK</label>
                            <label>FREE WEIGHTS</label>
                            <label>YOGA TERRACE</label>
                            <label>PERSONAL TRAINING</label>
                            <label>OCEAN VIEW</label>
                        </div>
                    </div>
                    <div className='amenities_details_grid2 amenities_watersports_orange'>
                        <div className='anim-up amenities_details_white'>
                            <div className='amenities_scale_down'>
                                <AmenitiesHeader label="DINING & DRINKS" header={<p>The <span className='italics'>Undertow</span></p>} />
                            </div>
                        </div>
                        <p className='anim-up amenities_details_white'>Named after the invisible pull that makes the ocean irresistible, The Undertow Bar serves handcrafted cocktails, local rum flights, and small bites to pair. Live music Thursday--Sunday.</p>
                        <div className='amenities_details_taglist anim-up'>
                            <label>CRAFT COCKTAILS</label>
                            <label>RUM SELECTION</label>
                            <label>LIVE MUSIC</label>
                            <label>HAPPY HOUR 5-7PM</label>
                        </div>
                    </div>
                    <div className='amenities_details_grid3 amenities_watersports_green'>
                        <div className='amenities_details_grid4_img'></div>
                    </div>
                    <div className='amenities_details_grid4 amenities_watersports_beige'>
                        <div className='anim-up'>
                            <div className='amenities_scale_down amenities_margin_up'>
                                <AmenitiesHeader label="NATURE & GROUNDS" header={<p>Shore <span className='italics'>Garden</span></p>} />
                            </div>
                        </div>
                        <p className='anim-up'>Two hectares of curated coastal landscape, where native palms, bougainvillea, and seaside grasses frame winding paths to the beach. Designed to be wandered, not run through.</p>
                        <div className='amenities_grid4_list anim-up'>
                            <p>⟡  3 shaded walking trails</p>
                            <p>⟡  Hammock grove with 12 hammocks</p>
                            <p>⟡  Picnic lawn with beach views</p>
                            <p>⟡  Native plant labeling & garden tours</p>
                            <p>⟡  Sunrise yoga spot (Tues, Thurs, Sat)</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Amenities_Details