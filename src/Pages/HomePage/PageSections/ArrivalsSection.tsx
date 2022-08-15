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
                <NewArrivalCard imgSrc={XiaoHome} imgAlt="Xiao Genshin Poster" title='Fresh Collection of Genshin Posters' filterGameKey={"showGenshin"} filterCatKey={"showCollectibles"} />
                <NewArrivalCard imgSrc={CollectiblesVal} imgAlt="Valorant badges" title='Valorant collectibles' filterGameKey={"showValorant"} filterCatKey={"showCollectibles"} />
            </div>
        </section>
    )
}

export default ArrivalsSection