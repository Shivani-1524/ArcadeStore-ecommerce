import { Product } from '../../../backend/db/products';
import { Link } from 'react-router-dom'
import { addProductQty, reduceProductQty, removeFromCart, addToWishlist, handleAddToList, setToast } from '../../../Util/index';
import { useCart, useWishlist, useToast } from '../../../Contexts/index'

type CartProductProps = {
    cartItem: Product
}
const CartProduct = ({ cartItem }: CartProductProps) => {
    const { title, imgSrc, altTxt, subtitle, qty, reviewsnum, currentprice, discount, originalprice, rating, shortdesc, _id } = cartItem
    const { cartDispatch } = useCart()
    const { wishlistState, wishlistDispatch } = useWishlist()
    const { dispatchToast } = useToast()

    const updateCartList = async (product: Product, getUpdatedCart:(p : Product)=>Promise<any>) => {
        const {data, success, errMessage} = await getUpdatedCart(product)
        if(success){
            cartDispatch({ type: 'UPDATE_CART', payload: data })
        }else{
            dispatchToast({type:"ADD_TOAST", payload: {
                toastType:"TOAST_ERROR",
                title: errMessage
            }})
        }
    }

    const moveFromCart = async (cartProduct: Product) => {
        const { updatedList, toastMsg } = await handleAddToList({ addProductFn: addToWishlist, listState: wishlistState, productDetails: cartProduct })
        toastMsg !== "Exists" && updateCartList(cartProduct, removeFromCart)
        wishlistDispatch({ type: 'UPDATE_WISHLIST', payload: updatedList })
        const toastProps = setToast(toastMsg, 'ToWishlist')
        dispatchToast({
            type: 'ADD_TOAST', payload: toastProps
        })
    }

    return (

        <div className="card hor-card mg-t-30">
            <i onClick={() => updateCartList(cartItem, removeFromCart)} className="close-icon fas fa-times-circle"></i>
            <Link to="/singleprod" state={{ id: _id }}>
                <div className="img-container">
                    <img className='img-resp' src={imgSrc} alt={altTxt} />
                </div>
            </Link>
            <div className="text-card">
                <p className="md-booky-title bold">{title}</p>
                <p className="xsm-p grey-txt">{subtitle}</p>
                <p className="sm-p mg-t-10">{shortdesc}</p>
                <div className="review-row mg-t-15">
                    <div className="rating-row">
                        <i className="fas fa-star"></i>
                        <p className="sm-title">{rating}</p>
                    </div>
                    <i className="fas fa-circle"></i>
                    <p className="review-num xsm-p grey-txt">({reviewsnum})</p>
                </div>
                <div className="mg-t-5 price-row">
                    <p className="md-title">Rs. {currentprice}</p>
                    {discount && <p className="sm-p grey-txt striked-txt">Rs. {originalprice}</p>}
                    {discount && <p className="sm-p orange-txt">{discount}% OFF</p>}

                </div>
                <div className="card-btn-row mg-t-15">
                    <button onClick={() => moveFromCart(cartItem)} className="btn warning-btn solid sm-btn">Move to Wishlist</button>
                    <div className="flex-row sm qty-row">
                        <p className="xsm-p">Quantity:</p>
                        <button onClick={() => qty !== 1 && updateCartList(cartItem, reduceProductQty)}><i className="fa fa-solid fa-minus"></i></button>
                        <input disabled={true} type="text" value={qty} />
                        <button onClick={() => updateCartList(cartItem, addProductQty)}>
                            <i className="fa fa-solid fa-plus"></i></button>
                    </div>
                </div>
            </div>
        </div>


    )
}

export { CartProduct }