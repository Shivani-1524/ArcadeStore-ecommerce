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

const findCartProduct = (productId, cartList) => {
    // const foundId = cartList.findIndex(item => {
    //     console.log(item._id, "FIRST")
    //     console.log(productId, "SECOND")
    //     return item._id == productId
    // })
    const foundId = cartList.some(cartItem => cartItem._id === productId)
    return (foundId)

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

export { addToCart, findCartProduct, addProductQty, reduceProductQty, removeFromCart }