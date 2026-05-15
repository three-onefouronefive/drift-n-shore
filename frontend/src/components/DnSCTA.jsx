import '../css/DnSCTA.css';
import CustomButton from '../components/CustomButton';
import { Link } from 'react-router-dom';

function DnSCTA({ header, description }) {
    if (!header && !description) {
        return (
            <>
                <div className='dnscta_wrapper'>
                    <div className='dnscta_wrapper_label'>
                        <h1 className='header_white'>Ready to <span className='italics header_bluish'>drift?</span></h1>
                        <p>All amenities are available to our in-house guests. Water sports packages available for booking upon arrival or in advance through our concierge.</p>
                    </div>
                    <div className='dnscta_wrapper_buttons'>
                        <Link to="/reserve"><CustomButton text="BOOK A SUITE" variant="primary" /></Link>
                        <Link to="/contact"><CustomButton text="CONTACT CONCIERGE" variant="secondary" /></Link>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className='dnscta_wrapper'>
                <div className='dnscta_wrapper_label'>
                    <h1>{header}</h1>
                    <p>{description}</p>
                </div>
                <div className='dnscta_wrapper_buttons'>
                    <CustomButton text="BOOK A SUITE" variant="primary" />
                    <CustomButton text="CONTACT CONCIERGE" variant="secondary" />
                </div>
            </div>
        </>
    )
}

export default DnSCTA