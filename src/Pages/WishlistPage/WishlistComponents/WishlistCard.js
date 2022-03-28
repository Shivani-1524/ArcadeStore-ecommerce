import React from 'react'
import '../WishlistPage.css'
import KleeEarphones from "../../../Assets/Products/klee-miearphone.jfif"
import { Link } from 'react-router-dom'
const WishlistCard = ({ wishProduct }) => {
    console.log(wishProduct);
    return (
        <div className="card ver-card no-bg-color">
            <i className="close-icon grey fas fa-times-circle"></i>
            <Link to="/singleprod" state={{ id: wishProduct._id }}>
                <div className="img-container">
                    <img className="img-resp" src={KleeEarphones} alt="card image" />
                </div>
            </Link>
            <div className="text-card">
                <p className="sm-title bold">PlayStation5 Controller</p>
                <div className="mg-t-5 price-row">
                    <p className="sm-title grey-txt">Rs. 200</p>
                    <p className="sm-p grey-txt striked-txt">Rs. 400</p>
                    <p className="sm-p orange-txt">50% OFF</p>
                </div>
                <button className="btn primary-btn solid icon-left mg-t-10">
                    <i className="fas fa-shopping-cart"></i>
                    Move to Bag
                </button>
            </div>
        </div>
    )
}

export default WishlistCard