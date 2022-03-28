import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from "../../Components/Navbar/Navbar"
import './CartPage.css'
import { CartSummary } from './CartComponents/CartSummary'
import { CartProduct } from './CartComponents/CartProduct'
const axios = require('axios');
import { useCart } from '../../Contexts/CartProvider'


const CartPage = () => {
    const { cartState, cartDispatch } = useCart()
    const navigate = useNavigate()
    const encodedToken = localStorage.getItem('userToken')
    useEffect(() => {
        encodedToken ? (async () => {
            try {
                const res = await axios({
                    method: "GET",
                    url: "/api/user/cart",
                    headers: {
                        authorization: encodedToken
                    }
                })
                const cartList = res.data.cart
                cartDispatch({ type: 'UPDATE_CART', payload: cartList })
            } catch (err) {
                console.error(err)
            }
        })() : navigate('/login')
        // navigate('/login', {
        //     errTxt: 'Login to Access Your Cart Page',
        //     prevRoute: '/cart'
        // })
    }, [])
    return (
        <div>
            <Navbar />
            {cartState.length !== 0 ? <section className="cart-container">
                <div className="cart-items mg-t-30">
                    <h1 className="new-font center-txt">MY SHOPPING CART</h1>
                    {cartState.map((cartItem) => {
                        return <CartProduct key={cartItem._id} cartItem={cartItem} />
                    })}
                </div >
                <CartSummary />
            </section >
                :
                <div className="empty-page-txt">
                    <p className='rg-p'>Nothing to see here, such empty 👾</p>
                </div>
            }

        </div >
    )
}

export default CartPage 