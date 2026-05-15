import '../css/AmenitiesHeader.css';

function AmenitiesHeader({ label, header, label_orientation }) {
    return (
        <>
            <div className='amenities_header_wrapper'>
                <label className={label_orientation === 'l' ? 'amh_left' : 'amh_right'}>{label}</label>
                <h1>{header}</h1>
            </div>
        </>
    )
}

export default AmenitiesHeader