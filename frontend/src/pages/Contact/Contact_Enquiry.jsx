import { useState } from 'react';
import TextField from '../../components/TextField.jsx'
import '../../css/Contact_Enquiry.css';
import CustomButton from '../../components/CustomButton.jsx';
import AmenitiesHeader from '../../components/AmenitiesHeader.jsx';
import ContactEnquiryMap from '../../components/ContactEnquiryMap.jsx';

function Contact_Enquiry() {
    const [category, setCategory] = useState(0);

    const categories = ["GENERAL ENQUIRY", "ROOM RESERVATION", "DINING RESERVATION", "EVENTS & WEDDINGS", "PRESS & MEDIA"];
    let currentCategory = categories[category];

    return (
        <>
            <div className="contact_enquiry_wrapper">
                <div className="contact_enquiry_question_categories anim-up">
                    {categories.map((cat, index) => (
                        <label
                            key={index}
                            className={category === index ? 'active_tab' : ''}
                            onClick={() => setCategory(index)}
                        >
                            {cat}
                        </label>
                    ))}
                </div>
                <div className="contact_enquiry_content">
                    <div className="contact_enquiry_form_wrapper anim-up">
                        <label>{currentCategory}</label>
                        <h1>How can we <span className="italics">help?</span></h1>
                        <p>Fill in the form below and our team will get back to you within 4 hours. For urgent matters, call us directly -- we're always at the other end.</p>
                        <div className="contact_enquiry_form">
                            <div className='contact_enquiry_form_grid anim-up'>
                                <TextField type="short" label="FIRST NAME" placeholder="Juan" />
                                <TextField type="short" label="LAST NAME" placeholder="dela Cruz" />
                                <TextField type="short" label="EMAIL ADDRESS" placeholder="juan@email.com" />
                                <TextField type="short" label="PHONE NUMBER" placeholder="+63 912 345 6789" />
                                <TextField type="short" label="SUBJECT" placeholder={currentCategory} />
                                <TextField type="short" label="HOW DID YOU FIND US?" placeholder="Instagram, Facebook, etc..." />
                            </div>
                            <TextField type="long" label="YOUR MESSAGE" placeholder="Tell us what's on your mind..." />
                        </div>
                        <div className='contact_enquiry_cta'>
                            <p>We will reply within 4 hours during business hours. For urgent queries call +63 (2) 8888 0000.</p>
                            <CustomButton text="SEND MESSAGE" variant="secondary" />
                        </div>
                    </div>
                    <div className="contact_enquiry_card">
                        <div className='contact_white'>
                            <AmenitiesHeader label="FIND US" header={<span>We're at the<br /><span className='italics header_bluish'>edge of the sea.</span></span>} />
                        </div>
                        <div className='contact_map contact_little_space'>
                            <div className='contact_mapoverlay'>
                                <span>BATANGAS COAST, PHILIPPINES</span>
                            </div>
                            <ContactEnquiryMap />
                        </div>
                        <div className='contact_address_line'>
                            <label className='contact_jost_subtitle'>ADDRESS</label>
                            <h1 className='contact_jost_bigger'>Drift & Shore Resort<br />Shoreline Drive, Batangas Coast</h1>
                            <p className='contact_jost_smaller'>Batangas, Philippines 4200</p>
                        </div>
                        <hr className='contact_hr_margin' />
                        <div className='contact_phone_line'>
                            <label className='contact_jost_subtitle'>PHONE</label>
                            <h1 className='contact_jost_bigger'>+63 (2) 8888 0000</h1>
                            <p className='contact_jost_smaller'>Front Desk ∙ 24 hours</p>
                            <h1 className='contact_jost_bigger'>+63 (2) 8888 0001</h1>
                            <p className='contact_jost_smaller'>Dining Reservations</p>
                        </div>
                        <hr className='contact_hr_margin' />
                        <div className='contact_email_line'>
                            <label className='contact_jost_subtitle'>EMAIL</label>
                            <h1 className='contact_jost_bigger'>hello@driftandshore.com</h1>
                            <p className='contact_jost_smaller'>General enquiries</p>
                            <h1 className='contact_jost_bigger'>dining@driftandshore.com</h1>
                            <p className='contact_jost_smaller'>Restaurant bookings</p>
                            <h1 className='contact_jost_bigger'>events@driftandshore.com</h1>
                            <p className='contact_jost_smaller'>Weddings & private events</p>
                        </div>
                        <hr className='contact_hr_margin ' />

                        <div className='contact_hours_line'>
                            <label className='contact_jost_subtitle'>FRONT DESK HOURS</label>
                            <div className='contact_hours_line_grid'>
                                <div className='contact_hours_grid_entry'>
                                    <label>Check-in</label>
                                    <p>2:00 PM onwards</p>
                                </div>
                                <div className='contact_hours_grid_entry'>
                                    <label>Check-out</label>
                                    <p>Until 12:00 PM</p>
                                </div>
                                <div className='contact_hours_grid_entry'>
                                    <label>Concierge</label>
                                    <p>24 / 7</p>
                                </div>
                                <div className='contact_hours_grid_entry'>
                                    <label>Reservations</label>
                                    <p>8:00 AM -- 8:00 PM</p>
                                </div>
                            </div>
                        </div>

                        <hr className='contact_hr_margin ' />

                        <div className='contact_socials'>
                            <div className='contact_socials_item'>
                                <span>INSTAGRAM</span>
                            </div>
                            <div className='contact_socials_item'>
                                <span>FACEBOOK</span>
                            </div>
                            <div className='contact_socials_item'>
                                <span>TIKTOK</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact_Enquiry