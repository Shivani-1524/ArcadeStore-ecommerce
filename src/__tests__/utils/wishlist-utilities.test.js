import { addToWishlist, removeFromWishlist } from '../../Util/WishlistUtilities'
import * as axios from 'axios';

jest.mock('axios')

describe("test add To wishlist service", () => {
    test("should add to wishlist if successful", async () => {
        axios.mockResolvedValue({
            status: 200,
            data: {
                wishlist: [{
                    title: "Soesic Black Hoodie",
                    game: "showApex",
                    categoryName: "showClothing",
                    inStock: true,
                }]
            }
        })
        const response = await addToWishlist({
            title: "Soesic Black Hoodie",
            game: "showApex",
            categoryName: "showClothing",
            inStock: true,
        });
        expect(response).toEqual({
            success: true,
            errMessage: '',
            data: [{
                title: "Soesic Black Hoodie",
                game: "showApex",
                categoryName: "showClothing",
                inStock: true,
            }]
        })
    })

    test("should catch error if adding to wishlist fails", async () => {
        axios.mockRejectedValue({ isAxiosError: true, data: { errorMessage: "wishlist item cannot be added" } })
        const res = await addToWishlist({
            title: "Soesic Black Hoodie",
            game: "showApex",
            categoryName: "showClothing",
            inStock: true,
        })
        expect(res).toEqual({
            data: { isAxiosError: true, data: { errorMessage: "wishlist item cannot be added" } },
            success: false,
            errMessage: "wishlist items cannot be added"
        });
    })

    test("should throw error if status code is not ok", async () => {
        axios.mockResolvedValue({
            status: 400,
            data: {
                wishlist: [{
                    title: "Soesic Black Hoodie",
                    game: "showApex",
                    categoryName: "showClothing",
                }]
            }
        })
        const res = await addToWishlist({
            title: "Soesic Black Hoodie",
            game: "showApex",
            categoryName: "showClothing",
        })
        expect(res).toEqual({
            data: { code: 400 },
            success: false,
            errMessage: "wishlist items cannot be added"
        })
    })


})

describe("test remove from wishlist service", () => {
    test("should remove from wishlist if successful", async () => {
        axios.mockResolvedValue({
            status: 200,
            data: {
                wishlist: [{
                    _id: 222,
                    title: "Soesic Black Hoodie",
                    game: "showApex",
                    categoryName: "showClothing",
                    inStock: true,
                }]
            }
        })
        const response = await removeFromWishlist({
            _id: 123,
            title: "Soesic Black Hoodie",
            game: "showApex",
            categoryName: "showClothing",
            inStock: true,
        });
        expect(response).toEqual({
            success: true,
            errMessage: '',
            data: [{
                _id: 222,
                title: "Soesic Black Hoodie",
                game: "showApex",
                categoryName: "showClothing",
                inStock: true,
            }]
        })
    })

    test("should catch error if removing from wishlist fails", async () => {
        axios.mockRejectedValue({ isAxiosError: true, data: { errorMessage: "wishlist item cannot be removed" } })
        const res = await removeFromWishlist({
            _id: 222,
            title: "Soesic Black Hoodie",
            game: "showApex",
            categoryName: "showClothing",
        })
        expect(res).toEqual({
            data: { isAxiosError: true, data: { errorMessage: "wishlist item cannot be removed" } },
            success: false,
            errMessage: "wishlist items cannot be removed"
        });
    })

    test("should throw error if status code is not ok", async () => {
        axios.mockResolvedValue({
            status: 400,
            data: {
                wishlist: [{
                    _id: 222,
                    title: "Soesic Black Hoodie",
                    game: "showApex",
                    categoryName: "showClothing",
                }]
            }
        })
        const res = await removeFromWishlist({
            _id: 212,
            title: "Soesic Black Hoodie",
            game: "showApex",
            categoryName: "showClothing",
        })
        expect(res).toEqual({
            data: { code: 400 },
            success: false,
            errMessage: "wishlist items cannot be removed"
        })
    })


})