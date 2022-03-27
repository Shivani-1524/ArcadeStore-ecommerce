const axios = require('axios');
const encodedToken = localStorage.getItem('userToken')

const addToCart = async (cartProduct) => {
    const res = await axios({
        maethod: "post",
        url: "/api/user/cart",
        headers: {
            authorization: encodedToken
        },
        data: {
            cart: cartProduct
        }
    })

    console.log(res)
}

export { addToCart }