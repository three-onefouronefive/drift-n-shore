import '../css/ReservationServiceSelector.css';
import { useReservation } from '../context/ReservationContext';

function ReservationServiceSelector() {
    const { reservation, setReservation, availableAddons } = useReservation();

    const selectedIds = reservation.addons || [];

    const toggleService = (id) => {
        const updatedAddons = selectedIds.includes(id)
            ? selectedIds.filter(itemId => itemId !== id)
            : [...selectedIds, id];

        setReservation({
            ...reservation,
            addons: updatedAddons
        });
    };

    const Checkbox = ({ isChecked }) => (
        <div className={`check_box ${isChecked ? 'checked' : ''}`}>
            {isChecked && (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            )}
        </div>
    );
    
    const formatPHP = (amount) => `₱${amount.toLocaleString('en-PH', { minimumFractionDigits: 0 })}`;

    return (
        <div className='reservation_service_selector_grid_wrapper'>
            {availableAddons.map((addon) => (
                <div 
                    key={addon.id} 
                    className='reservation_service_selector_grid_item' 
                    onClick={() => toggleService(addon.id)}
                >
                    <Checkbox isChecked={selectedIds.includes(addon.id)} />
                    <div className='rss_grid_item_wrapper'>
                        <label>{addon.icon}</label>
                        <div className='rss_griditem_label'>
                            <label>{addon.title}</label>
                            <p>{addon.desc}</p>
                        </div>
                    </div>
                    <p>{formatPHP(addon.price)}</p>
                </div>
            ))}
        </div>
    );
}

export default ReservationServiceSelector;