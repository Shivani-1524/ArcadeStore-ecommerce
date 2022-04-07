import axios from 'axios'
const encodedToken = localStorage.getItem('userToken')

const addToWishlist = async (wishlistProduct) => {
    const res = await axios({
        method: "POST",
        url: "/api/user/wishlist",
        headers: {
            authorization: encodedToken
        },
        data: {
            product: wishlistProduct
        }
    })
    return res.data.wishlist
}

const removeFromWishlist = async (wishlistProduct) => {
    const res = await axios({
        method: "DELETE",
        url: `/api/user/wishlist/${wishlistProduct._id}`,
        headers: {
            authorization: encodedToken
        }
    })
    return res.data.wishlist
}

export { addToWishlist, removeFromWishlist }
