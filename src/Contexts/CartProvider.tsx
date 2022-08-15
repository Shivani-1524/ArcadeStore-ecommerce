import { createContext, useContext, useReducer } from 'react'
import {Product} from '../backend/db/products'
import { cartReducer, initCartState, Cart, Action } from '../Reducers/CartReducer'


type ProviderProps = {
    children: JSX.Element
}

interface ContextProps {
    cartState: Cart;
    cartDispatch: (a:Action)=>void;
}

const defaultValue: ContextProps = {
    cartState: {cartItems: []},
    cartDispatch: () => console.error("attempting to use CartContext outside of a valid provider")
}

const CartContext = createContext<ContextProps>(defaultValue);
const useCart = () => useContext(CartContext)



const CartProvider = ({ children } : ProviderProps) => {
    const [cartState, cartDispatch] = useReducer(cartReducer, initCartState)
    return (
        <CartContext.Provider value= { { cartState, cartDispatch }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider, useCart }