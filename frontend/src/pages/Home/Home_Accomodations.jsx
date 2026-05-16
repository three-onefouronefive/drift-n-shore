import { Link } from 'react-router-dom';
import SuiteGrid from '../../components/SuiteGrid';
import '../../css/Accomodations.css';

function Home_Accomodations() {
    return (
        <>
            <div className="accomodations_main_wrapper">
                <div className="accomodations_subtitle anim-up">ACCOMODATIONS</div>
                <div className="accomodations_suites anim-up">
                    <h1>Our <span className='italics'>Suites</span></h1>
                    <Link to="/suites"><div className='accomodations_cta'>VIEW ALL SUITES →</div></Link>
                </div>
                <div className='anim-up'>
                    <SuiteGrid />
                </div>
            </div>
        </>
    )
}

export default Home_Accomodations