import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import Navbar from '../../../Components/Navbar/Navbar'
import './SingleProduct.css'
const axios = require('axios');

const SingleProduct = (props) => {

    const [productData, setProductData] = useState(false);
    const location = useLocation()


    useEffect(() => {
        const prodId = location.state.id;
        (async () => {
            try {
                const res = await axios.get(`/api/products/${prodId}`)
                setProductData(res.data.product)
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
                        <img className="img-sprod img-resp" src={productData.imgSrc} alt={productData.altTxt} />
                    </div>
                    <div className="prod-data">
                        <h1 className="rg-title">{productData.title}</h1>
                        <p className="rg-p grey-txt">{productData.subtitle}</p>
                        <div className="rating-row bdg white-rating">
                            <i className="badge-star fas fa-star"></i>
                            <p className="xsm-title">{productData.rating}</p>
                            <i className="badge-circle fas fa-circle"></i>
                            <p className="review-num xsm-p grey-txt">{productData.reviewsnum} Ratings</p>
                        </div>
                        <div className="mg-t-5 price-row">
                            <p className="md-title">Rs. {productData.currentprice}</p>
                            <p className="sm-p grey-txt striked-txt">Rs. {productData.originalprice}</p>
                            <p className="sm-p orange-txt">{productData.discount}% OFF</p>
                        </div>
                        <p className="green-txt bold">Inclusive of all taxes</p>
                        {!productData.inStock && <p className="green-txt bold">Product Out Of Stock</p>}
                        <div>
                            <p className="sm-p">Get it by Fri, Mar 04 - 600116</p>
                            {productData.inStock && <p className="sm-p">Get it by Fri, Mar 04 - 600116</p>}
                            <p className="sm-p">Seller: <span className="bold">{productData.seller.toUpperCase()}</span></p>
                        </div>
                        <div className="btn-section">

                            <button className="btn warning-outlined-btn icon-left mg-t-10">
                                <i className="far fa-heart"></i>
                                Add to WishList
                            </button>
                            <button className="btn primary-btn solid icon-left mg-t-10">
                                <i className="fas fa-shopping-cart"></i>
                                Add to Bag
                            </button>
                        </div>
                        <p className="sm-title mg-t-20">PRODUCT DESCRIPTION</p>
                        <p className="rg-p">{productData.description}</p>
                        <p className="sm-title mg-t-20">PRODUCT SPECS</p>
                        <p className="rg-p">{productData.specs}</p>
                    </div>
                </div>
            }
        </div>

    )
}

export { SingleProduct }