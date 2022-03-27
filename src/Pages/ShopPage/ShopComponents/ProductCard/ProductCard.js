import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom"
import './ProductCard.css';
import { addToCart } from '../../../../Util/CartUtilities';

const ProductCard = (props) => {
    const [toggleLike, setToggleLike] = useState(false);

    const { _id, title, originalprice, currentprice, discount, reviewsnum, rating, imgSrc, inStock, isFav, altTxt } = props.productdetails;

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
                <button onClick={() => setToggleLike(prev => !prev)} className="btn icon-btn pos-abs top-right star-toggle-btn">
                    {toggleLike || isFav ? <i className="fas fa-star filled"></i> : <i className="fas fa-star"></i>}
                </button>
            </div>

            <div className="text-card">
                <p className="sm-title bold">{title}</p>
                <div className="mg-t-5 price-row">
                    <p className="sm-title grey-txt">Rs. {currentprice}</p>
                    {discount && <p className="sm-p grey-txt striked-txt">Rs. {originalprice}</p>}
                    {discount && <p className="sm-p orange-txt">{discount}% OFF</p>}
                </div>
                <button onClick={() => addToCart(props.productdetails)} className="btn primary-btn solid icon-left mg-t-10">
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