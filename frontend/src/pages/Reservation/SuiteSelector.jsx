import '../../css/SuiteSelector.css';
import { useReservation } from '../../context/ReservationContext';

function SuiteSelector() {
    const { reservation, setReservation } = useReservation();

    const handleClick = (suite_info) => {
        setReservation((prev) => ({
            ...prev,
            suite: {
                name: suite_info.name,
                details: suite_info.details,
                price: suite_info.price
            }
        }));
    };

    const suites = [
        { id: 'ocean-front', name: 'Ocean Front Suite', details: '85 sqm · King · Ocean View', price: 18000 },
        { id: 'garden-villa', name: 'Garden Villa', details: '70 sqm · Queen · Garden View', price: 12500 },
        { id: 'treetop-loft', name: 'Treetop Loft', details: '50 sqm · King · Forest View', price: 9800 },
        { id: 'dusk-penthouse', name: 'Dusk Penthouse', details: '140 sqm · Super King · 360° View', price: 18000 },
        { id: 'shore-bungalow', name: 'Shore Bungalow', details: '95 sqm · 2 Beds · Beach Access', price: 22000 },
        { id: 'cove-room', name: 'Cove Room', details: '38 sqm · Double · Garden View', price: 7200 }
    ];

    return (
        <div className="suite_selector_grid_wrapper">
            {suites.map((item) => (
                <div 
                    key={item.id}
                    className={`suite_selector_grid_wrapper_item ${reservation.suite?.name === item.name ? 'active' : ''}`}
                    onClick={() => handleClick(item)}
                >
                    <div className='check'></div>
                    <div className="gradient_box"></div>
                    <label>{item.name}</label>
                    <p>{item.details}</p>
                    <div className="suite_selector_grid_wrapper_price">
                        <label>₱{item.price.toLocaleString()}</label>
                        <p>/ night</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SuiteSelector;