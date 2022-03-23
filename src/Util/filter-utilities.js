import { initialState } from '../Reducers/filter-reducer'

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
            parseInt(item1.currentprice) - parseInt(item2.currentprice)
        )
    } else if (state.sortBy == 'HIGH_TO_LOW') {
        sortedData.sort((item1, item2) =>
            parseInt(item2.currentprice) - parseInt(item1.currentprice)
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
    return [...data].filter(item => parseInt(item.currentprice) <= state.pricerange)
}

const clearFilter = (data, state) => {
    return { ...initialState, searchVal: initialState.searchVal }
}

const filterCategories = (data, state) => {
    let flag = 1;
    let dataList = [...data]
    let filteredList = []
    for (const keyVal in state.categories) {
        if (keyVal === 'showGameCDs') {
            console.log('TSDDSDSD')
        }
        if (state.categories[keyVal]) {
            flag = 2;
            let newFilterList = [...data].filter((item) => {
                console.log(item.categoryName, item.categoryName === keyVal, keyVal)
                return item.categoryName === keyVal.toString()
            })
            filteredList = filteredList.concat(newFilterList)
        }
    }
    return flag == 2 ? filteredList : dataList
}

const filterByGameCategory = (data, state) => {
    let flag = 1;
    let dataList = [...data]
    let filteredList = []
    for (const keyVal in state.gameCategory) {
        if (state.gameCategory[keyVal]) {
            flag = 2;
            let newFilterList = [...data].filter((item) => item.game === keyVal.toString())
            filteredList = filteredList.concat(newFilterList)
        }
    }
    return flag == 2 ? filteredList : dataList
}

export { useFilterFunc, clearFilter, priceFilter, outOfStockFilter, searchItems, sortItems, filterCategories, filterByGameCategory }