const initCartState = []
const cartReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_CART':
            return [...action.payload]
    }
}

export { initCartState, cartReducer }