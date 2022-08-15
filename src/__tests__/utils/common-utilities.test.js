import { findProductInList, handleAddToList, setToast, isArrayOfProducts } from '../../Util/CommonUtilities'
import { addToCart } from '../../Util/CartUtilities'
import * as axios from 'axios';

jest.mock('axios')

describe("test common utilities", () => {
    it("find if product in list test", () => {
        const isFound = findProductInList('123', { items: [{ _id: '321', name: 'item1' }, { _id: '123', name: 'item3' }] })
        expect(isFound).toBe(true)
    })
    it("find if product not in list test", () => {
        const isNotFound = findProductInList('423', { items: [{ _id: '321', name: 'item1' }, { _id: '123', name: 'item3' }] })
        expect(isNotFound).toBe(false)
    })

    it("check if not arr of products", () => {
        const prodArr = [{
            title: "Soesic Black Hoodie",
            game: "showApex",
            categoryName: "showClothing",
            inStock: true,
            currentprice: 2000,
            discount: 20,
            originalprice: 2500,
            rating: 4.6,
        }, {
            title: "Zhongli Traveller Poster",
            game: "showGenshin",
            categoryName: "showCollectibles",
            inStock: true,
            currentprice: 800,
            discount: 40,
            originalprice: 950,
            rating: 4.2,
        }, {
            title: "Klee Redmi Earphones",
            game: "showGenshin",
            categoryName: "showClothing",
            inStock: false,
            currentprice: 8000,
            rating: 2.5,
        }]
        const isProductArr = isArrayOfProducts(prodArr)
        expect(isProductArr).toBe(true)
    })

    it("handle add to list", async () => {
        axios.mockResolvedValue({
            status: 200,
            data: {
                cart: [{
                    _id: '123',
                    title: "Soesic Black Hoodie",
                    game: "showApex",
                    categoryName: "showClothing",
                    inStock: true,
                    currentprice: 2000,
                    discount: 20,
                    originalprice: 2500,
                    rating: 4.6,
                }, {
                    _id: '245',
                    title: "Klee Redmi Earphones",
                    game: "showGenshin",
                    categoryName: "showClothing",
                    inStock: false,
                    currentprice: 8000,
                    rating: 2.5,
                }]
            }
        })
        const res = await handleAddToList({
            productDetails: {
                _id: '123',
                title: "Soesic Black Hoodie",
                game: "showApex",
                categoryName: "showClothing",
                inStock: true,
                currentprice: 2000,
                rating: 4.6,
            },
            listState: {
                cartItems: [{
                    _id: '245',
                    title: "Klee Redmi Earphones",
                    game: "showGenshin",
                    categoryName: "showClothing",
                    inStock: false,
                    currentprice: 8000,
                    rating: 2.5,
                }]
            },
            addProductFn: addToCart
        })

        expect(res).toEqual({
            updatedList: [{
                _id: '123',
                title: "Soesic Black Hoodie",
                game: "showApex",
                categoryName: "showClothing",
                inStock: true,
                currentprice: 2000,
                discount: 20,
                originalprice: 2500,
                rating: 4.6,
            }, {
                _id: '245',
                title: "Klee Redmi Earphones",
                game: "showGenshin",
                categoryName: "showClothing",
                inStock: false,
                currentprice: 8000,
                rating: 2.5,
            }], toastMsg: 'Added', success: true
        })
    })

})

describe("test toast setter", () => {
    it("should return present in cart", () => {
        expect(setToast('Exists', 'Cart')).toEqual({
            title: 'Already Present in Your Cart',
            toastType: 'TOAST_WARNING'
        });
    });
    it("should return removed from wishlist", () => {
        expect(setToast('Removed', 'ToWishlist')).toEqual({
            title: 'Removed from Wishlist',
            toastType: 'TOAST_WARNING'
        });
    });
    it("should return wishlist error default", () => {
        expect(setToast('Error', 'Wishlist')).toEqual({
            title: 'unexpected error ocurred',
            toastType: 'TOAST_ERROR'
        });
    });
    it("should return cart error default", () => {
        expect(setToast('Error', 'Cart')).toEqual({
            title: 'unexpected error ocurred',
            toastType: 'TOAST_ERROR'
        });
    });
    it("should return towishlist error default", () => {
        expect(setToast('Error', 'ToWishlist')).toEqual({
            title: 'unexpected error ocurred',
            toastType: 'TOAST_ERROR'
        });
    });
})