import React from 'react'
import "./HomePage.css"

import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"

import DealsSection from './PageSections/DealsSection';
import BrandSection from './PageSections/BrandsSection.js'
import ArrivalsSection from './PageSections/ArrivalsSection.js'
import CategoriesSection from './PageSections/CategoriesSection';
import HeroSection from './PageSections/HeroSection'

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

export { HomePage }