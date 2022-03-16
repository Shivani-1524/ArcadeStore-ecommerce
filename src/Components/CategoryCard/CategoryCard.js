import React from 'react'
import './CategoryCard.css'

const CategoryCard = ({ img, caption }) => {
    return (
        <div className="category-preview">
            <a href="./Products/products.html">
                <div className="round-img-container">
                    <img className="round-img img-resp" src={img} alt="Hoodie" />
                </div>
            </a>
            <p className="rg-p center-txt">{caption}</p>
        </div>
    )
}

export default CategoryCard