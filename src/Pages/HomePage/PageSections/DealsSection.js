import React from 'react'
import '../HomePage.css'
import RazeDeal from "../../../Assets/HomeImages/raze-val.jfif"

const DealsSection = () => {
    return (
        <div className="section deals-container mg-t-70">
            <h1 className="new-font center-txt">
                DEAL OF THE DAY
            </h1>
            <div className="grid-layout-7030 mg-t-40 dark-bg">
                <div className="img-wrapper">
                    <img className="img-resp" src={RazeDeal} alt="Raze Valorant" />
                </div>
                <div className="text-wrapper center-items dark-bg">
                    <div className=" flex-col">
                        <p className="rg-title light-txt center-txt">Valorant Merch Upto 70% Off </p>
                        <a href="./Products/products.html">
                            <button className="btn subtle-btn mg-t-10">Explore <i className="fa fa-solid fa-arrow-right"></i>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DealsSection