import React from 'react'
import '../HomePage.css'
import { Link } from 'react-router-dom'

const CategoryCard = ({ img, imgAlt, caption, filterCatKey }) => {
    return (
        <div className="category-preview">
            <Link to="/shop" state={{ filterEnabled: filterCatKey }}>
                <div className="round-img-container">
                    <img className="round-img img-resp" src={img} alt={imgAlt} />
                </div>
            </Link>
            <p className="rg-p center-txt">{caption}</p>
        </div>
    )
}

export default CategoryCard