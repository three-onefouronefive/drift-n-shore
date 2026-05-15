import '../../css/Contact_Hero.css';

function Contact_Hero() {
    return (
        <>
            <div className="contact_hero_wrapper">
                <div className="contact_hero_header anim-up">
                    <h1>We're always<br /><span className="italics header_bluish">happy to hear</span><br />from you.</h1>
                    <p>Whether you're planning a stay, need a restaurant reservation, or just have a question -- our team is here, and we actually reply.</p>
                </div>
                <div className="contact_hero_basic_info">
                    <div className="contact_hero_basic_info_card anim-up">
                        <label>📞</label>
                        <div className="contact_hero_basic_info_card_text">
                            <label>RESERVATIONS</label>
                            <p>+63 (2) 8888 0000</p>
                        </div>
                    </div>
                    <div className="contact_hero_basic_info_card anim-up">
                        <label>✉️</label>
                        <div className="contact_hero_basic_info_card_text">
                            <label>GENERAL ENQUIRIES</label>
                            <p>hello@driftandshore.com</p>
                        </div>
                    </div>
                    <div className="contact_hero_basic_info_card anim-up">
                        <label>🕧</label>
                        <div className="contact_hero_basic_info_card_text">
                            <label>CONCIERGE HOURS</label>
                            <p>24 hours ⋅ 7 days</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact_Hero