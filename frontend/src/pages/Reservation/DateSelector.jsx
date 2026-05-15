import { DateRangePicker } from 'react-date-range'
import { useReservation } from '../../context/ReservationContext'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import '../../css/DateRangePicker.css'
import '../../css/DateSelector.css'

function DateSelector() {
    const { reservation, setReservation } = useReservation()

    const handleSelect = (ranges) => {
        setReservation(prev => ({
            ...prev,
            checkIn: ranges.selection.startDate,
            checkOut: ranges.selection.endDate,
        }))
    }

    const selectionRange = {
        startDate: reservation.checkIn || new Date(),
        endDate: reservation.checkOut || new Date(),
        key: 'selection',
    }

    const calculateDuration = () => {
        if (reservation.checkIn && reservation.checkOut) {
            const diffTime = Math.abs(reservation.checkOut - reservation.checkIn)
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
            return diffDays
        }
        return 0
    }

    const duration = calculateDuration()

    return (
        <>
            <div className='date_selector_wrapper'>
                <div className='date_box_wrappers'>
                    <div className='date_box blue-type'>
                        <label>CHECK IN</label>
                        <div className='date_box_div'>
                            <h1>
                                {reservation.checkIn
                                    ? reservation.checkIn.toLocaleDateString('en-US', {
                                        month: 'short',
                                        day: 'numeric',
                                        year: 'numeric'
                                    })
                                    : 'Select Date'}
                            </h1>
                            <p>📅</p>
                        </div>
                        <p>{reservation.checkIn?.toLocaleDateString('en-US', {
                            weekday: 'long',
                        }) || 'Select Date'}</p>
                    </div>
                    <div className='date_box orange-type'>
                        <label>CHECK OUT</label>
                        <div className='date_box_div'>
                            <h1>
                                {reservation.checkOut
                                    ? reservation.checkOut.toLocaleDateString('en-US', {
                                        month: 'short',
                                        day: 'numeric',
                                        year: 'numeric'
                                    })
                                    : 'Select Date'}
                            </h1>
                            <p>📅</p>
                        </div>
                        <p>{reservation.checkOut?.toLocaleDateString('en-US', {
                            weekday: 'long',
                        }) || 'Select Date'}</p>
                    </div>
                </div>
                <div className='date_selector_border_wrapper'>
                    <DateRangePicker
                        ranges={[selectionRange]}
                        onChange={handleSelect}
                        minDate={new Date()}
                        months={1}
                        weekdayDisplayFormat='EEEEEE'
                        showMonthAndYearPickers={false}
                        staticRanges={[]}
                        inputRanges={[]}
                        showMonthArrow={true}
                        showDateDisplay={false}
                    />

                    {duration > 0 && (
                        <div className='duration_bar'>
                            <div className='duration_content'>
                                <span className='duration_label'>Duration of stay: </span>
                                <span className='duration_days'>
                                    {duration} {duration === 1 ? 'night' : 'nights'}
                                </span>
                            </div>
                            <div className='duration_progress_bar'>
                                <div
                                    className='duration_progress_fill'
                                    style={{
                                        width: `${Math.min((duration / 30) * 100, 100)}%`
                                    }}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default DateSelector