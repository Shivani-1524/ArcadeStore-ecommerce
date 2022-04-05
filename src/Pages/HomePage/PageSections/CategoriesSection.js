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
                <CategoryCard img={Hoodie} caption='Clothing' filterCatKey='showClothing' />
                <CategoryCard img={PS5} caption='Gadgets' filterCatKey='showGadgets' />
                <CategoryCard img={CyberPunk} caption='Game Discs' filterCatKey='showGameCDs' />
                <CategoryCard img={Headphone} caption='Fandom Collectibles' filterCatKey='showCollectibles' />
            </div>
        </section>
    )
}

export default CategoriesSection