import React from 'react'
import '../WishlistPage.css'
import { Link } from 'react-router-dom'
import { removeFromWishlist, addToCart, findProductInList } from '../../../Util/index'
import { useCart, useWishlist } from '../../../Contexts/index'

const WishlistCard = ({ wishProduct }) => {
    const { imgSrc, title, currentprice, discount, originalprice, altTxt } = wishProduct
    const { wishlistDispatch } = useWishlist()
    const { cartDispatch, cartState } = useCart()

    const deleteFromWishlist = async (wishlistProduct) => {
        const newWishlist = await removeFromWishlist(wishlistProduct)
        wishlistDispatch({ type: 'UPDATE_WISHLIST', payload: newWishlist })
    }

    const moveFromWishlist = async (wishlistProduct) => {
        const newCartList = []
        const newWishlist = await removeFromWishlist(wishlistProduct)
        wishlistDispatch({ type: 'UPDATE_WISHLIST', payload: newWishlist })
        const foundId = findProductInList(wishlistProduct._id, cartState)
        if (!foundId) {
            newCartList = await addToCart(wishlistProduct)
        } else {
            console.log("product already in cart. update qty in cart page.")
            newCartList = cartState
        }
        cartDispatch({ type: 'UPDATE_CART', payload: newCartList })
    }

    return (
        <div className="card ver-card no-bg-color">
            <i className="close-icon grey fas fa-times-circle" onClick={() => deleteFromWishlist(wishProduct)}></i>
            <Link to="/singleprod" state={{ id: wishProduct._id }}>
                <div className="img-container">
                    <img className="img-resp" src={imgSrc} alt={altTxt} />
                </div>
            </Link>
            <div className="text-card">
                <p className="sm-title bold">{title}</p>
                <div className="mg-t-5 price-row">
                    <p className="sm-title grey-txt">Rs. {currentprice}</p>
                    <p className="sm-p grey-txt striked-txt">Rs. {originalprice}</p>
                    <p className="sm-p orange-txt">{discount}% OFF</p>
                </div>
                <button onClick={() => moveFromWishlist(wishProduct)} className="btn primary-btn solid icon-left mg-t-10">
                    <i className="fas fa-shopping-cart"></i>
                    Move to Bag
                </button>
            </div>
        </div>
    )
}

export default WishlistCard