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

            {/* 2. DINING NAVIGATION */}
            <nav className="ds-sub-nav">
                <div className="ds-nav-item active">
                    <span className="ds-nav-icon">🌊</span>
                    <div><strong>The Tide Table</strong><p>MAIN RESTAURANT</p></div>
                </div>
                <div className="ds-nav-item">
                    <span className="ds-nav-icon">🍹</span>
                    <div><strong>The Undertow</strong><p>BAR & LOUNGE</p></div>
                </div>
                <div className="ds-nav-item">
                    <span className="ds-nav-icon">🌅</span>
                    <div><strong>Shoreline Breakfast</strong><p>MORNING SERVICE</p></div>
                </div>
                <div className="ds-nav-item">
                    <span className="ds-nav-icon">🕯️</span>
                    <div><strong>Private Dining</strong><p>BY RESERVATION</p></div>
                </div>
            </nav>

            {/* 3. SECTION 01: THE TIDE TABLE */}
            <section className="ds-split-section">
                <div className="ds-split-image ds-bg-green">
                    <div className="ds-capacity-badge">
                        <p className="ds-label">CAPACITY</p>
                        <p className='ds-labelbel'>72 covers · Alfresco</p>
                    </div>
                </div>
                <div className="ds-split-content ds-bg-cream">
                    <span className="ds-section-number">01</span>
                    <p className="ds-label">MAIN RESTAURANT</p>
                    <h2 className="ds-serif-h2">The <span className='italics'>Tide Table</span></h2>
                    <p className="ds-body-text">
                        Set at the resort's ocean edge with open-air terrace seating, The Tide Table is where the day's
                        catch becomes the evening's conversation. Our head chef sources exclusively from local
                        fishermen and coastal farmers.
                    </p>

                    <div className="ds-info-grid">
                        <div className="ds-info-item"><p className="ds-label">BREAKFAST</p><p>7 — 10:30 AM</p></div>
                        <div className="ds-info-item"><p className="ds-label">LUNCH</p><p>12 — 2:30 PM</p></div>
                        <div className="ds-info-item"><p className="ds-label">DINNER</p><p>6 — 10 PM</p></div>
                        <div className="ds-info-item"><p className="ds-label">DRESS</p><p>Smart Casual</p></div>
                    </div>

                    <ul className="ds-feature-list">
                        <li>+ Daily catch menu, sourced 6AM from local fishermen</li>
                        <li>+ Open-air terrace seating with sea views</li>
                        <li>+ Wood-fired grill and live charcoal station</li>
                        <li>+ Curated coastal wine and craft beverage list</li>
                        <li>+ Complimentary breakfast included for all suite guests</li>
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