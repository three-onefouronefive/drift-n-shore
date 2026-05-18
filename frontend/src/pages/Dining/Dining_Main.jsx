import CustomButton from '../../components/CustomButton';
import '../../css/DiningContent.css';
import { Link, useNavigate } from 'react-router-dom';
import { menuData } from './DiningMenuData';
import { useState } from 'react';

const DiningContent = () => {
    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState('starters');
    const currentMenu = menuData[activeTab];

    const menuCategories = [
        { key: 'fromTheLand', title: 'From the Land' },
        { key: 'fromTheSea', title: 'From the Sea' },
        { key: 'forTheTable', title: 'For the Table' }
    ];
    const diningVenues = [
        {
            id: "tide-table",
            num: "01",
            icon: "🌊",
            titleName: "The ",
            titleItalic: "Tide Table",
            label: "MAIN RESTAURANT",
            tagline: "MAIN RESTAURANT",
            capacity: "72 covers · Alfresco",
            bgClass: "ds-bg-green",
            description: "Set at the resort's ocean edge with open-air terrace seating, The Tide Table is where the day's catch becomes the evening's conversation. Our head chef sources exclusively from local fishermen and coastal farmers.",
            hours: [
                { label: "BREAKFAST", time: "7 — 10:30 AM" },
                { label: "LUNCH", time: "12 — 2:30 PM" },
                { label: "DINNER", time: "6 — 10 PM" },
                { label: "DRESS", time: "Smart Casual" }
            ],
            features: [
                "Daily catch menu, sourced 6AM from local fishermen",
                "Open-air terrace seating with sea views",
                "Wood-fired grill and live charcoal station",
                "Curated coastal wine and craft beverage list",
                "Complimentary breakfast included for all suite guests"
            ]
        },
        {
            id: "undertow",
            num: "02",
            icon: "🍹",
            titleName: "The ",
            titleItalic: "Undertow",
            label: "BAR & LOUNGE",
            tagline: "BAR & LOUNGE",
            capacity: "45 covers · Indoor & Lounge",
            bgClass: "ds-bg-navy", 
            description: "A subterranean-inspired cocktail sanctuary. Sink into velvet lounge chairs while mixologists craft artisanal elixirs mixed with locally foraging botanicals, house infusions, and spirits.",
            hours: [
                { label: "HAPPY HOUR", time: "4 — 6 PM" },
                { label: "NIGHTLY", time: "5 PM — 1 AM" },
                { label: "BITES", time: "5 — 11 PM" },
                { label: "DRESS", time: "Resort Chic" }
            ],
            features: [
                "Signature coastal cocktails with native flora",
                "Curated small-plate tapas and raw bar menu",
                "Live acoustic and ambient vinyl sets on weekends",
                "Extensive rare rum and premium tequila collection",
                "Intimate low-lit ocean view alcoves"
            ]
        },
        {
            id: "shoreline-breakfast",
            num: "03",
            icon: "🌅",
            titleName: "Shoreline ",
            titleItalic: "Breakfast",
            label: "MORNING SERVICE",
            tagline: "MORNING SERVICE",
            capacity: "60 covers · Beachfront",
            bgClass: "ds-bg-sand",
            description: "Greet the morning with your toes literal inches from the tide. Serving artisanal breakfast platters, cold-pressed tropical juices, and premium local single-origin coffees under early rays.",
            hours: [
                { label: "DAILY", time: "6 — 11 AM" },
                { label: "COFFEE", time: "6 AM — 2 PM" },
                { label: "BUFFET", time: "7 — 10 AM" },
                { label: "DRESS", label: "Casual / Swimwear Cover" }
            ],
            features: [
                "Fresh bakery baskets delivered to your table",
                "Live egg, omelet, and local pastry stations",
                "Cold-pressed wellness shots and fresh coconuts",
                "Direct premium beach layout access",
                "À la carte local Filipino breakfast variations"
            ]
        },
        {
            id: "private-dining",
            num: "04",
            icon: "🕯️",
            titleName: "Private ",
            titleItalic: "Dining",
            label: "BY RESERVATION",
            tagline: "BY RESERVATION",
            capacity: "2 to 12 guests · Exclusive",
            bgClass: "ds-bg-dark-wood",
            description: "An ultra-exclusive setup structured directly on our sunset jetty or inside a hidden cliffside cove. Experience a completely customized tasting menu executed by a dedicated personal chef.",
            hours: [
                { label: "SUNSET", time: "5:30 — 8 PM" },
                { label: "LATE LUNCH", time: "1 — 3:30 PM" },
                { label: "MOONLIT", time: "8:30 — 11 PM" },
                { label: "NOTICE", time: "24h Advance" }
            ],
            features: [
                "100% bespoke tailor-made multi-course menu options",
                "Dedicated personal sommelier and serving butler",
                "Private solo musician accompaniment upon request",
                "Customized floral designs and ambient lantern lighting",
                "Exclusive single-party occupancy security"
            ]
        }
    ];
    const [activeVenue, setActiveVenue] = useState(diningVenues[0]);

    return (
        <main className="ds-dining-container">

            {/* 1. HERO SECTION */}
            <section className="ds-hero">
                <div className="ds-hero-inner">
                    <div className="ds-hero-text">
                        <span className="ds-label">———— DINING AT DRIFT & SHORE</span>
                        <h1 className="ds-serif-title">Where the sea <br /><i>seasons everything.</i></h1>
                        <p className="ds-description">
                            Three dining experiences under one roof — from alfresco feasts at the ocean's edge
                            to late-night cocktails that taste like the sea breeze feels. We cook what the tide brings in.
                        </p>
                        <div className="ds-hero-actions">
                            <div onClick={() => navigate('/reserve')}><CustomButton text="RESERVE A TABLE" variant="golden" /></div>
                            <CustomButton text="VIEW MENU" variant="primary" />
                        </div>
                    </div>

                    <div className="ds-hours-card">
                        <div className="ds-icon-plate">🍽️</div>
                        <p className="ds-label">DINNER HOURS</p>
                        <h2 className="ds-time">6-10 PM</h2>
                        <p className="ds-note">Daily · Walk-ins welcome</p>
                        <div onClick={() => navigate('/reserve')}><CustomButton text="BOOK A TABLE" variant="golden" /></div>
                    </div>
                </div>
            </section>

            {/* 2. DINING NAVIGATION (DYNAMIC) */}
            <nav className="ds-sub-nav">
                {diningVenues.map((venue) => (
                    <div 
                        key={venue.id} 
                        className={`ds-nav-item ${activeVenue.id === venue.id ? 'active' : ''}`}
                        onClick={() => setActiveVenue(venue)}
                        style={{ cursor: 'pointer' }}
                    >
                        <span className="ds-nav-icon">{venue.icon}</span>
                        <div>
                            <strong>{venue.titleName}{venue.titleItalic}</strong>
                            <p>{venue.tagline}</p>
                        </div>
                    </div>
                ))}
            </nav>

            {/* 3. SECTION 01: SPLIT VIEW (DYNAMIC) */}
            <section className="ds-split-section">
                <div className={`ds-split-image ${activeVenue.bgClass}`}>
                    <div className="ds-capacity-badge">
                        <p className="ds-label">CAPACITY</p>
                        <p className="ds-label">{activeVenue.capacity}</p>
                    </div>
                </div>
                <div className="ds-split-content ds-bg-cream">
                    <span className="ds-section-number">{activeVenue.num}</span>
                    <p className="ds-label">{activeVenue.label}</p>
                    <h2 className="ds-serif-h2">
                        {activeVenue.titleName}
                        <span className="italics">{activeVenue.titleItalic}</span>
                    </h2>
                    <p className="ds-body-text">{activeVenue.description}</p>

                    <div className="ds-info-grid">
                        {activeVenue.hours.map((hourItem, idx) => (
                            <div key={idx} className="ds-info-item">
                                <p className="ds-label">{hourItem.label}</p>
                                <p>{hourItem.time}</p>
                            </div>
                        ))}
                    </div>

                    <ul className="ds-feature-list">
                        {activeVenue.features.map((feature, idx) => (
                            <li key={idx}>+ {feature}</li>
                        ))}
                    </ul>
                    <CustomButton text="RESERVE A TABLE" variant="secondary" />
                </div>
            </section>

            {/* 4. MENU SELECTION */}
            <section className="ds-menu-block">
                <div className="ds-menu-header">
                    <div>
                        <p className="ds-label">SAMPLE MENU</p>
                        <h2 className="ds-serif-h2">Tonight's <i>Selection</i></h2>
                    </div>
                    <div className="ds-tab-group">
                        <button
                            className={activeTab === 'starters' ? 'active' : ''}
                            onClick={() => setActiveTab('starters')}
                        >
                            STARTERS
                        </button>
                        <button
                            className={activeTab === 'mains' ? 'active' : ''}
                            onClick={() => setActiveTab('mains')}
                        >
                            MAINS
                        </button>
                        <button
                            className={activeTab === 'desserts' ? 'active' : ''}
                            onClick={() => setActiveTab('desserts')}
                        >
                            DESSERTS
                        </button>
                    </div>
                </div>

                <div className="ds-menu-grid">
                    {menuCategories.map((category) => (
                        <div key={category.key} className="ds-menu-column">
                            <h3 className="ds-column-title italics">{category.title}</h3>

                            {/* Safeguard with optional chaining in case data structure changes */}
                            {currentMenu?.[category.key]?.map((item, index) => (
                                <div key={`${activeTab}-${category.key}-${index}`} className="ds-menu-item">
                                    <div className="ds-item-main">
                                        <span className='ds-item-main-name'>{item.name}</span>
                                        <span className='ds-item-main-price'>{item.price}</span>
                                    </div>
                                    <p className="ds-item-desc">{item.description}</p>

                                    {/* Render single label cleanly if array contains tags */}
                                    {item.tags && item.tags.length > 0 && (
                                        <div className="ds-item-tags">
                                            {item.tags.map((tag, tagIndex) => (
                                                <label key={tagIndex} className='ds-tag'>{tag}</label>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. SIGNATURE POURS (COCKTAILS) */}
            <section className="ds-pours-section">
                <div className="ds-pours-header">
                    <h2 className="ds-serif-h2">Signature <i>Pours</i></h2>
                    <p className="ds-pours-desc">Every cocktail on our list is built around the coast — using sea salt, local citrus, and aged rums.</p>
                </div>
                <div className="ds-pours-grid">
                    <div className="ds-pour-card" style={{ background: '#8ba7a5' }}>
                        <div className="ds-glass-icon">🍸</div>
                        <h4>The Drift</h4>
                        <p className="ds-label">GIN BASE</p>
                        <p className="ds-pour-price">₱380</p>
                    </div>
                    <div className="ds-pour-card" style={{ background: '#c5a044' }}>
                        <div className="ds-glass-icon">🥃</div>
                        <h4>Amber Shore</h4>
                        <p className="ds-label">RUM BASE</p>
                        <p className="ds-pour-price">₱420</p>
                    </div>
                    <div className="ds-pour-card" style={{ background: '#b97754' }}>
                        <div className="ds-glass-icon">🍹</div>
                        <h4>Low Tide</h4>
                        <p className="ds-label">MEZCAL BASE</p>
                        <p className="ds-pour-price">₱450</p>
                    </div>
                    <div className="ds-pour-card" style={{ background: '#5b7a4d' }}>
                        <div className="ds-glass-icon">🍸</div>
                        <h4>Green Horizon</h4>
                        <p className="ds-label">VODKA BASE</p>
                        <p className="ds-pour-price">₱350</p>
                    </div>
                </div>
            </section>

            {/* 6. FINAL CTA */}
            <section className="ds-final-cta">
                <h2 className="ds-serif-h2">Come hungry. <br /><i>Leave speechless.</i></h2>
                <p className="ds-label">Reservations recommended for dinner. Walk-ins warmly welcomed when space allows.</p>
                <div className="ds-cta-btns">
                    <button className="ds-btn-gold">RESERVE A TABLE</button>
                    <button className="ds-btn-outline-dark">DOWNLOAD FULL MENU</button>
                </div>
            </section>

        </main>
    );
};

export default DiningContent;