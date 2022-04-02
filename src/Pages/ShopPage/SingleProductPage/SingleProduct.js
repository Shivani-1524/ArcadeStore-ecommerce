import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from '../../../Components/Navbar/Navbar'
import './SingleProduct.css'
import { addToCart, handleAddToList, addToWishlist } from '../../../Util/index';
import { useCart, useWishlist, useAuth } from '../../../Contexts/index'
const axios = require('axios');

const SingleProduct = (props) => {

    const [productData, setProductData] = useState(false);
    const { inStock, title, imgSrc, altTxt, seller, subtitle, reviewsnum, rating, description, specs, originalprice, currentprice, discount } = productData && productData?.product
    const location = useLocation()
    const { wishlistState, wishlistDispatch } = useWishlist()
    const { cartState, cartDispatch } = useCart()
    const { isLoggedIn } = useAuth()
    const navigate = useNavigate()

    const updateList = async ({ product, state, productFn, dispatchFn, dispatchType }) => {
        if (isLoggedIn) {
            const updatedList = await handleAddToList({ productDetails: product, listState: state, addProductFn: productFn })
            dispatchFn({ type: dispatchType, payload: updatedList })
        } else {
            navigate('/login')
        }
    }

    useEffect(() => {
        const prodId = location.state.id;
        (async () => {
            try {
                const res = await axios.get(`/api/products/${prodId}`)
                setProductData(res.data)
            } catch (err) {
                console.log(err)
            }
        })()
    }, [])

    return (

        <div>
            <Navbar />
            {productData &&
                <div className="singleproduct-grid">
                    <div>
                        <img className="img-sprod img-resp" src={imgSrc} alt={altTxt} />
                    </div>
                    <div className="prod-data">
                        <h1 className="rg-title">{title}</h1>
                        <p className="rg-p grey-txt">{subtitle}</p>
                        <div className="rating-row bdg white-rating">
                            <i className="badge-star fas fa-star"></i>
                            <p className="xsm-title">{rating}</p>
                            <i className="badge-circle fas fa-circle"></i>
                            <p className="review-num xsm-p grey-txt">{reviewsnum} Ratings</p>
                        </div>
                        <div className="mg-t-5 price-row">
                            <p className="md-title">Rs. {currentprice}</p>
                            <p className="sm-p grey-txt striked-txt">Rs. {originalprice}</p>
                            <p className="sm-p orange-txt">{discount}% OFF</p>
                        </div>
                        <p className="green-txt bold">Inclusive of all taxes</p>
                        {!inStock && <p className="green-txt bold">Product Out Of Stock</p>}
                        <div>
                            {/* <p className="sm-p">Get it by Fri, Mar 04 - 600116</p> */}
                            {inStock && <p className="sm-p">Get it by Fri, Mar 04 - 600116</p>}
                            <p className="sm-p">Seller: <span className="bold">{seller.toUpperCase()}</span></p>
                        </div>
                        <div className="btn-section">

                            <button onClick={() =>
                                updateList({
                                    product: productData.product,
                                    state: wishlistState,
                                    productFn: addToWishlist,
                                    dispatchFn: wishlistDispatch,
                                    dispatchType: 'UPDATE_WISHLIST'
                                })}
                                className="btn warning-outlined-btn icon-left mg-t-10">
                                <i className="far fa-heart"></i>
                                Add to WishList
                            </button>
                            <button onClick={() => updateList({
                                product: productData.product,
                                state: cartState,
                                productFn: addToCart,
                                dispatchFn: cartDispatch,
                                dispatchType: 'UPDATE_CART'
                            })} className="btn primary-btn solid icon-left mg-t-10">
                                <i className="fas fa-shopping-cart"></i>
                                Add to Bag
                            </button>
                        </div>
                        <p className="sm-title mg-t-20">PRODUCT DESCRIPTION</p>
                        <p className="rg-p">{description}</p>
                        <p className="sm-title mg-t-20">PRODUCT SPECS</p>
                        <p className="rg-p">{specs}</p>
                    </div>
                </div>
            }
        </div>

    )
}

export default SingleProduct 
