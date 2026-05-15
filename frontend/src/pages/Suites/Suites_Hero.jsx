import '../../css/Suites_Hero.css';

function Suites_Hero() {
    const suites = [
        {
            title: "SIGNATURE SUITE",
            header: "Ocean Front Suite",
            description: "Perched at the edge of the resort with an unobstructed panoramic sea view. Floor-to-ceiling glass panels frame the horizon like a living painting. Includes a private terrace with plunge pool and outdoor daybed.",
            suite_info: {
                size: "85 sqm",
                bed: "King",
                capacity: "2 Guests",
                view: "Ocean",
            },
            tags: ["PRIVATE PLUNGE POOL", "RAIN SHOWER", "BUTLER SERVICE", "OCEAN TERRACE", "MINI BAR"],
            price: "₱18,000"
        },
    ]


    return (
        <>
            <div className="suites_hero_wrapper">
                {/* Add the suite selector here */}
                {/* Add the tag selector here */}
            </div>
        </>
    )
}

export default Suites_Hero