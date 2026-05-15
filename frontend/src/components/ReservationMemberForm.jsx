import '../css/ReservationMemberForm.css';
import { useReservation } from '../context/ReservationContext'
import { useReducer } from 'react';

function ReservationMemberForm() {
    const { reservation, setReservation } = useReservation();

    const handleChange = (key, amount) => {
        setReservation((prev) => {
            if (key === 'adults' || key == 'children') {
                return {
                    ...prev,
                    guests: {
                        ...prev.guests,
                        [key]: Math.max(0, prev.guests[key] + amount)
                    }
                };
            } else {
                return {
                    ...prev,
                    [key]: Math.max(1, prev[key] + amount)
                };
            }

        });
    };

    return (
        <>
            <div className='reservation_member_form_ultimate_wrapper'>
                <div className="reservation_member_form_wrapper">
                    <div className="reservation_member_form_selector">
                        <label>ADULTS</label>
                        <div className="reservation_member_form_button_wrapper">
                            <button onClick={() => handleChange('adults', -1)}>-</button>
                            <p>{reservation.guests.adults}</p>
                            <button onClick={() => handleChange('adults', +1)}>+</button>
                        </div>
                    </div>
                    <div className="reservation_member_form_selector">
                        <label>CHILDREN</label>
                        <div className="reservation_member_form_button_wrapper">
                            <button onClick={() => handleChange('children', -1)}>-</button>
                            <p>{reservation.guests.children}</p>
                            <button onClick={() => handleChange('children', +1)}>+</button>
                        </div>
                    </div>
                    <div className="reservation_member_form_selector">
                        <label>ROOMS</label>
                        <div className="reservation_member_form_button_wrapper">
                            <button onClick={() => handleChange('rooms', -1)}>-</button>
                            <p>{reservation.rooms}</p>
                            <button onClick={() => handleChange('rooms', +1)}>+</button>
                        </div>
                    </div>
                </div>
                <div className='reservation_member_form_sq_wrapper'>
                    <input type="text" className='reservation_member_form_special_req'></input>
                    <div className='reservation_member_form_sq_wrapper_text'>
                        <label>SPECIAL REQUESTS</label>
                        <p>Early check-in, dietary requirements, celebration arrangements.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReservationMemberForm