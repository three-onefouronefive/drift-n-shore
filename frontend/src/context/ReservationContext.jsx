import { createContext, useContext, useState } from "react";
import { getTotalNights } from "../utils/dateUtils";

const ReservationContext = createContext(null);

export function ReservationProvider({ children }) {
    const calculateTotal = () => {
        const nights = getTotalNights(reservation.checkIn, reservation.checkOut);
        const suitePrice = reservation.suite?.price ?? 0;
        const suiteTotal = suitePrice * nights;

        const addonsTotal = (reservation.addons || []).reduce((sum, id) => {
            const addon = availableAddons.find(a => a.id === id);
            if (!addon) return sum;
            return sum + (addon.perNight ? addon.price * nights : addon.price);
        }, 0);

        const subtotal = suiteTotal + addonsTotal;
        const finalTotal = subtotal + (subtotal * 0.12);

        return finalTotal;
    };

    const availableAddons = [
        {
            id: 'daily-breakfast',
            title: 'Daily Breakfast',
            desc: 'Full coastal spread for 2',
            icon: '🍳',
            price: 850,
            perNight: true
        },
        {
            id: 'airport-transfer',
            title: 'Airport Transfer',
            desc: 'Private roundtrip',
            icon: '🚗',
            price: 2500
        },
        {
            id: 'couples-spa-massage',
            title: 'Couples Spa Massage',
            desc: '90-min shore massage',
            icon: '💆‍♂️',
            price: 3200
        },
        {
            id: 'water-sports-bundle',
            title: 'Water Sports Bundle',
            desc: 'Jet ski + parasailing',
            icon: '🚤',
            price: 4500
        },
        {
            id: 'private-dining-night',
            title: 'Private Dining Night',
            desc: 'Candelit beachside dinner',
            icon: '🍽️',
            price: 5800
        },
        {
            id: 'suite-florals',
            title: 'Suite Florals',
            desc: 'Tropical bouquet',
            icon: '🌸',
            price: 1800
        }
    ];

    const [reservation, setReservation] = useState({
        checkIn: null,
        checkOut: null,
        dateRange: null,
        guests: {
            adults: 0,
            children: 0,
        },
        rooms: 1,
        suite: {
            name: null,
            description: null,
            price: null,
        },
        addons: [],
    });

    return (
        // Pass availableAddons to the provider value
        <ReservationContext.Provider value={{ reservation, setReservation, availableAddons, calculateTotal }}>
            {children}
        </ReservationContext.Provider>
    );
}

export function useReservation() {
    return useContext(ReservationContext);
}