import React from 'react'
import '../HomePage.css'
import BrandImage from '../HomeComponents/BrandImage'
import { Tencent, Sony, EA, Intel, Nvidea } from './index'

const BrandsSection = () => {
    const featuredBrands = [{
        imgSrc: Nvidea,
        altTxt: "nvidea brand logo"
    }, {
        imgSrc: Intel,
        altTxt: 'intel brand logo'
    }, {
        imgSrc: EA,
        altTxt: 'Electronice Arts Games logo'
    }, {
        imgSrc: Tencent,
        altTxt: 'Tencent brand logo'
    }, {
        imgSrc: Sony,
        altTxt: 'Sony Brand logo'
    },
    ]
    return (
        <section className="section deals-container mg-t-70">
            <h1 className="new-font center-txt">
                FEATURED BRANDS
            </h1>
            <div className="flex-row center-row mg-t-40">
                {featuredBrands.map((brand, index) =>
                    <BrandImage key={index} imgSrc={brand.imgSrc} altTxt={brand.altTxt} />
                )}
            </div>
        </section>
    )
}

export default BrandsSection