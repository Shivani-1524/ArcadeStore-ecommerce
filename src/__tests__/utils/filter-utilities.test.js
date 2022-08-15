import { useFilterFunc, clearFilter, priceFilter, outOfStockFilter, searchItems, sortItems, filterCategories, filterByGameCategory } from "../../Util/FilterUtilities"

const products = [{
    title: "Soesic Black Hoodie",
    game: "showApex",
    categoryName: "showClothing",
    inStock: true,
    currentprice: 2000,
    discount: 20,
    originalprice: 2500,
    rating: 4.6,
}, {
    title: "Zhongli Traveller Poster",
    game: "showGenshin",
    categoryName: "showCollectibles",
    inStock: true,
    currentprice: 800,
    discount: 40,
    originalprice: 950,
    rating: 4.2,
}, {
    title: "Klee Redmi Earphones",
    game: "showGenshin",
    categoryName: "showClothing",
    inStock: false,
    currentprice: 8000,
    rating: 2.5,
}]

const state = {
    hideOutOfStock: true,
    sortBy: 'RATING',
    categories: {
        showCollectibles: false,
        showGameCDs: false,
        showGadgets: false,
        showClothing: true,
    },
    gameCategory: {
        showGenshin: false,
        showValorant: false,
        showCod: false,
        showApex: false
    },
    pricerange: 8000,
    searchVal: "soe",
    clearfilters: true
}

const funcsArr = [outOfStockFilter, sortItems, priceFilter, searchItems, filterByGameCategory, filterCategories]

describe("test filter utilites", () => {
    test("all filter functions", () => {
        const res = useFilterFunc(funcsArr, products, state)
        expect(res).toEqual([{
            title: "Soesic Black Hoodie",
            game: "showApex",
            categoryName: "showClothing",
            inStock: true,
            currentprice: 2000,
            discount: 20,
            originalprice: 2500,
            rating: 4.6,
        }])
    })
    test("clear filters", () => {
        const res = clearFilter(products, state)
        expect(res).toEqual({
            hideOutOfStock: false,
            sortBy: null,
            categories: {
                showCollectibles: false,
                showGameCDs: false,
                showGadgets: false,
                showClothing: false,
            },
            gameCategory: {
                showGenshin: false,
                showValorant: false,
                showCod: false,
                showApex: false
            },
            pricerange: 70000,
            searchVal: "soe",
            clearfilters: true
        })
    })
})