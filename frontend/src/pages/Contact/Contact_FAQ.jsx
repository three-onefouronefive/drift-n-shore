import '../../css/Contact_FAQ.css';
import AmenitiesHeader from '../../components/AmenitiesHeader';

function Contact_FAQ() {

    return (
        <>
            <div className='contact_faq_wrapper'>
                <div className='contact_card_margin_bottom_a_bit'>
                    <AmenitiesHeader label="QUICK ANSWERS" header={<span>Frequently asked <span className='italics'>questions</span></span>} />
                </div>

                <div className='contact_faq_grid'>
                    <div className='contact_faq_grid_text'>
                        <h1>What time is check-in and check-out?</h1>
                        <p>Check-in begins at 2:00 PM and check-out is at 12:00 PM noon. Early check-in and late check-out are available upon request, subject to availability.</p>
                    </div>

                    <div className='contact_faq_grid_text'>
                        <h1>Is breakfast included in all stays?</h1>
                        <p>Yes — all suite bookings include a complimentary coastal breakfast served daily at The Tide Table from 7:00 AM to 10:30 AM.</p>
                    </div>

                    <div className='contact_faq_grid_text'>
                        <h1>What is your cancellation policy?</h1>
                        <p>Guests may cancel free of charge up to 72 hours before their scheduled check-in. Cancellations within 72 hours are subject to a one-night room charge.</p>
                    </div>

                    <div className='contact_faq_grid_text'>
                        <h1>Do you offer airport transfers?</h1>
                        <p>Yes, private airport transfers from NAIA and Clark can be arranged through our concierge. The service can also be added during the reservation process.</p>
                    </div>

                    <div className='contact_faq_grid_text'>
                        <h1>Are pets allowed at Drift & Shore?</h1>
                        <p>We are a pet-free resort to ensure the comfort and safety of all guests. We are happy to recommend nearby pet boarding facilities if needed.</p>
                    </div>

                    <div className='contact_faq_grid_text'>
                        <h1>Can I book water sports in advance?</h1>
                        <p>Absolutely. Water sports activities can be booked as add-ons during reservation or directly with our activities team upon arrival, subject to availability and weather conditions.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact_FAQ