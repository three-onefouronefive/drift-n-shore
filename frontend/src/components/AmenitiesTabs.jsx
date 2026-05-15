import { useState } from 'react';
import '../css/AmenitiesTabs.css';
import CustomButton from './CustomButton';

function AmenitiesTabs() {
    const [activeTab, setActiveTab] = useState(0);
    const [switching, setSwitching] = useState(false);

    const categories = ["ALL", "WATER SPORTS", "WELLNESS", "NATURE", "DINING & BAR"];

    const tab_content = [
        {
            id: 1,
            heading: "The Infinity Pool",
            description: "Stretching the full length of the resort's western edge, our infinity pool dissolves into the horizon at sunset. Whether you're doing laps at dawn or floating lazily with a cocktail in hand, this is the beating heart of Drift & Shore.", info: {
                hours: "6AM — 10PM",
                length: "45 meters",
                depth: "1.2m — 1.8m",
            }
        },
        {
            id: 2,
            heading: "Lorem Ipsum Dolor",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper sit amet felis a fermentum. Duis blandit sollicitudin erat at condimentum.", info: {
                Lorem: "6AM — 10PM",
                Ipsum: "45 meters",
                Dolor: "1.2m — 1.8m",
            }
        },
        {
            id: 3,
            heading: "Curabitur Ullamcorper Sit",
            description: "Duis blandit sollicitudin erat at condimentum. Praesent dictum lacinia tellus. Donec fermentum tortor non risus commodo aliquet.",
            info: {
                Lorem: "6AM — 9PM",
                Ipsum: "60 meters",
                Dolor: "1.2m — 1.8m",
            }
        },
        {
            id: 4,
            heading: "Nunc Blandit Justo",
            description: "Nunc blandit justo tortor, ac varius metus faucibus et. Quisque libero enim, interdum in justo sed, porta ultricies enim. Nulla iaculis tellus at efficitur euismod.",
            info: {
                Lorem: "6AM — 10PM",
                Ipsum: "45 meters",
                Dolor: "1.2m — 1.8m",
            }
        },
        {
            id: 5,
            heading: "Etiam Rhoncus Sapien",
            description: "Phasellus at eleifend velit, sed mattis purus. Sed auctor felis vitae mauris dapibus cursus. Sed nec maximus lectus. Etiam rhoncus sapien ut cursus elementum.",
            info: {
                Lorem: "6AM — 10PM",
                Ipsum: "45 meters",
                Dolor: "1.2m — 1.8m",
            }
        },
    ];

    const currentTab = tab_content[activeTab];

    const handleSwitch = (currentId) => {
        setSwitching(true);
        setTimeout(() => {
            setActiveTab(currentId);
            setSwitching(false);
        }, 300);
    };

    return (
        <>
            <div className="amenities_tabs_wrapper">
                <div className="amenities_tabs_tabs">
                    {categories.map((name, index) => (
                        <label
                            key={index}
                            className={activeTab === index ? 'active_tab' : ''}
                            onClick={() => handleSwitch(index)}
                        >
                            {name}
                        </label>
                    ))}
                </div>
                <div className="amenities_tabs_display">
                    <div className="amenities_tabs_display_photo"></div>
                    <div className='amenities_tabs_display_content_bg'></div>
                    <div className={`amenities_tabs_display_content ${switching ? 'switching' : ''}`}>
                        <p className='anim-up'>{String(currentTab.id).padStart(2, '0')}</p>
                        <div className="amenities_tabs_floating_text anim-up">
                            <label className='amenities_a_little_letter_spaced'>FEATURED AMENITY</label>
                            <h1>{currentTab.heading}</h1>
                            <p className='amenities_a_little_margin_bottom'>{currentTab.description}</p>
                            <div className="amenities_info_row">
                                {Object.entries(currentTab.info).map(([key, value]) => (
                                    <div key={key} className="info_item">
                                        <span>{key.toUpperCase()}</span>
                                        <p className='amenities_a_little_margin_bottom'>{value}</p>
                                    </div>
                                ))}
                            </div>
                            <CustomButton text="LEARN MORE" variant="primary" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AmenitiesTabs