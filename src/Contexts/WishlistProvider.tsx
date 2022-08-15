import { createContext, useContext, useReducer } from 'react'
import { wishlistReducer, initWishlistState, Action, Wishlist } from '../Reducers/WishlistReducer'

type ProviderProps = {
    children: JSX.Element
}

interface ContextProps {
    wishlistState: Wishlist;
    wishlistDispatch: (a:Action)=>void;
}

const defaultValue : ContextProps= {
    wishlistState: {wishlistItems: []},
    wishlistDispatch: () => console.error("attempting to use Wishlist Context outside of a valid provider")
}

const WishlistContext = createContext<ContextProps>(defaultValue);
const useWishlist = () => useContext(WishlistContext)

const WishlistProvider = ({ children } : ProviderProps) => {
    const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, initWishlistState)

    return (
        <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
            {children}
        </WishlistContext.Provider>
    )
}

export { WishlistProvider, useWishlist }