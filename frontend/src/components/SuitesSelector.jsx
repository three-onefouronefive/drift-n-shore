import { useEffect, useState, useRef } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import '../css/SuitesSelector.css';

function SuitesSelector() {
    // Master list of available filters
    const AVAILABLE_FILTERS = [
        { id: "ocean_view", label: "OCEAN VIEW" },
        { id: "garden_view", label: "GARDEN VIEW" },
        { id: "pool_access", label: "POOL ACCESS" },
        { id: "premium", label: "PREMIUM" }
    ];

    // Suites data structure using matching tag IDs
    const suites = [
        {
            id: "1",
            title: "SIGNATURE SUITE",
            header: "Ocean Front Suite",
            description: "Perched at the edge of the resort with an unobstructed panoramic sea view.",
            suite_info: { size: "85 sqm", bed: "King", capacity: "2 Guests", view: "Ocean" },
            tags: ["ocean_view", "premium"],
            features: ["PRIVATE PLUNGE POOL", "RAIN SHOWER", "BUTLER SERVICE", "OCEAN TERRACE", "MINI BAR"],
            price: "₱18,000"
        },
        {
            id: "2",
            title: "GARDEN SUITE",
            header: "Garden Villa",
            description: "Nestled within a curated botanical garden, this private villa offers seclusion and greenery in equal measure. A wraparound deck, outdoor soaking tub, and direct garden path to the beach complete the experience.",
            suite_info: { size: "70 sqm", bed: "Queen", capacity: "2-3 Guests", view: "Garden" },
            tags: ["garden_view", "pool_access"],
            features: ["OUTDOOR SOAKING TUB", "WRAPAROUND DECK", "GARDEN ACCESS", "HAMMOCK"],
            price: "₱12,500"
        },
    ];

    // --- STATE ---
    const [dateRange, setDateRange] = useState([
        { startDate: new Date(), endDate: new Date(), key: "selection" }
    ]);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [guestCnt, setGuestCnt] = useState({ adults: 2, kids: 0 });
    const [isGuestOpen, setIsGuestOpen] = useState(false);

    // Track a single active tag (null means no filter is applied)
    const [activeTag, setActiveTag] = useState(null);

    const guestRef = useRef(null);
    const calendarRef = useRef(null);

    // If no tag is active, return all IDs. Otherwise, filter by the single active tag.
    const filteredSuiteIds = suites
        .filter((suite) => !activeTag || suite.tags.includes(activeTag))
        .map((suite) => suite.id);

    // --- TOGGLE HANDLER ---
    const handleFilterToggle = (id) => {
        setActiveTag((prev) => (prev === id ? null : id));
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (guestRef.current && !guestRef.current.contains(event.target)) setIsGuestOpen(false);
            if (calendarRef.current && !calendarRef.current.contains(event.target)) setIsCalendarOpen(false);
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const formatDateStr = (date) => {
        if (!date) return "";
        return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    };

    return (
        <div className="booking-widget">

            {/* Inputs Header */}
            <div className="booking-widget__header">

                {/* Check In / Out */}
                <div ref={calendarRef} className="booking-widget__calendar-wrapper">
                    <div className="booking-widget__input-group">
                        <label className="booking-widget__label">Check In</label>
                        <input
                            type="text"
                            readOnly
                            className="booking-widget__input"
                            value={formatDateStr(dateRange[0].startDate)}
                            onClick={() => setIsCalendarOpen(true)}
                        />
                    </div>

                    <div className="booking-widget__input-group">
                        <label className="booking-widget__label">Check Out</label>
                        <input
                            type="text"
                            readOnly
                            className="booking-widget__input"
                            value={formatDateStr(dateRange[0].endDate)}
                            onClick={() => setIsCalendarOpen(true)}
                        />
                    </div>

                    {isCalendarOpen && (
                        <div className="booking-widget__calendar-dropdown">
                            <DateRange
                                editableDateInputs={true}
                                onChange={(item) => setDateRange([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={dateRange}
                                minDate={new Date()}
                            />
                        </div>
                    )}
                </div>

                {/* Guests Select */}
                <div ref={guestRef} className="booking-widget__guest-wrapper">
                    <label className="booking-widget__label">Guests</label>
                    <button
                        onClick={() => setIsGuestOpen(!isGuestOpen)}
                        className="booking-widget__guest-trigger"
                    >
                        {guestCnt.adults} Adults, {guestCnt.kids} Kids
                    </button>

                    {isGuestOpen && (
                        <div className="booking-widget__guest-dropdown">
                            <div className="booking-widget__guest-row">
                                <span className="booking-widget__guest-type">Adults</span>
                                <div className="booking-widget__counter">
                                    <button className="booking-widget__counter-btn" onClick={() => setGuestCnt(p => ({ ...p, adults: Math.max(1, p.adults - 1) }))}>-</button>
                                    <span className="booking-widget__counter-value">{guestCnt.adults}</span>
                                    <button className="booking-widget__counter-btn" onClick={() => setGuestCnt(p => ({ ...p, adults: p.adults + 1 }))}>+</button>
                                </div>
                            </div>

                            <div className="booking-widget__guest-row">
                                <span className="booking-widget__guest-type">Kids</span>
                                <div className="booking-widget__counter">
                                    <button className="booking-widget__counter-btn" onClick={() => setGuestCnt(p => ({ ...p, kids: Math.max(0, p.kids - 1) }))}>-</button>
                                    <span className="booking-widget__counter-value">{guestCnt.kids}</span>
                                    <button className="booking-widget__counter-btn" onClick={() => setGuestCnt(p => ({ ...p, kids: p.kids + 1 }))}>+</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Target IDs Active Tag Filter Buttons */}
            <div className="booking-widget__filters">
                <h4 className="booking-widget__section-title">Select View / Category:</h4>
                <div className="booking-widget__tag-container">
                    {AVAILABLE_FILTERS.map((filter) => {
                        const isSelected = activeTag === filter.id;
                        return (
                            <button
                                key={filter.id}
                                onClick={() => handleFilterToggle(filter.id)}
                                className={`booking-widget__tag-btn ${isSelected ? "booking-widget__tag-btn--active" : ""}`}
                            >
                                {filter.label}
                            </button>
                        );
                    })}
                </div>
            </div>

            <hr className="booking-widget__divider" />

            {/* Dynamic Key Output Display */}
            <div className="booking-widget__output">
                <h4 className="booking-widget__output-title">Allowed Suite IDs:</h4>
                <p className="booking-widget__output-display">
                    [ {filteredSuiteIds.join(", ")} ]
                </p>
            </div>
        </div>
    );
}

export default SuitesSelector;