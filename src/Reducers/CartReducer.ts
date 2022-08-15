import {Reducer} from 'react'
import {Product} from '../backend/db/products'


export type Cart = {
    cartItems: Product[];
}

export type Action = {type: 'UPDATE_CART'; payload: Product[]}

const initCartState:Cart = { cartItems: [] }

const cartReducer:Reducer<Cart, Action> = (state : Cart, action: Action) => {
    switch (action.type) {
        case 'UPDATE_CART':
            return {...state, cartItems: [...action.payload]}
    }
}

export { initCartState, cartReducer }