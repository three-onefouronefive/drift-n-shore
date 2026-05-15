import ReservationHeader from "../../components/ReservationHeader"
import DateSelector from "./DateSelector"
import '../../css/Reservation_Main.css'
import ReservationReceipt from "../../components/ReservationReceipt"
import ReservationMemberForm from "../../components/ReservationMemberForm"
import SuiteSelector from "./SuiteSelector"
import ReservationServiceSelector from "../../components/ReservationServiceSelector"
import ReservationInfoForm from "../../components/ReservationInfoForm"
import { useReservation } from "../../context/ReservationContext"

// Put Reservation_Main css

function Reservation_Main() {
    const { calculateTotal } = useReservation();
    const totalAmount = calculateTotal();
    const formatPHP = (amount) => {
        return `₱${amount.toLocaleString('en-PH', { minimumFractionDigits: 2 })}`;
    }

    return (
        <>
            <div className="reservation_main_wrapper">
                <div className="reservation_main_booking">
                    <div className="mb-10 fade-up">
                        <ReservationHeader title="STEP 1" question="When are you drifting in?" />
                    </div>

                    <DateSelector />

                    <div className="mb-10 fade-up spacing">
                        <ReservationHeader title="STEP 1 CONTINUED" question="Who's joining you?" />
                    </div>

                    <ReservationMemberForm />

                    <div className="mb-10 fade-up spacing">
                        <ReservationHeader title="STEP 2" question="Choose your suite" />
                    </div>

                    <SuiteSelector />

                    <div className="mb-10 fade-up spacing">
                        <ReservationHeader title="STEP 3" question="Elevate your stay" />
                    </div>

                    <ReservationServiceSelector />

                    <div className="mb-10 fade-up spacing">
                        <ReservationHeader title="STEP 4" question="Tell us about yourself" />
                    </div>

                    <ReservationInfoForm type="info"/>

                    <div className="mb-10 fade-up spacing">
                        <ReservationHeader title="STEP 5" question="Secure your escape" />
                    </div>

                    <ReservationInfoForm type=""/>

                    <button className="reservation_final_cta">CONFIRM RESERVATION — {totalAmount > 0 ? formatPHP(totalAmount) : '—'}</button>
                    <p>You will not be charged until your stay is confirmed. Free cancellation up to 72 hours before check-in.</p>
                </div>
                <ReservationReceipt />
            </div>
            <div className="payment_features">
                <div className="payment_features_item">🔒 Secure 256-bit SSL payment</div>
                <div className="payment_features_item">🔁 Free cancellations ⋅ 72 hrs</div>
                <div className="payment_features_item">🏆 Best rate guaranteed</div>
                <div className="payment_features_item">💬 24/7 concierge support</div>
                <div className="payment_features_item">🍳 Breakfast included for all suites</div>
            </div>
        </>
    )
}

export default Reservation_Main