import Home_Hero from './Home_Hero'
import Home_AboutUs from './Home_AboutUs'
import Home_Accomodations from './Home_Accomodations'
import Home_Amenities from './Home_Amenities'
import Home_Quote from './Home_Quote'
import AutoplayAudio from '../../components/AutoplayAudio'
// import { useScrollAnimations } from '../../hooks/useScrollAnimations'
// import { useTimeline } from '../../hooks/useTimeline'
import { usePageAnimations } from '../../hooks/usePageAnimations'


function Home() {
    usePageAnimations({ lockScroll: true });

    return (
        <>
            <AutoplayAudio />
            <Home_Hero />
            <Home_AboutUs />
            <Home_Accomodations />
            <Home_Amenities />
            <Home_Quote />
        </>
    )
}

export default Home