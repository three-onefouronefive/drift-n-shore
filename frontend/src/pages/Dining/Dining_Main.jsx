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
            description: "Named after the invisible pull that makes the ocean irresistible, The Undertow Bar is where the night takes over. Behind the bar, our mixologists treat each cocktail like a small tide -- building flavour in layers, with patience and a pinch of salt. Low lighting, wicker seating, the soft sound of the sea, and a rum list deep enough to dive into.",
            hours: [
                { label: "OPENS", time: "5 PM daily" },
                { label: "LAST CALL", time: "2 AM" },
                { label: "HAPPY HOUR", time: "5 — 7 PM" },
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
            description: "For proposals, anniversaries, corporate dinners, or simply an evening you want all to yourself. Our private dining room is a candlelit chamber for up to 12 guests, with a bespoke menu designed by the chef around you -- your preferences, your pace, your evening.",
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


            {activeVenue.id === 'shoreline-breakfast' ? (
                <section className="ds-morning-panel">
                    <div className="ds-morning-left">
                        <span className="ds-morning-service-tag">MORNING SERVICE</span>
                        <h2 className="ds-morning-title">
                            The best <br />
                            <i>alarm clock</i> <br />
                            is the ocean.
                        </h2>
                        <p className="ds-morning-desc">
                            Every morning at Drift & Shore starts at The Tide Table with a complimentary coastal breakfast for all guests. Think: freshly squeezed juices, local pastries, eggs cooked to order, and a cold brew that actually wakes you up. Dine as the shore lights up.
                        </p>

                        <div className="ds-morning-meta">
                            <div>
                                <span className="ds-morning-meta-label">BREAKFAST HOURS</span>
                                <p className="ds-morning-meta-val">7:00 — 10:30 AM</p>
                            </div>
                            <div>
                                <span className="ds-morning-meta-label">LOCATION</span>
                                <p className="ds-morning-meta-val">The Tide Table Terrace</p>
                            </div>
                        </div>

                        <div className="ds-morning-menu-grid">
                            <ul className="ds-morning-menu-column">
                                <li>Fresh tropical juices</li>
                                <li>Local pastry basket</li>
                                <li>Seasonal fruit platter</li>
                                <li>Smoked fish selection</li>
                            </ul>
                            <ul className="ds-morning-menu-column">
                                <li>Eggs any style</li>
                                <li>Cold brew & espresso</li>
                                <li>Yogurt & granola bar</li>
                                <li>Avocado toast station</li>
                            </ul>
                        </div>
                    </div>
                    <div className="ds-morning-right">
                        <div className="ds-morning-badge">
                            INCLUDED WITH EVERY STAY
                        </div>
                    </div>
                </section>
            ) : (
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
            )}

            {!['undertow', 'shoreline-breakfast'].includes(activeVenue.id) && (
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

                                {currentMenu?.[category.key]?.map((item, index) => (
                                    <div key={`${activeTab}-${category.key}-${index}`} className="ds-menu-item">
                                        <div className="ds-item-main">
                                            <span className='ds-item-main-name'>{item.name}</span>
                                            <span className='ds-item-main-price'>{item.price}</span>
                                        </div>
                                        <p className="ds-item-desc">{item.description}</p>

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
            )}

            {activeVenue.id === 'undertow' && (
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
            )}

            <section className='ds-reviews'>
                <div className='ds-reviews-one'>
                    <label>★★★★★</label>
                    <h1>"The freshest ceviche I've ever had. The chef came out to explain where every ingredient was caught. Dinner felt like theatre."</h1>
                    <p>— R. MENDOZA · OCEAN FRONT SUITE GUEST</p>
                </div>
                <div className='ds-reviews-one'>
                    <label>★★★★★</label>
                    <h1>"We did the private beach dinner for our anniversary. The candles, the waves, the food — honestly we forgot there was a resort behind us."</h1>
                    <p>— THE SANTOS FAMILY · SHORE BUNGALOW</p>
                </div>
                <div className='ds-reviews-one'>
                    <label>★★★★★</label>
                    <h1>"The Undertow Bar is deceptively dangerous. You go for one cocktail and suddenly you've watched the sun fully set and ordered a third."</h1>
                    <p>— M. DE LEON · TREETOP LOFT GUEST</p>
                </div>
            </section>

            {/* 4. FINAL CTA */}
            <section className="ds-final-cta">
                <div className='ds-cta-s1'>
                    <h2 className="ds-serif-h2">Come hungry. <br /><i>Leave speechless.</i></h2>
                    <p className="ds-labels">Reservations recommended for dinner. Walk-ins warmly welcomed when space allows.</p>
                </div>
                <div className="ds-cta-btns">
                    <CustomButton text="RESERVE A TABLE" variant="golden"/>
                    <CustomButton text="DOWNLOAD FULL MENU" variant="primary"/>
                </div>
            </section>

        </main>
    );
};

export default DiningContent;