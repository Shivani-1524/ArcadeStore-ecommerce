const axios = require('axios');
const encodedToken = localStorage.getItem('userToken')


const addToCart = async (cartProduct) => {
    const res = await axios({
        method: "POST",
        url: "/api/user/cart",
        headers: {
            authorization: encodedToken
        },
        data: {
            product: cartProduct
        }
    })
    return res.data.cart
}


const removeFromCart = async (cartProduct) => {
    const res = await axios({
        method: "DELETE",
        url: `/api/user/cart/${cartProduct._id}`,
        headers: {
            authorization: encodedToken
        }
    })
    return res.data.cart
}

const addProductQty = async (cartProduct) => {
    const res = await axios({
        method: "POST",
        url: `/api/user/cart/${cartProduct._id}`,
        headers: {
            authorization: encodedToken
        },
        data: {
            action: {
                type: "increment"
            }
        }
    })
    return res.data.cart
}

const reduceProductQty = async (cartProduct) => {
    const res = await axios({
        method: "POST",
        url: `/api/user/cart/${cartProduct._id}`,
        headers: {
            authorization: encodedToken
        },
        data: {
            action: {
                type: "decrement"
            }
        }
    })
    return res.data.cart
}

export { addToCart, addProductQty, reduceProductQty, removeFromCart }