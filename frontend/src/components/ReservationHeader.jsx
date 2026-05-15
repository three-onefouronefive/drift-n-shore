import '../css/ReservationHeader.css'

function ReservationHeader({ title, question }) {
    return (
        <>
            <div className='reservation_header'>
                <p>{title}</p>
                <h1>{question}</h1>
            </div>
        </>
    )
}

export default ReservationHeader