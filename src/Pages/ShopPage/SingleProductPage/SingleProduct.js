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
                console.log(res)
            } catch (err) {
                console.log(err)
            }

        })()

    }, [])
    return (
        <div>
            <Navbar />
            <div className="singleproduct-grid">
                <div className="img-sprod">
                    <img src="../Assets/Products/chongung-poster.jfif" alt="product image" />
                </div>
                <div className="prod-data">
                    <h1 className="rg-title">Lorem Ipsum</h1>
                    <p className="rg-p grey-txt">Caption content for image of product</p>
                    <div className="rating-row bdg white-rating">
                        <i className="badge-star fas fa-star"></i>
                        <p className="xsm-title">4.3</p>
                        <i className="badge-circle fas fa-circle"></i>
                        <p className="review-num xsm-p grey-txt">73 Ratings</p>
                    </div>
                    <div className="mg-t-5 price-row">
                        <p className="md-title">Rs. 200</p>
                        <p className="sm-p grey-txt striked-txt">Rs. 400</p>
                        <p className="sm-p orange-txt">50% OFF</p>
                    </div>
                    <p className="green-txt bold">Inclusive of all taxes</p>
                    <div>
                        <p className="sm-p">Get it by Fri, Mar 04 - 600116</p>
                        <p className="sm-p">Seller: <span className="bold">KESHVI FASHION LLP</span></p>
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
                    <p className="sm-title mg-t-20">PRODUCT DETAILS</p>
                    <p className="rg-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corporis ad perferendis
                        alias
                        assumenda
                        error, modi, animi distinctio ea natus nostrum! Optio enim velit earum molestias beatae nihil,
                        ducimus
                        autem!
                        assumenda
                        error, modi, animi distinctio ea natus nostrum! Optio enim velit earum molestias beatae nihil,
                        ducimus
                        autem!
                        assumenda
                        error, modi, animi distinctio ea natus nostrum! Optio enim velit earum molestias beatae nihil,
                        ducimus
                        autem!</p>
                </div>
            </div>
        </div>
    )
}

export { SingleProduct }