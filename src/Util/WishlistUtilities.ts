import axios from 'axios'
import {Product} from '../backend/db/products'

const addToWishlist = async (wishlistProduct : Product) => {
    const encodedToken = localStorage.getItem('userToken')
    try{
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
        if(res.status === 200 || res.status === 201){
            return{
                data: res.data.wishlist,
                success: true,
                errMessage: '',
            }
        }
        const errorObj =  { code : res.status};
        throw errorObj;
    }
    catch(err){
        console.log(err)  
        return { 
            data: err,
            success: false,
            errMessage: "wishlist items cannot be added" };
    }
   
}

const removeFromWishlist = async (wishlistProduct: Product) => {
    try{
        const encodedToken = localStorage.getItem('userToken')
        const res = await axios({
            method: "DELETE",
            url: `/api/user/wishlist/${wishlistProduct._id}`,
            headers: {
                authorization: encodedToken
            }
        })
        if(res.status === 200 || res.status === 201){
            return{
                data: res.data.wishlist,
                success: true,
                errMessage: '',
            }
        }
        const errorObj =  { code : res.status};
        throw errorObj;
    }
    catch(err){
        console.log(err)  
        return { 
            data: err,
            success: false,
            errMessage: "wishlist items cannot be removed" };
    }
   
}

export { addToWishlist, removeFromWishlist }
