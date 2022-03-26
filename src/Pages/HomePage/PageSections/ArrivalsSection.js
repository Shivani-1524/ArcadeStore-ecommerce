import React from 'react'
import '../HomePage.css'
import NewArrivalCard from '../HomeComponents/NewArrivalCard'
import { XiaoHome, CollectiblesVal } from './index'

const ArrivalsSection = () => {

    return (
        <section className="section arrivals-container mg-t-70">
            <h1 className="new-font center-txt">
                NEW ARRIVALS
            </h1>
            <div className="grid-layout-5050 mg-t-40 dark-bg">
                <NewArrivalCard imgSrc={XiaoHome} title='Fresh Collection of Genshin Posters' />
                <NewArrivalCard imgSrc={CollectiblesVal} title='Valorant collectibles' />
            </div>
        </section>
    )
}

export default ArrivalsSection