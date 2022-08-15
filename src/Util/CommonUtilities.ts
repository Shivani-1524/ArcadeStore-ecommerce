import {Product} from '../backend/db/products'
import { ToastPayload } from '../Reducers/ToastReducer'


const findProductInList = (productId:string, listState:object) => {
    const productList = Object.values(listState)[0]
    return productList.some((productItem : Product) => productItem._id === productId)
}

type AddToListType = {
    productDetails: Product;
    listState: object;
    addProductFn: (productDetails: Product)=> Promise<{ 
        data: Product[] | object; success: boolean; errMessage: string; } >;
}

function isArrayOfProducts(inputObject : Product[] | null | object) : inputObject is Product[] {
    if(inputObject as Product[]) return true
    return false
    }

const handleAddToList = async ({ productDetails, listState, addProductFn } : AddToListType) => {
    const foundId = findProductInList(productDetails._id, listState)
    if (!foundId) {
        console.log("PRODUCT DEETS", productDetails)
        try{
            const {data, success} = await addProductFn(productDetails)
            if(success){
                return { updatedList: data, toastMsg: 'Added', success: true }
            }
            const errMsg = {errMessage: data}
            throw errMsg
        }catch(err){
            console.error(err)
            return {updatedList: null, toastMsg: 'unexpected error ocurred', success: false}
        }
    } else {
        let newList = Object.values(listState)[0]
        return { updatedList: newList, toastMsg: 'Exists' }
    }
}


const setToast = (msg:string, type:string): ToastPayload => {
    if (type === 'Wishlist') {
        switch (msg) {
            case 'Added':
                return {
                    title: 'Moved To Your Cart',
                    toastType: 'TOAST_SUCCESS'
                }
            case 'Exists':
                return {
                    title: 'Already Present in Your Cart',
                    toastType: 'TOAST_WARNING'
                }
            default:
                break;
        }
    } else if (type === 'Cart') {
        switch (msg) {
            case 'Added':
                return {
                    title: 'Added To Cart',
                    toastType: 'TOAST_SUCCESS'
                }
            case 'Exists':
                return {
                    title: 'Already Present in Your Cart',
                    toastType: 'TOAST_WARNING'
                }
            default:
                break;
        }
    }
    else if (type === 'ToWishlist') {
        switch (msg) {
            case 'Added':
                return {
                    title: 'Moved To Your Wishlist',
                    toastType: 'TOAST_SUCCESS'
                }
            case 'Removed':
                return {
                    title: 'Removed from Wishlist',
                    toastType: 'TOAST_WARNING'
                }
            case 'Exists':
                return {
                    title: 'Already Present in Your Wishlist',
                    toastType: 'TOAST_WARNING'
                }
            default:
                break;
        }
    }
    return {
        title: 'unexpected error ocurred',
        toastType: 'TOAST_ERROR'
    }
}


export { findProductInList, handleAddToList, setToast, isArrayOfProducts }