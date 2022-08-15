import React from 'react'
import '../WishlistPage.css'
import { Link } from 'react-router-dom'
import { removeFromWishlist, addToCart, setToast, handleAddToList } from '../../../Util/index'
import { useCart, useWishlist, useToast } from '../../../Contexts/index'
import {Product} from '../../../backend/db/products'

type ComponentProps = {
    wishProduct: Product;
}

const WishlistCard = ({ wishProduct } : ComponentProps) => {
    const { imgSrc, title, currentprice, discount, originalprice, altTxt } = wishProduct
    const { wishlistDispatch } = useWishlist()
    const { dispatchToast } = useToast()
    const { cartDispatch, cartState } = useCart()


    const deleteFromWishlist = async (wishlistProduct : Product) => {
        const newWishlist = await removeFromWishlist(wishlistProduct)
        wishlistDispatch({ type: 'UPDATE_WISHLIST', payload: newWishlist })
        dispatchToast({
            type: 'ADD_TOAST', payload: {
                title: 'Removed From Your WishList',
                toastType: 'TOAST_SUCCESS'
            }
        })
    }

    const moveFromWishlist = async (wishlistProduct : Product) => {
        const { updatedList, toastMsg } = await handleAddToList({ productDetails: wishlistProduct, listState: cartState, addProductFn: addToCart })
        cartDispatch({ type: 'UPDATE_CART', payload: updatedList })
        toastMsg !== 'Exists' && deleteFromWishlist(wishProduct)
        dispatchToast({
            type: 'ADD_TOAST', payload: setToast(toastMsg, 'Wishlist')
        })
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