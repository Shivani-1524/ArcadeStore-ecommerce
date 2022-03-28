import { createContext, useContext, useReducer } from 'react'
import { wishlistReducer, initWishlistState } from '../Reducers/WishlistReducer'

const WishlistContext = createContext()
const useWishlist = () => useContext(WishlistContext)

const WishlistProvider = ({ children }) => {
    const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, initWishlistState)

    return (
        <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
            {children}
        </WishlistContext.Provider>
    )
}

export { WishlistProvider, useWishlist }