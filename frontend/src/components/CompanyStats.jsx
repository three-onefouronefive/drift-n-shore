import '../css/CompanyStats.css';

function CompanyStats() {
    return (
        <>
            <div className="company-stats-wrapper">
                <div className="part">
                    <div className='comstats_text fade-left'>
                        <h1>24</h1>
                        <p>EXCLUSIVE SUITES</p>
                    </div>
                </div>
                <div className="part">
                    <div className='comstats_text fade-left'>
                        <h1>9</h1>
                        <p>AMENITY EXPERIENCES</p>
                    </div>
                </div>
                <div className="part">
                    <div className='comstats_text fade-right'>
                        <h1>3</h1>
                        <p>PRIVATE BEACH COVES</p>
                    </div>
                </div>
                <div className="part">
                    <div className='comstats_text fade-right'>
                        <h1>∞</h1>
                        <p>REASONS TO STAY</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompanyStats