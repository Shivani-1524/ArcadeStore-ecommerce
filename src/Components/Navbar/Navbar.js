import React from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom"
import NavLogo from "../../Assets/nav-logo.png"

const Navbar = () => {
    return (
        <nav class="navbar">
            <div class="nav-logo">
                <img src={NavLogo} alt="logo" />
            </div>
            <div class="nav-items">
                <Link to="/" class="nav-link sm-title hide-md" href="./">About Us</Link>
                <a class="nav-link sm-title hide-md" href="./Products/products.html">Shop</a>
            </div>
            <div class="nav-space"></div>
            <div class="nav-icon-items">
                <div class="nav-search-bar hide-sm">
                    <input class="search-bar" type="text" placeholder="Search.." />
                    <i class="fa fa-brands fa-searchengin"></i>
                </div>
                <a href="Authentication/login.html">
                    <button id="dark-bg-icon" class="btn icon-btn hide-md">
                        <i class="fa fa-solid fa-user"></i>
                    </button>
                </a>
                <a href="Wishlist/wishlist.html">
                    <button id="dark-bg-icon" class="btn icon-btn hide-md">
                        <i class="fa fa-solid fa-heart"></i>
                    </button>
                </a>
                <a href="Cart/cart-page.html">
                    <button id="dark-bg-icon" class="btn icon-btn hide-md">
                        <i class="fas fa-shopping-cart"></i>
                    </button>
                </a>
                <button id="dark-bg-icon" class="btn icon-btn show-md">
                    <i class="fas fa-solid fa-bars"></i>
                </button>
            </div>
        </nav>
    )
}

export default Navbar