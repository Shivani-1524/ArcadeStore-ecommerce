import React from 'react'
import Navbar from "../../Components/Navbar/Navbar"
import ProductCard from '../../Components/ProductCard/ProductCard'
import Sidenav from '../../Components/Sidenav/Sidenav'
import "./ShopPage.css"
import { useState, useEffect } from 'react'
import { useFilter } from '../../Contexts/filter-controller'
import { useFilterFunc, filterCategories, sortItems, searchItems, outOfStockFilter, priceFilter, filterByGameCategory } from '../../Util/filter-utilities.js'

// import { v4 as uuid } from "uuid";
// import ZhongliPoster from "../../Assets/Products/zhongli-poster.jfif"
const ShopPage = () => {

    const [shopData, setShopData] = useState(false);
    const { filteredState } = useFilter()
    const filterFuncArr = [filterCategories, filterByGameCategory, sortItems, searchItems, outOfStockFilter, priceFilter]
    const filteredProductList = shopData && useFilterFunc(filterFuncArr, shopData, filteredState)
    useEffect(() => {
        (async () => {
            try {
                const res = await fetch("api/products", {
                    method: "GET",
                })
                const productsData = await res.json()
                setShopData(productsData.products)
            } catch (err) {
                console.log(err)
            }
        })()

    }, [])

    return (
        <div>
            <Navbar />
            <div className="products-layout">
                <Sidenav />
                <section className="products-section">
                    {shopData && filteredProductList.map((product) => {
                        return <ProductCard productdetails={product} key={product._id} />
                    })}
                </section>
            </div>
        </div>
    )
}

export default ShopPage