import CompanyStats from '../../components/CompanyStats';
import '../../css/AboutUs.css';
import template from '../../assets/images/template_aboutus.png';

function Home_AboutUs() {
    return (
        <>
            <div className='overall-wrapper'>
            <CompanyStats/>
            <div className="aboutus-container">
                <div className="content">
                    <p className='upper_subtitle jost_font anim-up'>OUR PHILOSOPHY</p>
                    <h1 className='heading garamond_font anim-up'>Not just a hotel.<br/>A <span className='italics'>drift in time</span>.</h1>
                    <p className='content_text jost_font'>Drift & Shore was designed for those who crave the ocean's rhythm. Every suite opens to either the sea or lush coastal garden -- because waking up to the sound of the waves isn't an amenity, it's a right. We believe luxury is measured not in thread counts, but in how many breaths it takes before your shoulders drop.</p>
                    <p className='cta'>DISCOVER OUR STORY →</p>
                </div>
                <div className="image anim-up">
                    <img src={template} alt='An image'></img>
                </div>
            </div>
            </div>
        </>
    )
}

export default Home_AboutUs