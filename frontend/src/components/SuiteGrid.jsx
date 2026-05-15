import '../css/SuiteGrid.css'

function SuiteGrid() {
    return (
        <>
            <div className="accomodations_grid fade-up">
                <div className='accomodations_grid_item blue_gradient'>
                    <div className='suite-text'>
                        <h1>Ocean Front Suite</h1>
                        <p>From ₱18,000 / night</p>
                    </div>
                </div>
                <div className='accomodations_grid_item yellow_gradient fade-up'>
                    <div className='suite-text'>
                        <h1>Garden Villa</h1>
                        <p>From ₱12,500 / night</p>
                    </div>
                </div>
                <div className='accomodations_grid_item green_gradient fade-up'>
                    <div className='suite-text'>
                        <h1>Treetop Loft</h1>
                        <p>From ₱9,800 / night</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SuiteGrid