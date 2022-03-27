import React from 'react'
import '../CartPage.css'

const CartSummary = () => {
    return (
        <div class="buy-container">
            <div class="cart-details">
                <h1 class="sm-title ">CART DETAILS</h1>
                <div class="divider"></div>
                <div class="item-detail mg-t-10">
                    <p class="sm-title n-wt">Price (2 Items)</p>
                    <p class="sm-title n-wt">Rs. 5999</p>
                </div>
                <div class="item-detail">
                    <p class="sm-title n-wt">Discount</p>
                    <p class="sm-title n-wt orange-txt"> - Rs.700</p>
                </div>
                <div class="item-detail">
                    <p class="sm-title n-wt">Delivery Charges</p>
                    <p class="sm-title n-wt"> Rs. 399</p>
                </div>
                <div class="item-detail mg-t-10">
                    <input class="input-coupon" aria-label="coupon field" id="coupon" name="coupon"
                        placeholder="Enter Coupon Code" type="text" />
                    <p class="violet-txt n-wt sm-title btn-apply">APPLY</p>
                </div>
                <div class="item-detail mg-t-10">
                    <p class="sm-title">TOTAL AMOUNT</p>
                    <p class="sm-title">Rs 5299</p>
                </div>
                <p class="grey-txt">You will save <span class="violet-txt bold">Rs.700</span> on this order</p>
                <button class="btn primary-btn solid mg-t-10">PLACE ORDER</button>
            </div>
        </div>
    )
}

export { CartSummary }