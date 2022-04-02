import React from 'react';
import { addProductQty, reduceProductQty, removeFromCart, addToWishlist, findProductInList } from '../../../Util/index';
import { useCart, useWishlist } from '../../../Contexts/index'

const CartProduct = ({ cartItem }) => {
    const { title, imgSrc, altTxt, subtitle, qty, reviewsnum, currentprice, discount, originalprice, rating, shortdesc } = cartItem
    const { cartDispatch } = useCart()
    const { wishlistState, wishlistDispatch } = useWishlist()

    const updateCartList = async (product, getUpdatedCart) => {
        const updatedCart = await getUpdatedCart(product)
        cartDispatch({ type: 'UPDATE_CART', payload: updatedCart })
    }

    const moveFromCart = async (cartProduct) => {
        const newWishlist = []
        const updatedCart = await removeFromCart(cartProduct)
        cartDispatch({ type: 'UPDATE_CART', payload: updatedCart })
        const foundId = findProductInList(cartProduct._id, wishlistState)
        if (!foundId) {
            newWishlist = await addToWishlist(cartProduct)
        } else {
            console.log("product already in cart. update qty in cart page.")
            newWishlist = await wishlistState
        }
        wishlistDispatch({ type: 'UPDATE_WISHLIST', payload: newWishlist })
    }

    return (
        <div className="card hor-card mg-t-30">
            <i onClick={() => updateCartList(cartItem, removeFromCart)} className="close-icon fas fa-times-circle"></i>
            <div className="img-container">
                <img className='img-resp' src={imgSrc} alt={altTxt} />
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
                    <button onClick={() => moveFromCart(cartItem)} className="btn warning-btn solid sm-btn">Move to Wishlist</button>
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