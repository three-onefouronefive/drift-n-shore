import DnSCTA from "../../components/DnSCTA"
import Footer from "../../components/Footer"
import Contact_Hero from './Contact_Hero.jsx'
import Contact_Enquiry from './Contact_Enquiry.jsx'
import Contact_Cards from './Contact_Cards.jsx'
import Contact_FAQ from './Contact_FAQ.jsx'

function ContactMain() {
    return (
        <>
            <Contact_Hero />
            <Contact_Enquiry />
            <Contact_Cards />
            <Contact_FAQ />
            <DnSCTA />
            <Footer />
        </>
    )
}

export default ContactMain