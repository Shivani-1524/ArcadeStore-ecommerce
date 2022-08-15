import { filterReducer, initialState } from "../../Reducers/FilterReducer";

describe("testing filter reducer", () => {
    it("should filter items that are out of stock", () => {
        const initTestState = {
            hideOutOfStock: false,
            sortBy: null,
            pricerange: 70000,
            searchVal: "",
            clearfilters: false
        }
        const filterOutOfStock = {
            type: "OUT_OF_STOCK",
            payload: {
                value: true
            }
        }
        const state = filterReducer(initTestState, filterOutOfStock)
        expect(state).toEqual({
            hideOutOfStock: true,
            sortBy: null,
            pricerange: 70000,
            searchVal: "",
            clearfilters: false
        })
    })

    it("should filter items according to price range", () => {
        const initTestState = {
            hideOutOfStock: false,
            sortBy: null,
            pricerange: 70000,
            searchVal: "",
            clearfilters: false
        }
        const filterPriceRange = {
            type: "PRICE_RANGE",
            payload: {
                value: 5000
            }
        }
        const state = filterReducer(initTestState, filterPriceRange)
        expect(state).toEqual({
            hideOutOfStock: false,
            sortBy: null,
            pricerange: 5000,
            searchVal: "",
            clearfilters: false
        })
    })

    it("should display items according to search bar", () => {
        const initTestState = {
            hideOutOfStock: false,
            sortBy: null,
            pricerange: 70000,
            searchVal: "",
            clearfilters: false
        }
        const filterSearchVal = {
            type: "SEARCH_VAL",
            payload: {
                value: "lubba"
            }
        }
        const state = filterReducer(initTestState, filterSearchVal)
        expect(state).toEqual({
            hideOutOfStock: false,
            sortBy: null,
            pricerange: 70000,
            searchVal: "lubba",
            clearfilters: false
        })
    })

    it("should filter according to product category", () => {
        const initTestState = {
            hideOutOfStock: false,
            sortBy: null,
            categories: {
                showCollectibles: false,
                showGameCDs: false,
                showGadgets: false,
                showClothing: true,
            },
        }

        const filterCategory = {
            type: "FILTER",
            payload: {
                filterKey: 'showGadgets',
                value: true,
            }
        }
        const state = filterReducer(initTestState, filterCategory)

        expect(state).toEqual({
            hideOutOfStock: false,
            sortBy: null,
            categories: {
                showCollectibles: false,
                showGameCDs: false,
                showGadgets: true,
                showClothing: true,
            },
        })
    })

    it("should filter according to game categories", () => {
        const initTestState = {
            gameCategory: {
                showGenshin: false,
                showValorant: false,
                showCod: false,
                showApex: true
            },
            pricerange: 70000,
            searchVal: "",
            clearfilters: false
        }

        const filterGameCategory = {
            type: "GAME_FILTER",
            payload: {
                filterKey: 'showValorant',
                value: true,
            }
        }

        const state = filterReducer(initTestState, filterGameCategory)

        expect(state).toEqual({
            gameCategory: {
                showGenshin: false,
                showValorant: true,
                showCod: false,
                showApex: true
            },
            pricerange: 70000,
            searchVal: "",
            clearfilters: false
        })

    })

    it("should clear all existing filters except search value", () => {
        const initTestState = {
            hideOutOfStock: true,
            sortBy: null,
            categories: {
                showCollectibles: false,
                showGameCDs: false,
                showGadgets: true,
                showClothing: false,
            },
            gameCategory: {
                showGenshin: false,
                showValorant: false,
                showCod: true,
                showApex: false
            },
            pricerange: 5000,
            searchVal: "omen",
            clearfilters: false
        }

        const clearFilters = {
            type: "CLEAR_ALL",
            payload: { filterKey: true, value: true }
        }

        const state = filterReducer(initTestState, clearFilters)

        expect(state).toEqual({
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
            searchVal: "omen",
            clearfilters: true
        })
    })




})