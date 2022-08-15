import "./HomePage.css"
import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"
import { DealsSection, BrandSection, ArrivalsSection, CategoriesSection, HeroSection } from './PageSections/index'

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <div className="content-container">
                <HeroSection />
                <CategoriesSection />
                <DealsSection />
                <ArrivalsSection />
                <BrandSection />
            </div>
            <Footer />
        </div>
    )
}

export default HomePage