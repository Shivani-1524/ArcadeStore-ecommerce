import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from "../../Components/Navbar/Navbar"
import './CartPage.css'
import { CartSummary } from './CartComponents/CartSummary'
import { CartProduct } from './CartComponents/CartProduct'
import { useCart } from '../../Contexts/CartProvider'
import { getCartItems } from '../../Util/CartUtilities'
import { useToast } from '../../Contexts'



const CartPage = () => {
    const { cartState: { cartItems }, cartDispatch } = useCart()
    const navigate = useNavigate()
    const {dispatchToast} = useToast()
    const encodedToken = localStorage.getItem('userToken')
    useEffect(() => {
        encodedToken ? (async () => {
            try {
                const {data, success} = await getCartItems()
                console.log("LIST", data, success)
                if(success){
                    cartDispatch({ type: 'UPDATE_CART', payload: data })
                }else{
                    const errorObj = {errorMsg: 'error ocurred'}
                    throw errorObj
                }
            } catch (err) {
                console.error(err)
                navigate('/')
                dispatchToast({type: 'ADD_TOAST', payload: {
                    toastType:  'TOAST_ERROR',
                    title: "Something went wrong. Please try again later."
                }})
            }
        })() : navigate('/login')
        //navigate to prev route
    }, [])
    return (
        <div>
            <Navbar />
            {cartItems.length !== 0 ? <section className="cart-container">
                <div className="cart-items mg-t-30">
                    <h1 className="new-font center-txt">MY SHOPPING CART</h1>
                    {cartItems.map((cartItem) => {
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