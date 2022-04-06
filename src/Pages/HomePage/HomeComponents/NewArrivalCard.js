import React from 'react'
import '../HomePage.css'
import { Link } from 'react-router-dom'

const NewArrivalCard = ({ imgSrc, imgAlt, title, filterGameKey, filterCatKey }) => {
    return (
        <div className="img-wrapper pos-rel">
            <div className="grid-txt-overlay pos-abs">
                <p className="rg-title light-txt center-txt">{title}</p>
                <Link to="/shop" state={{ gameEnabled: filterGameKey, filterEnabled: filterCatKey }}>
                    <button className="btn subtle-btn mg-t-10 center-items">Explore <i className="fa fa-solid fa-arrow-right"></i>
                    </button>
                </Link>
            </div>
            <img className="img-resp" src={imgSrc} alt={imgAlt} />
        </div>
    )
}

export default NewArrivalCard