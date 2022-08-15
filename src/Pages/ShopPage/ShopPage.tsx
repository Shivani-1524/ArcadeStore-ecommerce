import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import "./ShopPage.css"
import { useWishlist } from '../../Contexts/WishlistProvider'
import { Navbar, ProductCard, Sidenav, useFilter, useFilterFunc, filterCategories, sortItems, searchItems, outOfStockFilter, priceFilter, filterByGameCategory } from './index'
import { initProductState, Product } from '../../backend/db/products'

const ShopPage = () => {
    interface LocationStateProps{
        filterEnabled?: string;
        gameEnabled?: string;
    }

    const initShopData = [initProductState]

    const { wishlistState: { wishlistItems } } = useWishlist()
    const [shopData, setShopData] = useState<Product[]>(initShopData);
    const { filteredState } = useFilter()
    const locationData = useLocation().state as LocationStateProps;
    const filterEnabled = locationData?.filterEnabled;
    const gameEnabled = locationData?.gameEnabled;
    const filterFuncArr = [filterCategories, filterByGameCategory, sortItems, searchItems, outOfStockFilter, priceFilter]
    // eslint-disable-next-line react-hooks/rules-of-hooks
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
                <Sidenav enabledFilter={filterEnabled ? filterEnabled : ''} enabledGame={gameEnabled ? gameEnabled : ''} />
                <section className="products-section">
                    {shopData && filteredProductList.map((product : Product) => {
                        const itemInWishlist = wishlistItems.length !== 0 && wishlistItems.some(wishlistItem => product._id === wishlistItem._id)
                        return <ProductCard productdetails={product} key={product._id} inWishlist={itemInWishlist} />
                    })}
                </section>
            </div>
        </div>
    )
}

export default ShopPage 