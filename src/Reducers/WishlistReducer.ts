import {Product} from '../backend/db/products'

export type Wishlist = {
    wishlistItems: Product[];
}

export type Action = {type: "UPDATE_WISHLIST"; payload: Product[]}


const initWishlistState: Wishlist = { wishlistItems: [] }

const wishlistReducer = (state : Wishlist, action :Action) => {
    switch (action.type) {
        case 'UPDATE_WISHLIST':
            return {...state, wishlistItems: [...action.payload]}
    }
}

export { initWishlistState, wishlistReducer }