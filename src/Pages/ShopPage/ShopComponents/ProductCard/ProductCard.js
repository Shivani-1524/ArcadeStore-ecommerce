import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import './ProductCard.css';
import { addToCart, handleAddToList, addToWishlist, removeFromWishlist, setToast } from '../../../../Util/index';
import { useAuth, useWishlist, useCart, useToast } from '../../../../Contexts/index'

const ProductCard = (props) => {
    const { cartDispatch, cartState } = useCart()
    const { wishlistDispatch } = useWishlist()
    const navigate = useNavigate()
    const { isLoggedIn } = useAuth()
    const { _id, title, originalprice, currentprice, discount, reviewsnum, rating, imgSrc, inStock, altTxt } = props.productdetails;
    const [toggleLike, setToggleLike] = useState(props.inWishlist);
    const { dispatchToast } = useToast()

    const redirectToLogin = () => {
        navigate('/login')
        dispatchToast({
            type: 'ADD_TOAST', payload: {
                title: 'Please Login To Proceed',
                toastType: 'TOAST_ERROR'
            }
        })
    }

    const showToastSuccess = (toastMsg) => {
        dispatchToast({
            type: 'ADD_TOAST', payload: {
                title: toastMsg,
                toastType: 'TOAST_SUCCESS'
            }
        })
    }

    const updateWishlist = async () => {
        if (isLoggedIn) {
            setToggleLike(prev => !prev)
            let updatedWishlist;
            if (!toggleLike) {
                updatedWishlist = await addToWishlist(props.productdetails)
                wishlistDispatch({ type: 'UPDATE_WISHLIST', payload: updatedWishlist })
                showToastSuccess('Added to Your Wishlist')
            } else {
                updatedWishlist = await removeFromWishlist(props.productdetails)
                wishlistDispatch({ type: 'UPDATE_WISHLIST', payload: updatedWishlist })
                showToastSuccess('Removed From Your Wishlist')
            }
        } else {
            redirectToLogin()
        }
    }

    const updateCart = async () => {
        if (isLoggedIn) {
            const { updatedList, toastMsg } = await handleAddToList({ productDetails: props.productdetails, listState: cartState, addProductFn: addToCart });
            cartDispatch({ type: 'UPDATE_CART', payload: updatedList })
            dispatchToast({
                type: 'ADD_TOAST', payload: setToast(toastMsg, 'Cart')
            })
        } else {
            redirectToLogin()
        }
    }

    return (
        <div className={inStock ? "card ver-card no-bg-color" : "card ver-card no-bg-color overlay"} >
            <div className="img-container pos-rel">
                <Link to="/singleprod" state={{ id: _id }}>
                    <img className="img-resp" src={imgSrc} alt={altTxt} />
                </Link>
                <div className="rating-row bdg pos-abs bottom-left">
                    <i className="badge-star fas fa-star"></i>
                    <p className="xsm-title">{rating}</p>
                    <i className="badge-circle fas fa-circle"></i>
                    <p className="review-num xsm-p grey-txt">({reviewsnum})</p>
                </div>
                <button onClick={updateWishlist} className="btn icon-btn pos-abs top-right star-toggle-btn">
                    {toggleLike && isLoggedIn ? <i className="fas fa-star filled"></i> : <i className="fas fa-star"></i>}
                </button>
            </div>
            <div className="text-card">
                <p className="sm-title bold">{title}</p>
                <div className="mg-t-5 price-row">
                    <p className="sm-title grey-txt">Rs. {currentprice}</p>
                    {discount && <p className="sm-p grey-txt striked-txt">Rs. {originalprice}</p>}
                    {discount && <p className="sm-p orange-txt">{discount}% OFF</p>}
                </div>
                <button
                    onClick={updateCart}
                    disabled={!inStock}
                    className="btn primary-btn solid icon-left mg-t-10">
                    <i className="fas fa-shopping-cart"></i>
                    Add to Bag
                </button>
            </div>

            {!inStock && <div className="overlay-layer">
                <p className="md-title">OUT OF STOCK</p>
            </div>}
        </div>

    )
}

export default ProductCard