import { addToCart, getCartItems, reduceProductQty, addProductQty, removeFromCart } from "../../Util/CartUtilities";
import * as axios from 'axios';

jest.mock('axios')

describe("test get cart service", () => {
    test("should get cart items if successful", async () => {
        axios.mockResolvedValue({
            status: 200,
            data: {
                cart: [{
                    title: "Soesic Black Hoodie",
                    game: "showApex",
                    categoryName: "showClothing",
                    inStock: true,
                    currentprice: 2000,
                    discount: 20,
                    originalprice: 2500,
                    rating: 4.6,
                    isFav: false,
                    altTxt: 'apex legends hoodie'
                }]
            }
        })
        const response = await getCartItems();
        expect(response).toEqual({
            success: true,
            errMessage: '',
            data: [{
                title: "Soesic Black Hoodie",
                game: "showApex",
                categoryName: "showClothing",
                inStock: true,
                currentprice: 2000,
                discount: 20,
                originalprice: 2500,
                rating: 4.6,
                isFav: false,
                altTxt: 'apex legends hoodie'
            }]
        })
    })

    test("should catch error if fetching cart fails", async () => {
        axios.mockRejectedValue({ isAxiosError: true, data: { errorMessage: "cart items cannot be fetched" } })
        const res = await getCartItems()
        expect(res).toEqual({
            data: { isAxiosError: true, data: { errorMessage: "cart items cannot be fetched" } },
            success: false,
            errMessage: "cart items cannot be fetched"
        });
    })

    test("should throw error if status code is not ok", async () => {
        axios.mockResolvedValue({
            status: 400,
            data: {
                cart: [{
                    title: "Soesic Black Hoodie",
                    game: "showApex",
                    categoryName: "showClothing",
                }]
            }
        })
        const res = await getCartItems()
        expect(res).toEqual({
            data: { code: 400 },
            success: false,
            errMessage: "cart items cannot be fetched"
        })
    })


})

describe("test add to cart", () => {
    test("should add product to cart", async () => {
        axios.mockResolvedValue({
            status: 200,
            data: {
                cart: [{
                    title: "Soesic Black Hoodie",
                    game: "showApex",
                    categoryName: "showClothing",
                    inStock: true,
                }]
            }
        })

        const res = await addToCart({
            title: "Soesic Black Hoodie",
            game: "showApex",
            categoryName: "showClothing",
            inStock: true,
        })

        expect(res).toEqual(
            {
                data: [{
                    title: "Soesic Black Hoodie",
                    game: "showApex",
                    categoryName: "showClothing",
                    inStock: true,
                }],
                success: true,
                errMessage: '',
            })
    })

    test("should catch error if adding to cart fails", async () => {
        axios.mockRejectedValue({ isAxiosError: true, data: { errorMessage: "adding to cart failed" } })
        const res = await addToCart()
        expect(res).toEqual({
            data: { isAxiosError: true, data: { errorMessage: "adding to cart failed" } },
            success: false,
            errMessage: "cart items cannot be added"
        });
    })

    test("should throw error if status code is not ok", async () => {
        axios.mockResolvedValue({
            status: 400,
            data: {
                cart: [{
                    title: "Soesic Black Hoodie",
                    game: "showApex",
                    categoryName: "showClothing",
                }]
            }
        })
        const res = await addToCart()
        expect(res).toEqual({
            data: { code: 400 },
            success: false,
            errMessage: "cart items cannot be added"
        })
    })
})

describe("test remove from cart", () => {
    test("should remove product from cart", async () => {
        axios.mockResolvedValue({
            status: 200,
            data: {
                cart: [{
                    _id: 333,
                    title: "Item 2",
                    game: "showApex",
                    categoryName: "showClothing",
                    inStock: true,
                }]
            }
        })

        const res = await removeFromCart({
            _id: 1234,
            title: "Soesic Black Hoodie",
            game: "showApex",
            categoryName: "showClothing",
            inStock: true,
        })

        expect(res).toEqual(
            {
                data: [{
                    _id: 333,
                    title: "Item 2",
                    game: "showApex",
                    categoryName: "showClothing",
                    inStock: true,
                }],
                success: true,
                errMessage: '',
            })
    })

    test("should catch error if adding to cart fails", async () => {
        axios.mockRejectedValue({ isAxiosError: true, data: { errorMessage: "removing from cart failed" } })
        const res = await removeFromCart({
            _id: 333,
            title: "Item 2",
            game: "showApex",
            categoryName: "showClothing",
            inStock: true,
        })
        expect(res).toEqual({
            data: { isAxiosError: true, data: { errorMessage: "removing from cart failed" } },
            success: false,
            errMessage: "cart items couldnt be removed. please try again"
        });
    })

    test("should throw error if status code is not ok", async () => {
        axios.mockResolvedValue({
            status: 400,
            data: {
                cart: [{
                    _id: 3223,
                    title: "Item 2",
                    game: "showApex",
                    categoryName: "showClothing",
                    inStock: true,
                }]
            }
        })
        const res = await removeFromCart({
            _id: 333,
            title: "Item 2",
            game: "showApex",
            categoryName: "showClothing",
            inStock: true,
        })
        expect(res).toEqual({
            data: { code: 400 },
            success: false,
            errMessage: "cart items couldnt be removed. please try again"
        })
    })
})

