import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './WishlistPage.css'
import WishlistCard from './WishlistComponents/WishlistCard'
import Navbar from '../../Components/Navbar/Navbar'
import { useWishlist, useAuth, useToast } from '../../Contexts/index'
const axios = require('axios');

const WishlistPage = () => {
    const { wishlistDispatch, wishlistState } = useWishlist()
    const { isLoggedIn } = useAuth()
    const { dispatchToast } = useToast()

    const addToast = (toastMsg, type) => {
        dispatchToast({
            type: 'ADD_TOAST', payload: {
                title: toastMsg,
                toastType: type
            }
        })
    }

    const redirectToLogin = () => {
        navigate('/login')
        addToast('Please Login To Proceed', 'TOAST_ERROR')
    }

    const navigate = useNavigate()
    useEffect(() => {
        isLoggedIn ? (async () => {
            try {
                const res = await axios({
                    method: "GET",
                    url: "/api/user/wishlist",
                    headers: {
                        authorization: isLoggedIn
                    }
                })
                const wishlist = res.data.wishlist
                wishlistDispatch({ type: 'UPDATE_WISHLIST', payload: wishlist })
            } catch (err) {
                console.error(err)
                addToast('Unexpected Error has occurred. please try again later', 'TOAST_ERROR')
            }
        })() : redirectToLogin()
    }, [])
    return (
        <div>
            <Navbar />
            {wishlistState.length !== 0 ? <div className="wishlist-container">
                <h1 className="new-font md-title center-txt">MY WISHLIST</h1>
                <div className="wishlist-section">
                    {wishlistState.map(wishItem => <WishlistCard wishProduct={wishItem} />)}
                </div>
            </div> : <div className="empty-page-txt">
                <p className='rg-p'>Nothing to see here, such empty 👾</p>
            </div>}
        </div>
    )
}

export default WishlistPage