import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './WishlistPage.css'
import WishlistCard from './WishlistComponents/WishlistCard'
import Navbar from '../../Components/Navbar/Navbar'
import { useWishlist } from '../../Contexts/index'
import axios from 'axios'

const WishlistPage = () => {
    const { wishlistDispatch, wishlistState } = useWishlist()
    const encodedToken = localStorage.getItem('userToken')
    const navigate = useNavigate()
    useEffect(() => {
        encodedToken ? (async () => {
            try {
                const res = await axios({
                    method: "GET",
                    url: "/api/user/wishlist",
                    headers: {
                        authorization: encodedToken
                    }
                })
                const wishlist = res.data.wishlist
                wishlistDispatch({ type: 'UPDATE_WISHLIST', payload: wishlist })
            } catch (err) {
                console.error(err)
            }
        })() : navigate('/login')
        // navigate('/login', {
        //     errTxt: 'Login to Access Your Cart Page',
        //     prevRoute: '/cart'
        // })
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