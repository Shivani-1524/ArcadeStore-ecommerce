import React from 'react'
import '../HomePage.css'
import CategoryCard from '../../../Components/CategoryCard/CategoryCard'
import CyberPunk from "../../../Assets/Categories/cyberpunk.jfif"
import Headphone from "../../../Assets/Categories/headphone.jpg"
import Hoodie from "../../../Assets/Categories/hoodie.png"
import PS5 from "../../../Assets/Categories/ps5.jpg"

const CategoriesSection = () => {
    return (
        <div className="section categories-container mg-t-60">
            <h1 className="new-font center-txt">
                CATEGORIES TO BAG
            </h1>
            <div className="flex-row center-row mg-t-40">
                <CategoryCard img={Hoodie} caption='Clothing and Merch' />
                <CategoryCard img={PS5} caption='PCs, PlayStations & more' />
                <CategoryCard img={CyberPunk} caption='Game Discs' />
                <CategoryCard img={Headphone} caption='Gadgets and Accessories' />
            </div>
        </div>
    )
}

export default CategoriesSection