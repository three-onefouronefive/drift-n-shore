import '../css/ReservationInfoForm.css'
import { useState } from 'react'

function ReservationInfoForm({ type }) {
    const [selectedMethod, setSelectedMethod] = useState();

    const methods = ['VISA', 'MASTERCARD', 'AMEX', 'GCash'];

    if (type === 'info') {
        return (
            <>
                <div className="reservation_info_form_grid_wrapper">
                    <div className="reservation_info_form_grid_wrapper_item">
                        <label>FIRST NAME</label>
                        <input type="text" placeholder="Juan" />
                    </div>
                    <div className="reservation_info_form_grid_wrapper_item">
                        <label>LAST NAME</label>
                        <input type="text" placeholder="dela Cruz" />
                    </div>
                    <div className="reservation_info_form_grid_wrapper_item">
                        <label>EMAIL ADDRESS</label>
                        <input type="text" placeholder="juan@email.com" />
                    </div>
                    <div className="reservation_info_form_grid_wrapper_item">
                        <label>PHONE NUMBER</label>
                        <input type="text" placeholder="+63 912 345 6789" />
                    </div>
                    <div className="reservation_info_form_grid_wrapper_item">
                        <label>NATIONALITY</label>
                        <input type="text" placeholder="Filipino" />
                    </div>
                    <div className="reservation_info_form_grid_wrapper_item">
                        <label>OCCASION</label>
                        <input type="text" placeholder="Leisure" />
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className='payment_grid_wrapper item-1'>
                <div className='payment_grid_wrapper_item'>
                    <label>CARDHOLDER NAME</label>
                    <input type="text" placeholder='Juan dela Cruz'></input>
                </div>
                <div className='payment_grid_wrapper_item item-2'>
                    <label>CARD NUMBER</label>
                    <input type="text" placeholder='⋅⋅⋅⋅ ⋅⋅⋅⋅ ⋅⋅⋅⋅ ⋅⋅⋅⋅'></input>
                </div>
                <div className='payment_grid_wrapper_wrapper'>
                    <div className='payment_grid_wrapper_item item-3'>
                        <label>EXPIRY DATE</label>
                        <input type="text" placeholder='MM / YY'></input>
                    </div>
                    <div className='payment_grid_wrapper_item item-4'>
                        <label>CVV</label>
                        <input type="text" placeholder='⋅⋅⋅'></input>
                    </div>
                </div>
            </div>
            <div className='payment_method_selection'>
                {methods.map((method) => (
                    <div
                        key={method}
                        className={`payment_method_selection_item ${selectedMethod === method ? 'selected-item' : ''}`}
                        onClick={() => setSelectedMethod(method)}
                    >
                        <label>{method}</label>
                    </div>
                ))}
                <p>🔒 256-bit SSL</p>
            </div>
        </>
    )
}

export default ReservationInfoForm