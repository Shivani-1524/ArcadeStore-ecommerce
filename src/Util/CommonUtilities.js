const findProductInList = (productId, productList) => productList.some(productItem => productItem._id === productId)
const handleAddToList = async ({ productDetails, listState, addProductFn }) => {
    const foundId = findProductInList(productDetails._id, listState)
    if (!foundId) {
        let newList = await addProductFn(productDetails)
        return { updatedList: newList, toastMsg: 'Added' }
    } else {
        let newList = await listState
        return { updatedList: newList, toastMsg: 'Exists' }
    }
}
const setToast = (msg, type) => {
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
        }
    }
    else if (type === 'ToWishlist') {
        switch (msg) {
            case 'Added':
                return {
                    title: 'Moved To Your Wishlist',
                    toastType: 'TOAST_SUCCESS'
                }
            case 'Exists':
                return {
                    title: 'Already Present in Your Wishlist',
                    toastType: 'TOAST_WARNING'
                }
        }
    }
}
export { findProductInList, handleAddToList, setToast }