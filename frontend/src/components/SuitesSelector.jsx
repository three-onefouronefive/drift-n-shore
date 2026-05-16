import { useEffect, useState, useRef } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import CustomButton from '../components/CustomButton.jsx';

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
            description: "Perched at the edge of the resort with an unobstructed panoramic sea view. Floor-to-ceiling glass panels frame the horizon like a living painting. Includes a private terrace with plunge pool and outdoor daybed.",
            suite_info: { size: "85 sqm", bed: "King", capacity: "2 Guests", view: "Ocean" },
            tags: ["ocean_view", "premium", "pool_access"],
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
            features: ["FOREST BALCONY", "RAIN SHOWER", "TIMBER INTERIOR", "MOOD LIGHTING"],
            price: "₱9,800"
        },
        {
            id: "3",
            title: "ELEVATED SUITE",
            header: "Treetop Loft",
            description: "Elevated among the forest canopy, this loft-style suite offers a rare perspective -- where the treetops meet the sky. Exposed timber beams, lantern lighting, and a forest-facing balcony create a sanctuary above all.",
            suite_info: { size: "55 sqm", bed: "King Loft", capacity: "2 Guests", view: "Forest" },
            tags: ["garden_view"],
            features: ["OUTDOOR SOAKING TUB", "WRAPAROUND DECK", "GARDEN ACCESS", "HAMMOCK"],
            price: "₱12,500"
        },
        {
            id: "4",
            title: "PREMIUM SUITE",
            header: "Dusk Penthouse",
            description: "The crown of Drift & Shore. A full-floor penthouse suite with 360° views, a rooftop infinity pool, private dining area, and a dedicated in-suite concierge. Designed for those who refuse to settle for anything less.",
            suite_info: { size: "140 sqm", bed: "Super King", capacity: "2-4 Guests", view: "360° Panorama" },
            tags: ["pool_access", "premium", "ocean_view"],
            features: ["ROOFTOP INFINITY POOL", "PRIVATE CONCIERGE", "IN-SUITE DINING", "JACUZZI", "WINE CELLAR ACCESS"],
            price: "₱38,000"
        },
        {
            id: "5",
            title: "FAMILY SUITE",
            header: "Shore Bungalow",
            description: "Spacious, beachside, and built for making memories. The Shore Bungalow features two bedrooms, a shared living area, a private beach path, and a shaded patio with lounge seating for the whole family.",
            suite_info: { size: "95 sqm", bed: "2 Bedrooms", capacity: "Up to 5 Guests", view: "Beach Access" },
            tags: ["ocean_view"],
            features: ["PRIVATE BEACH PATH", "SHADED PATIO", "KIDS WELCOME", "LIVING AREA"],
            price: "₱22,000"
        },
        {
            id: "6",
            title: "CLASSIC SUITE",
            header: "Cove Room",
            description: "Everything you need, nothing you don't. The Cove Room is the entry into the Drift & Shore experience -- still thoughtfully designed, still beautifully appointed, and still close enough to the ocean to hear the waves at night.",
            suite_info: { size: "38 sqm", bed: "Double", capacity: "2 Guests", view: "Coastal Garden" },
            tags: ["garden_view", "pool_access"],
            features: ["GARDEN VIEW", "WALK-IN SHOWER", "POOL ACCESS", "BREAKFAST INCLUDED"],
            price: "₱7,200"
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

    const start = dateRange[0].startDate;
    const end = dateRange[0].endDate;

    const totalNights = (() => {
        if (!start || !end) return 0;

        const diffInMs = Math.abs(end - start);

        return Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
    })();

    const getFullDayName = (date) => {
        if (!date) return "";

        return date.toLocaleDateString('en-US', { weekday: 'long' });
    };

    return (
        <div className="booking-widget-god">
            <div className="booking-widget">

                {/* Inputs Header */}
                <div className="booking-widget__header">

                    {/* Check In / Out */}
                    <div ref={calendarRef} className="booking-widget__calendar-wrapper">
                        <div className="booking-widget__input-group booking-widget__field">
                            <label className="booking-widget__label">Check In</label>
                            <input
                                type="text"
                                readOnly
                                className="booking-widget__input"
                                value={formatDateStr(dateRange[0].startDate)}
                                onClick={() => setIsCalendarOpen(true)}
                            />
                            <p>{`${getFullDayName(dateRange[0].startDate)}`}</p>
                        </div>

                        <div className="booking-widget__input-group booking-widget__field">
                            <label className="booking-widget__label">Check Out</label>
                            <input
                                type="text"
                                readOnly
                                className="booking-widget__input"
                                value={formatDateStr(dateRange[0].endDate)}
                                onClick={() => setIsCalendarOpen(true)}
                            />
                            <p>{`${getFullDayName(dateRange[0].endDate)} ⋅ ${totalNights} nights`}</p>
                        </div>

                        {isCalendarOpen && (
                            <div className="booking-widget__calendar-dropdown">
                                <DateRange
                                    editableDateInputs={true}
                                    showDateDisplay={false}
                                    onChange={(item) => setDateRange([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={dateRange}
                                    minDate={new Date()}
                                />
                            </div>
                        )}
                    </div>

                    {/* Guests Select */}
                    <div ref={guestRef} className="booking-widget__guest-wrapper booking-widget__field">
                        <label className="booking-widget__label">Guests</label>
                        <button
                            onClick={() => setIsGuestOpen(!isGuestOpen)}
                            className="booking-widget__guest-trigger"
                        >
                            {guestCnt.adults} {guestCnt.adults > 1 ? "Adults" : "Adult"}
                        </button>
                        <p>{guestCnt.kids} children</p>

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
                    <h4 className="booking-widget__section-title">FILTER BY</h4>
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

                {/* Dynamic Key Output Display */}
                {/* --- Suites Inventory Grid --- */}
                <div className="booking-widget__suites-list">
                    {suites
                        .filter((suite) => !activeTag || suite.tags.includes(activeTag))
                        .map((suite, index) => {
                            const isEvenRow = index % 2 === 0;

                            return (
                                <div
                                    key={suite.id}
                                    className={`booking-widget__suite-card ${!isEvenRow ? "booking-widget__suite-card--reverse" : ""}`}
                                >
                                    {/* Media Section */}
                                    <div className="booking-widget__suite-media">
                                        {/* Replace source path with your actual image state or public folder string */}
                                        <img
                                            src={`/images/suite-${suite.id}.jpg`}
                                            alt={suite.title}
                                            className="booking-widget__suite-image"
                                        />
                                    </div>

                                    {/* Details Section */}
                                    <div className="booking-widget__suite-details">
                                        <span className="booking-widget__suite-meta-title">{suite.title}</span>
                                        <h3 className="booking-widget__suite-name">{suite.header}</h3>
                                        <p className="booking-widget__suite-description">{suite.description}</p>

                                        {/* Spec Sheet Strip */}
                                        <div className="booking-widget__suite-specs">
                                            <div className="booking-widget__suites-specs-text">
                                                <label>📐</label>
                                                <p>SIZE</p>
                                                <span>{suite.suite_info.size}</span>
                                            </div>
                                            <div className="booking-widget__suites-specs-text">
                                                <label>🛏️</label>
                                                <p>BED</p>
                                                <span>{suite.suite_info.bed}</span>
                                            </div>
                                            <div className="booking-widget__suites-specs-text">
                                                <label>👥</label>
                                                <p>CAPACITY</p>
                                                <span>{suite.suite_info.capacity}</span>
                                            </div>
                                            <div className="booking-widget__suites-specs-text">
                                                <label>🖼️</label>
                                                <p>VIEW</p>
                                                <span>{suite.suite_info.view}</span>
                                            </div>
                                        </div>

                                        {/* Features Tags */}
                                        <div className="booking-widget__suite-features">
                                            {suite.features.map((feature, fIdx) => (
                                                <span key={fIdx} className="booking-widget__suite-feature-tag">
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Price and Call to Action */}
                                        <div className="booking-widget__suite-footer">
                                            <div className="booking-widget__suite-price-container">
                                                <span className="booking-widget__suite-price-label">STARTING FROM</span>
                                                <span className="booking-widget__suite-price-value">{suite.price} <span className="booking-widget__suite-price-value-tackon">/ night</span></span>
                                            </div>
                                            <div className="booking-widget_buttons">
                                                <CustomButton text="DETAILS" variant="tertiary" />
                                                <CustomButton text="BOOK SUITE" variant="secondary" />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}

export default SuitesSelector;