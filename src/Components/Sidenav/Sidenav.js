import React from 'react'
import "./Sidenav.css";
import { useFilter } from '../../Contexts/filter-controller'

const Sidenav = () => {

    const { dispatch, filteredState } = useFilter()

    const handleClearFilters = () => dispatch({ type: "CLEAR_ALL", payload: { filterKey: true, value: true } })


    const categoryFilterObject = [
        {
            title: 'Fandom Collectibles',
            idName: 'chk-collectibles',
            key: 'showCollectibles',
            val: filteredState.categories.showCollectibles
        },
        {
            title: 'Clothing',
            idName: 'chk-clothing',
            key: 'showClothing',
            val: filteredState.categories.showClothing
        },
        {
            title: 'Gadgets',
            idName: 'chk-gadgets',
            key: 'showGadgets',
            val: filteredState.categories.showGadgets
        },
        {
            title: 'Game Discs',
            idName: 'chk-gameCD',
            key: 'showGameCDs',
            val: filteredState.categories.showGameCDs
        }
    ]

    const sortFilterObject = [{
        title: 'Customer Rating',
        radioId: 'sort-rating',
        sortType: 'RATING'
    }, {
        title: 'Lowest to Highest',
        radioId: 'sort-ltoh',
        sortType: 'LOW_TO_HIGH'
    },
    {
        title: 'Highest to Lowest',
        radioId: 'sort-htol',
        sortType: 'HIGH_TO_LOW'
    }]

    const gameFilterObject = [{
        key: 'showCod',
        idName: 'chk-callofduty',
        title: 'Call of Duty',
        val: filteredState.gameCategory.showCod
    },
    {
        key: 'showApex',
        idName: 'chk-apex',
        title: 'Apex Legends',
        val: filteredState.gameCategory.showApex
    },
    {
        idName: 'chk-valorant',
        title: 'Valorant',
        key: 'showValorant',
        val: filteredState.gameCategory.showValorant
    },
    {
        idName: 'chk-Genshin',
        title: 'Genshin',
        key: 'showGenshin',
        val: filteredState.gameCategory.showGenshin
    }]

    const GameFilterLabel = ({ filterLabelData }) => {
        const { key, title, idName, val } = filterLabelData
        const handleGameFilter = (e, gameType) => dispatch({ type: "GAME_FILTER", payload: { value: e.target.checked, filterKey: gameType } })

        return (
            <div className="category-check mg-t-15">
                <input checked={val} onChange={(e) => handleGameFilter(e, key)} type="checkbox" id={idName} />
                <label htmlFor={idName}>{title}</label>
            </div>
        )
    }

    const SortFilterLabel = ({ filterLabelData }) => {
        const { title, radioId, sortType } = filterLabelData;
        let checkVal = filteredState.sortBy === sortType;
        const handleSortClick = (e, sortType) => {
            e.target.checked && dispatch({ type: "SORT", payload: { value: sortType } })
        }
        return (
            <div className="category-check mg-t-20">
                <input checked={checkVal} onChange={(e) => handleSortClick(e, sortType)} type="radio" id={radioId} name="sort-order" />
                <label htmlFor={radioId}>{title}</label>
            </div>
        )
    }

    const CategoryFilterLabel = ({ filterLabelData }) => {
        const { title, idName, key, val } = filterLabelData;

        const handleCategoryFilter = (e, categoryName) => {
            dispatch({ type: "FILTER", payload: { value: e.target.checked, filterKey: categoryName } })
        }

        return (
            <div className="category-check mg-t-15">
                <input checked={val} onChange={(e) => handleCategoryFilter(e, key)} type="checkbox" id={idName} />
                <label htmlFor={idName}>{title}</label>
            </div>
        )
    }


    return (
        <aside className="filters-container light-txt">
            <div className="filter-header">
                <p className="sm-title">FILTERS</p>
                <p onClick={(e) => handleClearFilters} className="red-txt n-wt xsm-title filter-clear">CLEAR ALL</p>
            </div>
            <div>
                <div className="filter-header">
                    <p className="sm-sub-title n-wt">PRICE</p>
                    <span className="xsm-p">100 - {filteredState.pricerange} </span>
                </div>
                <input id="range-slider" className="mg-t-20" type="range" min="0" max="70000" value={filteredState.pricerange} onChange={(e) => dispatch({ type: "PRICE_RANGE", payload: { value: e.target.value } })} />
            </div>
            <div>
                <p className="sm-sub-title n-wt">CATEGORY</p>
                {categoryFilterObject
                    .map((categoryData, index) =>
                        <CategoryFilterLabel key={index} filterLabelData={categoryData}>
                        </CategoryFilterLabel>
                    )}
            </div>
            <div>
                <p className="sm-sub-title n-wt">SORT BY</p>
                {sortFilterObject.map((sortData, index) => <SortFilterLabel key={index} filterLabelData={sortData}></SortFilterLabel>)}
            </div>
            <div>
                <p className="sm-sub-title n-wt">GAMES</p>
                {gameFilterObject.map((gameData, index) => <GameFilterLabel key={index} filterLabelData={gameData}></GameFilterLabel>)}
            </div>
            <div>
                <p className="sm-sub-title n-wt">OTHERS</p>
                <div className="category-check mg-t-15">
                    <input onChange={(e) => dispatch({ type: 'OUT_OF_STOCK', payload: { value: e.target.checked } })} type="checkbox" id='outofstock' />
                    <label htmlFor='outofstock'>Hide Out of Stock</label>
                </div>
            </div>

        </aside>

    )
}

export default Sidenav