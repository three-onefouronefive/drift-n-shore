import DNSSymbol from '../assets/images/logo.png'
import '../css/Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <div className='contact_wrapper'>
                <div className='contact_layout'>
                    <div className='contact_company'>
                        <div className='contact_row_layout'>
                            <img src={DNSSymbol} alt="Drift and Shore Symbol"></img>
                            <h1>Drift & Shore</h1>
                        </div>
                        <p>A boutique coastal resort for those who understand the art of doing nothing — beautifully.</p>
                    </div>
                    <div className='contact_column'>
                        <h1>NAVIGATE</h1>
                        <Link to="/"><p>Home</p></Link>
                        <Link to="/suites"><p>Suites</p></Link>
                        <Link to="/amenities"><p>Amenities</p></Link>
                        <p>Dining</p>
                        <Link to="/contact"><p>Contact</p></Link>
                    </div>
                    <div className='contact_column'>
                        <h1>SUITES</h1>
                        <p>Ocean Front</p>
                        <p>Garden Villa</p>
                        <p>Treetop Loft</p>
                        <p>Penthouse</p>
                    </div>
                    <div className='contact_column'>
                        <h1>CONTACT</h1>
                        <p>hello@driftandshore.com</p>
                        <p>+63 (2) 8888 0000</p>
                        <p>Batangas Coast, PH</p>
                    </div>
                </div>
                <div className='footer_hr'>
                    <hr />
                </div>
                <div className='footer_legal'>
                    <p>© 2026 Drift & Shore. All rights reserved.</p>
                    <div className='footer_legal_legal '>
                        <p>Privacy</p>
                        <p>Terms</p>
                        <p>Sitemap</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer