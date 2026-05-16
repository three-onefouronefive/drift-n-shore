import beachImage from '../../assets/images/stormy_beach.webp';
import CustomButton from '../../components/CustomButton';
import '../../css/Home.css';
import { Link } from 'react-router-dom';


function Home_Hero() {
    return (
        <div className="hero-wrapper">
            <div
                className="hero-blur-layer"
                style={{ backgroundImage: `url(${beachImage})` }}
            ></div>

            <div className="hero-content">
                <p className='upper-subtitle first-fade'>WHERE THE SEA MEETS STILLNESS</p>
                <h1 className='home_heading first-fade'>Let the <span className='italic'>tide</span><br /> slow you down.</h1>
                <p className='text-subtitle first-fade'>A sanctuary carved from the shoreline and silence. Drift & Shore invites you to unplug, unwind, and float somewhere between luxury and the horizon.</p>
                <div className='hero-content-buttons second-fade'>
                    <Link to="/reserve"><CustomButton text="BOOK YOUR STAY" variant="primary" /></Link>
                    <Link to="/suites"><CustomButton text="EXPLORE SUITES" variant="primary" /></Link>
                </div>
            </div>

            <div className='scroll-graphic third-fade'>
                <p className='jost-font'>SCROLL</p>
                <span>——————</span>
            </div>
        </div>
    );
}

export default Home_Hero