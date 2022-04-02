const findProductInList = (productId, productList) => productList.some(productItem => productItem._id === productId)
const handleAddToList = async ({ productDetails, listState, addProductFn }) => {
    const foundId = findProductInList(productDetails._id, listState)
    if (!foundId) {
        return await addProductFn(productDetails)
    } else {
        console.log("product already in cart. update qty in cart page.")
        return await listState
    }
}
export { findProductInList, handleAddToList }