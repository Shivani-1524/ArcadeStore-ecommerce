import React, { useState, useEffect } from 'react'
import "./ShopPage.css"
import { Navbar, ProductCard, Sidenav, useFilter, useFilterFunc, filterCategories, sortItems, searchItems, outOfStockFilter, priceFilter, filterByGameCategory } from './index'

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

export { ShopPage }