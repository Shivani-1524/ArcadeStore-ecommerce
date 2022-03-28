import { createContext, useContext, useReducer } from 'react'
import { cartReducer, initCartState } from '../Reducers/CartReducer'

const CartContext = createContext()
const useCart = () => useContext(CartContext)

const CartProvider = ({ children }) => {
    const [cartState, cartDispatch] = useReducer(cartReducer, initCartState)

    return (
        <CartContext.Provider value={{ cartState, cartDispatch }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider, useCart }