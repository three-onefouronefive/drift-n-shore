import { useReservation } from '../context/ReservationContext';
import { getTotalNights } from '../utils/dateUtils';
import '../css/ReservationReceipt.css'

const TAX_RATE = 0.12;

function formatDate(date) {
    if (!date) return '—';
    return new Date(date).toLocaleDateString('en-PH', { month: 'long', day: 'numeric' });
}

function formatDayYear(date) {
    if (!date) return '—';
    return new Date(date).toLocaleDateString('en-PH', { weekday: 'long', year: 'numeric' });
}

function ReservationReceipt() {
    const { reservation, availableAddons } = useReservation();
    const { checkIn, checkOut, suite } = reservation;

    const nights = getTotalNights(checkIn, checkOut);
    const suitePrice = suite?.price ?? 0;
    const suiteTotal = suitePrice * nights;

    const selectedAddonsDetails = (reservation.addons || []).map(id => {
        const addon = availableAddons.find(a => a.id === id);
        if (!addon) return null;
        
        const itemTotal = addon.perNight && nights > 0 ? addon.price * nights : addon.price;
        return { ...addon, total: itemTotal };
    }).filter(Boolean);

    const addonsTotalAmount = selectedAddonsDetails.reduce((sum, item) => sum + item.total, 0);

    const subtotal = suiteTotal + addonsTotalAmount;
    const tax = subtotal * TAX_RATE;
    const total = subtotal + tax;

    const formatPHP = (amount) => `₱${amount.toLocaleString('en-PH', { minimumFractionDigits: 2 })}`;

    const animKey = `${checkIn}-${checkOut}-${suite?.name}`;

    return (
        <>
            <div className="reservation_main_receipt fade-up">
                <p>YOUR RESERVATION</p>
                <h1>Summary of <br />your <span className="italics">drift</span></h1>

                <div className="reservation_receipt_photo">
                    <div className="resrec_photo">
                        <p>{suite?.name ?? '—'}</p>
                    </div>
                    <div className="resrec_photo_sub">
                        <p>{suite?.details ?? '—'}</p> 
                    </div>
                </div>

                <div className="reservation_receipt_date_range_wrap">
                    <div className="reservation_receipt_date_range ci">
                        <label>CHECK IN</label>
                        <h1>{formatDate(checkIn)}</h1>
                        <p>{formatDayYear(checkIn)}</p>
                    </div>
                    <div className="reservation_receipt_date_range co">
                        <label>CHECK OUT</label>
                        <h1>{formatDate(checkOut)}</h1>
                        <p>{formatDayYear(checkOut)}</p>
                    </div>
                </div>

                <div className="reservation_receipt_total_nights">
                    <label>Total nights</label>
                    <p>{nights > 0 ? `${nights} night${nights > 1 ? 's' : ''}` : '—'}</p>
                </div>

                <hr/>

                <div className='reservation_receipt_price'>
                    <div className='reservation_receipt_price_item'>
                        <label>{suite.name ? `${suite.name} × ${nights} night${nights !== 1 ? 's' : ''}` : 'Suite'}</label>
                        <p>{suiteTotal > 0 ? formatPHP(suiteTotal) : '—'}</p>
                    </div>
                    
                    {selectedAddonsDetails.map(addon => (
                        <div className='reservation_receipt_price_item' key={addon.id}>
                            <label>
                                {addon.title} 
                                {addon.perNight && nights > 0 ? ` × ${nights} night${nights !== 1 ? 's' : ''}` : ''}
                            </label>
                            <p>{formatPHP(addon.total)}</p>
                        </div>
                    ))}

                    <div className='reservation_receipt_price_item'>
                        <label>Taxes & Fees (12%)</label>
                        <p>{tax > 0 ? formatPHP(tax) : '—'}</p>
                    </div>
                </div>

                <hr/>

                <div className='reservation_receipt_total'>
                    <label>TOTAL</label>
                    <div className='reservation_receipt_total_price_wrapper'>
                        <p>{total > 0 ? formatPHP(total) : '—'}</p>
                        <label>Inclusive of all taxes</label>
                    </div>
                </div>

                <div className='reservation_receipt_service_info'>
                    <p>🔁 Free cancellation up to 72 hours before check-in</p>
                    <p>⌚ Check-in 2PM · Check-out 12PM</p>
                    <p>🏖️ Private beach access included for all guests</p>
                    <p>🐾 No pets policy · Smoke-free resort</p>
                </div>

                <button className='reservation_receipt_complete_btn'>COMPLETE RESERVATION</button>
                <button className='reservation_receipt_save_btn'>SAVE & CONTINUE LATER</button>
                <label>🔒  Secured with 256-bit SSL encryption</label>
            </div>
        </>
    )
}

export default ReservationReceipt;