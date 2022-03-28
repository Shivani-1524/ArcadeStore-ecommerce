import React from 'react';
import { addProductQty, reduceProductQty, removeFromCart } from '../../../Util/CartUtilities';
import { useCart } from '../../../Contexts/CartProvider'

const CartProduct = ({ cartItem }) => {
    const { title, imgSrc, altTxt, subtitle, qty, reviewsnum, currentprice, discount, originalprice, rating, shortdesc } = cartItem
    const { cartDispatch } = useCart()

    const updateCartList = async (product, getUpdatedCart) => {
        const updatedCart = await getUpdatedCart(product)
        cartDispatch({ type: 'UPDATE_CART', payload: updatedCart })
    }

    return (
        <div className="card hor-card mg-t-30">
            <i onClick={() => updateCartList(cartItem, removeFromCart)} className="close-icon fas fa-times-circle"></i>
            <div className="img-container">
                <img src={imgSrc} alt={altTxt} />
            </div>
            <div className="text-card">
                <p className="md-booky-title bold">{title}</p>
                <p className="xsm-p grey-txt">{subtitle}</p>
                <p className="sm-p mg-t-10">{shortdesc}</p>
                <div className="review-row mg-t-15">
                    <div className="rating-row">
                        <i className="fas fa-star"></i>
                        <p className="sm-title">{rating}</p>
                    </div>
                    <i className="fas fa-circle"></i>
                    <p className="review-num xsm-p grey-txt">({reviewsnum})</p>
                </div>
                <div className="mg-t-5 price-row">
                    <p className="md-title">Rs. {currentprice}</p>
                    <p className="sm-p grey-txt striked-txt">Rs. {originalprice}</p>
                    <p className="sm-p orange-txt">{discount}% OFF</p>
                </div>
                <div className="card-btn-row mg-t-15">
                    <button className="btn warning-btn solid sm-btn">Move to Wishlist</button>
                    <div className="flex-row sm qty-row">
                        <p className="xsm-p">Quantity:</p>
                        <button onClick={() => updateCartList(cartItem, reduceProductQty)}><i className="fa fa-solid fa-minus"></i></button>
                        <input disabled={true} type="text" value={qty} />
                        <button onClick={() => updateCartList(cartItem, addProductQty)}>
                            <i className="fa fa-solid fa-plus"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { CartProduct }