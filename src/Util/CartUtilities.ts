import axios from 'axios'
import {Product} from '../backend/db/products'



const getCartItems =  async () => {
    const encodedToken = localStorage.getItem('userToken')
    try {
        const res = await axios({
            method: "GET",
            url: "/api/user/cart",
            headers: {
                authorization: encodedToken
            }
        })
        if(res.status === 200 || res.status === 201){
            return{
                data: res.data.cart,
                success: true,
                errMessage: '',
            }
        }
        const errorObj =  { code : res.status };
        throw errorObj;
    } catch (err) {
        console.error(err)
        return { 
            data: err,
            success: false,
            errMessage: "cart items cannot be fetched" };
    }
}

const addToCart = async (cartProduct : Product) => {
    const encodedToken = localStorage.getItem('userToken')
    try{
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
        if(res.status === 200 || res.status === 201){
            return{
                data: res.data.cart,
                success: true,
                errMessage: '',
            }
        }
        const errorObj =  { code : res.status};
        throw errorObj;
    }catch(err){
        console.error(err)
        return { 
            data: err,
            success: false,
            errMessage: "cart items cannot be added" };
    }
}

const removeFromCart = async (cartProduct : Product) => {
    const encodedToken = localStorage.getItem('userToken')
    try{
        const res = await axios({
            method: "DELETE",
            url: `/api/user/cart/${cartProduct._id}`,
            headers: {
                authorization: encodedToken
            }
        })
        if(res.status === 200 || res.status === 201){
            return{
                data: res.data.cart,
                success: true,
                errMessage: '',
            }
        }
        const errorObj =  { code : res.status};
        throw errorObj;
    }catch(err){
        console.error(err)
        return { 
            data: err,
            success: false,
            errMessage: "cart items couldnt be removed. please try again" };
    }
}

const addProductQty = async (cartProduct : Product) => {
    const encodedToken = localStorage.getItem('userToken')
    try{
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
        if(res.status === 200 || res.status === 201){
            return{
                data: res.data.cart,
                success: true,
                errMessage: '',
            }
        }
        const errorObj =  { code : res.status};
        throw errorObj;
    }catch(err){
        console.error(err)
        return { 
            data: err,
            success: false,
            errMessage: "quantity couldnt be updated. please try again." };
    }
}

const reduceProductQty = async (cartProduct : Product) => {
    const encodedToken = localStorage.getItem('userToken')
    try{
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
        if(res.status === 200 || res.status === 201){
            return{
                data: res.data.cart,
                success: true,
                errMessage: '',
            }
        }
        const errorObj =  { code : res.status};
        throw errorObj;
    }catch(err){
        console.error(err)
        return { 
            data: err,
            success: false,
            errMessage:  "quantity couldnt be updated. please try again." };
    }
    
}

export { addToCart, addProductQty, reduceProductQty, removeFromCart, getCartItems }