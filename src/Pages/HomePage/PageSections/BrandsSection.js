import React from 'react'
import '../HomePage.css'
import BrandImage from '../../../Components/BrandImage/BrandImage'
import Tencent from "../../../Assets/Brands/tencent.png"
import Sony from "../../../Assets/Brands/sony.png"
import Nvidea from "../../../Assets/Brands/nvidea.png"
import Intel from "../../../Assets/Brands/intel.png"
import EA from "../../../Assets/Brands/electronics-arts.png"

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
        <div className="section deals-container mg-t-70">
            <h1 className="new-font center-txt">
                FEATURED BRANDS
            </h1>
            <div className="flex-row center-row mg-t-40">
                {featuredBrands.map((brand, index) =>
                    <BrandImage key={index} imgSrc={brand.imgSrc} altTxt={brand.altTxt} />
                )}
            </div>
        </div>
    )
}

export default BrandsSection