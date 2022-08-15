import React from 'react'
import '../HomePage.css'

type ComponentProps = {
    imgSrc: string;
    altTxt: string;
}
const BrandImage = ({ imgSrc, altTxt }: ComponentProps) => {
    return (
        <div className="brand-img-wrapper">
            <img className="img-resp" src={imgSrc} alt={altTxt} />
        </div>
    )
}

export default BrandImage