import React from 'react'
import '../../Pages/HomePage/HomePage.css'

const BrandImage = ({ imgSrc, altTxt }) => {
    return (
        <div className="brand-img-wrapper">
            <img className="img-resp" src={imgSrc} alt={altTxt} />
        </div>
    )
}

export default BrandImage