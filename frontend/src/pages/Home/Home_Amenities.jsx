import '../../css/Amenities.css';
import { Link } from 'react-router-dom';

function Home_Amenities() {
    return (
        <>
            <div className='amenities_wrapper'>
                <div className='amenities_left-col'>
                    <p className='amenities_subtitle fade-left' id='test-fade'>EXPERIENCES</p>
                    <h1 className='amenities_header fade-left'>Play Hard. <br /> <span className='italics'>Rest Harder.</span></h1>
                    <p className='amenities_text fade-left'>From parasailing down to cocktails at dust, Drift & Shore packages the full coastal fantasy into one address. We've thought of everything so you can think of nothing.</p>
                    <Link to="/amenities"><p className='amenities_cta fade-left'>SEE ALL AMENITIES →</p></Link>
                </div>
                <div className='amenities_right-col'>
                    <div className='amenities_grid-item'>
                        <h1>🏊‍♂️</h1>
                        <p>POOL</p>
                    </div>
                    <div className='amenities_grid-item'>
                        <h1>🍁</h1>
                        <p>PARK</p>
                    </div>
                    <div className='amenities_grid-item'>
                        <h1>💪</h1>
                        <p>GYM</p>
                    </div>
                    <div className='amenities_grid-item'>
                        <h1>🍹</h1>
                        <p>BAR</p>
                    </div>
                    <div className='amenities_grid-item'>
                        <h1>🏖️</h1>
                        <p>BEACH</p>
                    </div>
                    <div className='amenities_grid-item'>
                        <h1>🛥️</h1>
                        <p>JET SKI</p>
                    </div>
                    <div className='amenities_grid-item'>
                        <h1>💦</h1>
                        <p>JET PACK</p>
                    </div>
                    <div className='amenities_grid-item'>
                        <h1>🍌</h1>
                        <p>BANANA BOAT</p>
                    </div>
                    <div className='amenities_grid-item'>
                        <h1>🪂</h1>
                        <p>PARASAILING</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home_Amenities