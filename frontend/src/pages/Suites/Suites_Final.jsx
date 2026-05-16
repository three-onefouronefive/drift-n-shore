import '../../css/Suites_Final.css';

function Suites_Final() {
    return (
        <>
            <div className='suites-final__wrapper'>
                {/* Free Cancellation */}
                <div className='suites-final__item'>
                    <label>🔄</label>
                    <div className='suites-final__text'>
                        <label>FREE CANCELLATION</label>
                        <p>Cancel up to 72 hours before check-in with no charge. Because plans change — we get it.</p>
                    </div>
                </div>

                {/* Flexible Check-In */}
                <div className='suites-final__item'>
                    <label>🕐</label>
                    <div className='suites-final__text'>
                        <label>FLEXIBLE CHECK-IN</label>
                        <p>Check in from 2PM. Early arrivals accommodated when available — just let us know.</p>
                    </div>
                </div>

                {/* Breakfast Included */}
                <div className='suites-final__item'>
                    <label>🍳</label>
                    <div className='suites-final__text'>
                        <label>BREAKFAST INCLUDED</label>
                        <p>All suites include a daily coastal breakfast served at The Tide Table restaurant.</p>
                    </div>
                </div>

                {/* Beach Access */}
                <div className='suites-final__item'>
                    <label>🏖️</label>
                    <div className='suites-final__text'>
                        <label>BEACH ACCESS</label>
                        <p>All guests enjoy exclusive access to our three private beach coves, 24 hours a day.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Suites_Final;
