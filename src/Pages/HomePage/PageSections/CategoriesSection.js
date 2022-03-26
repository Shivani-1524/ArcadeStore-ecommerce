import React from 'react'
import '../HomePage.css'
import CategoryCard from '../HomeComponents/CategoryCard'
import { CyberPunk, Headphone, Hoodie, PS5 } from './index.js'

const CategoriesSection = () => {
    return (
        <section className="section categories-container mg-t-60">
            <h1 className="new-font center-txt">
                CATEGORIES TO BAG
            </h1>
            <div className="flex-row center-row mg-t-40">
                <CategoryCard img={Hoodie} caption='Clothing and Merch' />
                <CategoryCard img={PS5} caption='PCs, PlayStations & more' />
                <CategoryCard img={CyberPunk} caption='Game Discs' />
                <CategoryCard img={Headphone} caption='Gadgets and Accessories' />
            </div>
        </section>
    )
}

export default CategoriesSection