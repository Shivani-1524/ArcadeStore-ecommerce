import { initialState } from '../Reducers/FilterReducer'

const useFilterFunc = (filterFuncArr, data, state) => {
    let copiedData = [...data]
    for (let filterFunc of filterFuncArr) {
        copiedData = filterFunc(copiedData, state)
    }
    return copiedData;
}

const sortItems = (data, state) => {
    const sortedData = [...data]
    if (state.sortBy === 'RATING') {
        sortedData.sort((item1, item2) =>
            item2.rating - item1.rating
        )
    } else if (state.sortBy == 'LOW_TO_HIGH') {
        sortedData.sort((item1, item2) =>
            item1.currentprice - item2.currentprice
        )
    } else if (state.sortBy == 'HIGH_TO_LOW') {
        sortedData.sort((item1, item2) =>
            item2.currentprice - item1.currentprice
        )
    }
    return sortedData
}

const searchItems = (data, state) => {
    return [...data].filter(item => item.title.toLowerCase().includes(state.searchVal.toLowerCase()))
}

const outOfStockFilter = (data, state) => {
    return state.hideOutOfStock ? [...data].filter(item => item.inStock) : [...data]
}

const priceFilter = (data, state) => {
    return [...data].filter(item => item.currentprice <= state.pricerange)
}

const clearFilter = (data, state) => {
    return { ...initialState, searchVal: initialState.searchVal }
}

const filterCategories = (data, state) => {
    let filterEnabled = false;
    let dataList = [...data]
    let filteredList = []
    for (const keyVal in state.categories) {
        if (state.categories[keyVal]) {
            filterEnabled = true;
            let newFilterList = [...data].filter((item) => {
                return item.categoryName === keyVal.toString()
            })
            filteredList = filteredList.concat(newFilterList)
        }
    }
    return filterEnabled ? filteredList : dataList
}

const filterByGameCategory = (data, state) => {
    let gameFilterChecked = false;
    let dataList = [...data]
    let filteredList = []
    for (const keyVal in state.gameCategory) {
        if (state.gameCategory[keyVal]) {
            gameFilterChecked = true
            let newFilterList = [...data].filter((item) => item.game === keyVal.toString())
            filteredList = filteredList.concat(newFilterList)
        }
    }
    return gameFilterChecked ? filteredList : dataList
}

export { useFilterFunc, clearFilter, priceFilter, outOfStockFilter, searchItems, sortItems, filterCategories, filterByGameCategory }