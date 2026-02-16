import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import AboutSection from '../components/AboutSection'
import Courses from '../components/Courses'
import FunFacts from '../components/FunFacts'
import Team from '../components/Team'
import Testimonials from '../components/Testimonials'
import Events from '../components/Events'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'

// Components

export default function Homepage (props) {

    return (
        <>
            <Navbar />
            <Hero />
            <Services />
            <AboutSection />
            <Courses />
            <FunFacts />
            <Team />
            <Testimonials />
            <Events />
            <ContactUs />
            <Footer />
        </>
    )
}