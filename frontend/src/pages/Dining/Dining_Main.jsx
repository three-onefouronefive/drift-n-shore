import CustomButton from '../../components/CustomButton';
import '../../css/DiningContent.css';

const DiningContent = () => {
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
                            <CustomButton text="RESERVE A TABLE" variant="golden"/>
                            <CustomButton text="VIEW MENU" variant="transparent"/>
                        </div>
                    </div>

                    <div className="ds-hours-card">
                        <div className="ds-icon-plate">🍽️</div>
                        <p className="ds-label">DINNER HOURS</p>
                        <h2 className="ds-time">6—10 PM</h2>
                        <p className="ds-note">Daily · Walk-ins welcome</p>
                        <CustomButton text='BOOK A TABLE' variant="primary"/>
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
                        <p>72 covers · Alfresco</p>
                    </div>
                </div>
                <div className="ds-split-content ds-bg-cream">
                    <span className="ds-section-number">01</span>
                    <p className="ds-label">MAIN RESTAURANT</p>
                    <h2 className="ds-serif-h2">The Tide Table</h2>
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
                    </ul>
                    <button className="ds-btn-dark">RESERVE A TABLE</button>
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
                        <button className="active">STARTERS</button>
                        <button>MAINS</button>
                        <button>DESSERTS</button>
                    </div>
                </div>

                <div className="ds-menu-grid">
                    <div className="ds-menu-column">
                        <h3 className="ds-column-title">From the Land</h3>
                        <div className="ds-menu-item">
                            <div className="ds-item-main"><span>Heirloom Tomato Bruschetta</span><span>₱380</span></div>
                            <p className="ds-item-desc">Charred sourdough, aged balsamic, fresh basil oil, fleur de sel</p>
                        </div>
                        <div className="ds-menu-item">
                            <div className="ds-item-main"><span>Roasted Bone Marrow</span><span>₱580</span></div>
                            <p className="ds-item-desc">Parsley gremolata, capers, toasted sourdough, pickled shallot</p>
                        </div>
                    </div>

                    <div className="ds-menu-column">
                        <h3 className="ds-column-title">From the Sea</h3>
                        <div className="ds-menu-item">
                            <div className="ds-item-main"><span>Tuna Crudo</span><span>₱680</span></div>
                            <p className="ds-item-desc">Yuzu kosho, cucumber dashi, crispy shallot, radish, sesame oil</p>
                        </div>
                        <div className="ds-menu-item">
                            <div className="ds-item-main"><span>Seared Scallops</span><span>₱890</span></div>
                            <p className="ds-item-desc">Cauliflower purée, hazelnuts, brown butter, sea urchin foam</p>
                        </div>
                    </div>

                    <div className="ds-menu-column">
                        <h3 className="ds-column-title">For the Table</h3>
                        <div className="ds-menu-item">
                            <div className="ds-item-main"><span>Whole Grilled Lobster</span><span>₱2,800</span></div>
                            <p className="ds-item-desc">Lemon herb butter, charcoal oil, grilled brioche, sea salt</p>
                        </div>
                        <div className="ds-menu-item">
                            <div className="ds-item-main"><span>Seafood Tower</span><span>₱3,500</span></div>
                            <p className="ds-item-desc">Oysters, poached prawns, crab claws, clams, mignonette, aioli</p>
                        </div>
                    </div>
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