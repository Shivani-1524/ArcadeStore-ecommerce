import React from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom"
import NavLogo from "../../Assets/nav-logo.png"
import { useAuth, useCart, useWishlist } from '../../Contexts/index';
import './Navbar.css'

const Navbar = () => {
    const { isLoggedIn, setIsLoggedIn } = useAuth()
    const { cartState } = useCart()
    const { wishlistState } = useWishlist()
    console.log('Caert State', cartState)
    const handleUserLogout = () => {
        localStorage.removeItem('userToken');
        setIsLoggedIn(false)
    }
    return (
        <nav className="navbar">
            <div className="nav-logo">
                <img src={NavLogo} alt="logo" />
            </div>
            <div className="nav-items">
                <Link to="/" className="nav-link sm-title hide-md">About Us</Link>
                <Link to="/shop" className="nav-link sm-title hide-md">Shop</Link>
            </div>
            <div className="nav-space"></div>
            <div className="nav-icon-items">
                <div className="nav-search-bar hide-sm">
                    <input className="search-bar" type="text" placeholder="Search.." />
                    <i className="fa fa-brands fa-searchengin"></i>
                </div>
                {!isLoggedIn ? <Link to='/login'>
                    <button id="dark-bg-icon" className="btn icon-btn hide-md">
                        <i className="fa fa-solid fa-user"></i>
                    </button>
                </Link> :
                    <Link to='/logout'>
                        <button onClick={handleUserLogout} id="dark-bg-icon" className="btn icon-btn hide-md">
                            <i className="fa fas fa-solid fa-arrow-right-from-bracket logout-icon"></i>
                        </button>
                    </Link>
                }
                <Link to='/wishlist'>
                    <button id="dark-bg-icon" className="btn icon-btn pos-rel hide-md">
                        <i className="fa fa-solid fa-heart"></i>
                        {isLoggedIn && wishlistState.length > 0 && <div className="badge num-badge center-items">
                            <p className="xsm-title">{wishlistState.length > 9 ? '9+' : wishlistState.length}</p>
                        </div>}
                    </button>
                </Link>
                <Link to='/cart'>
                    <button id="dark-bg-icon" className="btn icon-btn pos-rel hide-md">
                        <i className="fas fa-shopping-cart"></i>
                        {isLoggedIn && cartState.length > 0 && <div className="badge num-badge center-items">
                            <p className="xsm-title">{cartState.length > 9 ? '9+' : cartState.length}</p>
                        </div>}
                    </button>
                </Link>
                <button id="dark-bg-icon" className="btn icon-btn show-md">
                    <i className="fas fa-solid fa-bars"></i>
                </button>
            </div>
        </nav>
    )
}

export default Navbar