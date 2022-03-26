import React from 'react';
import { Link } from "react-router-dom"
import NavLogo from "../../Assets/nav-logo.png"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-logo">
                <img src={NavLogo} alt="logo" />
            </div>
            <div className="nav-items">
                <Link to="/" className="nav-link sm-title hide-md">About Us</Link>
                <a className="nav-link sm-title hide-md" href="./Products/products.html">Shop</a>
            </div>
            <div className="nav-space"></div>
            <div className="nav-icon-items">
                <div className="nav-search-bar hide-sm">
                    <input className="search-bar" type="text" placeholder="Search.." />
                    <i className="fa fa-brands fa-searchengin"></i>
                </div>
                <a href="Authentication/login.html">
                    <button id="dark-bg-icon" className="btn icon-btn hide-md">
                        <i className="fa fa-solid fa-user"></i>
                    </button>
                </a>
                <a href="Wishlist/wishlist.html">
                    <button id="dark-bg-icon" className="btn icon-btn hide-md">
                        <i className="fa fa-solid fa-heart"></i>
                    </button>
                </a>
                <a href="Cart/cart-page.html">
                    <button id="dark-bg-icon" className="btn icon-btn hide-md">
                        <i className="fas fa-shopping-cart"></i>
                    </button>
                </a>
                <button id="dark-bg-icon" className="btn icon-btn show-md">
                    <i className="fas fa-solid fa-bars"></i>
                </button>
            </div>
        </nav>
    )
}

export default Navbar