describe("test update cart item quantity", () => {
    test("should increase cart item quantity", async () => {
        axios.mockResolvedValue({
            status: 200,
            data: {
                cart: [{
                    _id: 333,
                    title: "Item 2",
                    qty: 5,
                    game: "showApex",
                    categoryName: "showClothing",
                    inStock: true,
                }]
            }
        })

        const res = await addProductQty({
            _id: 333,
            title: "Item 2",
            qty: 4,
            game: "showApex",
            categoryName: "showClothing",
            inStock: true,
        })

        expect(res).toEqual(
            {
                data: [{
                    _id: 333,
                    title: "Item 2",
                    qty: 5,
                    game: "showApex",
                    categoryName: "showClothing",
                    inStock: true,
                }],
                success: true,
                errMessage: '',
            })
    })
    test("should reduce cart tem quantity", async () => {
        axios.mockResolvedValue({
            status: 200,
            data: {
                cart: [{
                    _id: 333,
                    title: "Item 2",
                    qty: 3,
                    game: "showApex",
                    categoryName: "showClothing",
                    inStock: true,
                }]
            }
        })

        const res = await reduceProductQty({
            _id: 333,
            title: "Item 2",
            qty: 4,
            game: "showApex",
            categoryName: "showClothing",
            inStock: true,
        })

        expect(res).toEqual(
            {
                data: [{
                    _id: 333,
                    title: "Item 2",
                    qty: 3,
                    game: "showApex",
                    categoryName: "showClothing",
                    inStock: true,
                }],
                success: true,
                errMessage: '',
            })
    })

    test("should catch error if adding qty fails", async () => {
        axios.mockRejectedValue({ isAxiosError: true, data: { errorMessage: "increasing cart item quantity failed" } })
        const res = await addProductQty({
            _id: 333,
            title: "Item 2",
            qty: 2,
            game: "showApex",
            categoryName: "showClothing",
            inStock: true,
        })
        expect(res).toEqual({
            data: { isAxiosError: true, data: { errorMessage: "increasing cart item quantity failed" } },
            success: false,
            errMessage: "quantity couldnt be updated. please try again."
        });
    })

    test("should catch error if reducing qty fails", async () => {
        axios.mockRejectedValue({ isAxiosError: true, data: { errorMessage: "reducing cart item quantity failed" } })
        const res = await reduceProductQty({
            _id: 333,
            title: "Item 2",
            qty: 2,
            game: "showApex",
            categoryName: "showClothing",
            inStock: true,
        })
        expect(res).toEqual({
            data: { isAxiosError: true, data: { errorMessage: "reducing cart item quantity failed" } },
            success: false,
            errMessage: "quantity couldnt be updated. please try again."
        });
    })

    test("should throw error if add qty status not ok", async () => {
        axios.mockResolvedValue({
            status: 400,
            data: {
                cart: [{
                    _id: 3223,
                    title: "Item 2",
                    game: "showApex",
                    categoryName: "showClothing",
                    inStock: true,
                    qty: 4,
                }]
            }
        })
        const res = await addProductQty({
            _id: 3223,
            title: "Item 2",
            game: "showApex",
            categoryName: "showClothing",
            inStock: true,
            qty: 3,
        })
        expect(res).toEqual({
            data: { code: 400 },
            success: false,
            errMessage: "quantity couldnt be updated. please try again."
        })
    })

    test("should throw error if status code is not ok", async () => {
        axios.mockResolvedValue({
            status: 400,
            data: {
                cart: [{
                    _id: 3223,
                    title: "Item 2",
                    game: "showApex",
                    categoryName: "showClothing",
                    inStock: true,
                    qty: 2,
                }]
            }
        })
        const res = await reduceProductQty({
            _id: 3223,
            title: "Item 2",
            game: "showApex",
            categoryName: "showClothing",
            inStock: true,
            qty: 3,
        })
        expect(res).toEqual({
            data: { code: 400 },
            success: false,
            errMessage: "quantity couldnt be updated. please try again."
        })
    })
})