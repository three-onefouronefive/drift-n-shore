import '../../css/Contact_Cards.css';
import AmenitiesHeader from '../../components/AmenitiesHeader';

function Contact_Cards() {
    return (
        <>
            <div className='contact_cards_wrapper'>
                <div className='contact_card_margin_bottom_a_bit'>
                    <AmenitiesHeader
                        label="DIRECT LINES"
                        header={
                            <span>
                                Reach the right <span className='italics'>team</span>
                            </span>
                        }
                        label_orientation='left'
                    />
                </div>

                <div className='contact_card_grid'>

                    <div className='contact_card'>
                        <label>🛏️</label>

                        <h1>Rooms & Reservations</h1>

                        <p>
                            Suite availability, booking changes, early check-in
                            requests, and accommodation queries.
                        </p>

                        <span className='contact_card_email'>
                            reservations@driftandshore.com
                        </span>

                        <span className='contact_card_phone'>
                            +63 (2) 8821 4732 • Daily 8AM–8PM
                        </span>
                    </div>

                    <div className='contact_card'>
                        <label>🍽️</label>

                        <h1>Dining & Bar</h1>

                        <p>
                            Table bookings at The Tide Table, private dining
                            arrangements, and bar event enquiries.
                        </p>

                        <span className='contact_card_email'>
                            dining@driftandshore.com
                        </span>

                        <span className='contact_card_phone'>
                            +63 (2) 8794 2218 • Daily 10AM–10PM
                        </span>
                    </div>

                    <div className='contact_card'>
                        <label>🚤</label>

                        <h1>Water Sports & Activities</h1>

                        <p>
                            Jet ski, parasailing, banana boat, water jetpack
                            bookings, and activity packages.
                        </p>

                        <span className='contact_card_email'>
                            activities@driftandshore.com
                        </span>

                        <span className='contact_card_phone'>
                            +63 (2) 8556 3901 • Daily 7AM–5PM
                        </span>
                    </div>

                    <div className='contact_card'>
                        <label>📰</label>

                        <h1>Press & Media</h1>

                        <p>
                            Media kits, photography requests, press stays,
                            influencer collaborations, and PR enquiries.
                        </p>

                        <span className='contact_card_email'>
                            press@driftandshore.com
                        </span>

                        <span className='contact_card_phone'>
                            +63 (2) 8640 1187 • Mon–Fri 9AM–5PM
                        </span>
                    </div>

                    <div className='contact_card'>
                        <label>💍</label>

                        <h1>Events & Weddings</h1>

                        <p>
                            Beachside ceremonies, corporate retreats, celebration packages, and group bookings.
                        </p>

                        <span className='contact_card_email'>
                            events@driftandshore.com
                        </span>

                        <span className='contact_card_phone'>
                            +63 (2) 8732 9044 • Mon-Sat  9AM–6PM
                        </span>
                    </div>

                    <div className='contact_card'>
                        <label>♿️</label>

                        <h1>Guest Services</h1>

                        <p>
                            Accessibility requests, dietary requirements, special celebrations, and any other personal needs.
                        </p>

                        <span className='contact_card_email'>
                            guestservices@driftandshore.com
                        </span>

                        <span className='contact_card_phone'>
                            +63 (2) 8815 6629 • 24 hours
                        </span>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Contact_Cards