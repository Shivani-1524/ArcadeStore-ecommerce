import React from 'react'
import Navbar from "../../Components/Navbar/Navbar"
import './CartPage.css'
import { CartSummary } from './CartComponents/CartSummary'
import { CartProduct } from './CartComponents/CartProduct'

const CartPage = () => {
    return (
        <div>
            <Navbar />
            <section class="cart-container">
                <div class="cart-items mg-t-30">
                    <h1 class="new-font center-txt">MY SHOPPING CART</h1>
                    <CartProduct />
                    <CartProduct />
                    <CartProduct />
                </div >
                <CartSummary />
            </section >
        </div >
    )
}

export { CartPage }