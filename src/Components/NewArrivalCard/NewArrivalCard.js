import React from 'react'
import '../../Pages/HomePage/HomePage.css'

const NewArrivalCard = ({ imgSrc, title }) => {
    return (
        <div className="img-wrapper pos-rel">
            <div className="grid-txt-overlay pos-abs">
                <p className="rg-title light-txt center-txt">{title}</p>
                <a href="./Products/products.html">
                    <button className="btn subtle-btn mg-t-10">Explore <i className="fa fa-solid fa-arrow-right"></i>
                    </button>
                </a>
            </div>
            <img className="img-resp" src={imgSrc} alt="Xiao Genshin Poster" />
        </div>
    )
}

export default NewArrivalCard