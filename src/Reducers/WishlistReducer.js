const initWishlistState = []
const wishlistReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_WISHLIST':
            return [...action.payload]
    }
}

export { initWishlistState, wishlistReducer }