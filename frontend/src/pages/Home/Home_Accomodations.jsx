import { Link, useNavigate } from 'react-router-dom';
import SuiteGrid from '../../components/SuiteGrid';
import '../../css/Accomodations.css';

function Home_Accomodations() {
    const navigate = useNavigate()

    return (
        <>
            <div className="accomodations_main_wrapper">
                <div className="accomodations_subtitle anim-up">ACCOMODATIONS</div>
                <div className="accomodations_suites anim-up">
                    <h1>Our <span className='italics'>Suites</span></h1>
                    <div className='accomodations_cta' onClick={() => navigate('/suites')}>VIEW ALL SUITES →</div>
                </div>
                <div className='anim-up'>
                    <SuiteGrid />
                </div>
            </div>
        </>
    )
}

export default Home_Accomodations