
const initialState = {
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
    searchVal: "",
    clearfilters: true
};

const filterReducer = (state, { type, payload: { filterKey, value } }) => {
    switch (type) {
        case "OUT_OF_STOCK":
            return {
                ...state,
                hideOutOfStock: value
            };
        case "SORT":
            return { ...state, sortBy: value };
        case "FILTER":
            return { ...state, categories: { ...state.categories, [filterKey]: value } }
        case "GAME_FILTER":
            return { ...state, gameCategory: { ...state.gameCategory, [filterKey]: value } }
        case "SEARCH_VAL":
            return { ...state, searchVal: value };
        case "PRICE_RANGE":
            return { ...state, pricerange: value };
        case "CLEAR_ALL":
            return { ...initialState, searchVal: state.searchVal };
        default:
            return state;

    }
};
export { filterReducer, initialState };