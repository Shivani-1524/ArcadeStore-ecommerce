import React from 'react'
import '../CartPage.css'
import { Link } from 'react-router-dom'
import { useCart } from '../../../Contexts/CartProvider'

const CartSummary = () => {
    const { cartState } = useCart();
    const getSavedAmt = () => cartState.reduce((prev, acc) => {
        return prev += acc.originalprice ? (acc.originalprice - acc.currentprice) : 0
    }, 0)
    const getTotalAmt = () => cartState.reduce((prev, acc) => {
        return prev += acc.currentprice * acc.qty
    }, 0)

    return (
        <div className="buy-container">
            <div className="cart-details">
                <h1 className="sm-title ">CART DETAILS</h1>
                <div className="divider"></div>
                {cartState.map((item, index) => <div key={index} className="item-detail">
                    <p className="sm-title n-wt">{item.title} x{item.qty}</p>
                    <p className="sm-title n-wt">Rs. {item.currentprice * item.qty}</p>
                </div>)}
                <div className="item-detail">
                    <p className="sm-title n-wt">Total Discount</p>
                    <p className="sm-title n-wt orange-txt"> - Rs. {getSavedAmt()}</p>
                </div>
                <div className="item-detail">
                    <p className="sm-title n-wt">Delivery Charges</p>
                    <p className="sm-title n-wt"> Rs. 399</p>
                </div>
                <div className="item-detail mg-t-10">
                    <input className="input-coupon" aria-label="coupon field" id="coupon" name="coupon"
                        placeholder="Enter Coupon Code" type="text" />
                    <p className="violet-txt n-wt sm-title btn-apply">APPLY</p>
                </div>
                <div className="item-detail mg-t-10">
                    <p className="sm-title">TOTAL AMOUNT</p>
                    <p className="sm-title">Rs {getTotalAmt()} </p>
                </div>
                <p className="grey-txt">You will save <span className="violet-txt bold">Rs.{getSavedAmt()}</span> on this order</p>
                <Link to="/profile"> <button className="btn primary-btn solid mg-t-10">PLACE ORDER</button></Link>
            </div>
        </div>
    )
}

export { CartSummary }