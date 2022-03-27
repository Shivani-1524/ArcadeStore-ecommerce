import React from 'react'

const CartProduct = (props) => {
    { title, subtitle, prodDescription, price, }
    return (
        <div class="card hor-card mg-t-30">
            <i class="close-icon fas fa-times-circle"></i>
            <div class="img-container">
                <img src="../Assets/Products/chongung-poster.jfif" alt="card image" />
            </div>
            <div class="text-card">
                <p class="md-booky-title bold">The Chronicles of Narnia </p>
                <p class="xsm-p grey-txt">Written by C.S.Lewis</p>
                <p class="sm-p mg-t-10">Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Fugit consequatur
                    officiis doloribus. .</p>
                <div class="review-row mg-t-15">
                    <div class="rating-row">
                        <i class="fas fa-star"></i>
                        <p class="sm-title">4.3</p>
                    </div>
                    <i class="fas fa-circle"></i>
                    <p class="review-num xsm-p grey-txt">(43)</p>
                </div>
                <div class="mg-t-5 price-row">
                    <p class="md-title">Rs. 200</p>
                    <p class="sm-p grey-txt striked-txt">Rs. 400</p>
                    <p class="sm-p orange-txt">50% OFF</p>
                </div>
                <div class="card-btn-row mg-t-15">
                    <button class="btn warning-btn solid sm-btn">Move to Wishlist</button>
                    <div class="flex-row sm qty-row">
                        <p class="xsm-p">Quantity:</p>
                        <button><i class="fa fa-solid fa-minus"></i></button> <input type="text" /> <button><i
                            class="fa fa-solid fa-plus"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { CartProduct }