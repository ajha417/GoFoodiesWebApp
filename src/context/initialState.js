import { fetchCart, fetchOrderData, fetchUser } from "../utils/fetchLocalStorageData"

const userInfo = fetchUser();
const cartInfo = fetchCart();
const orderInfo = fetchOrderData();
export const initialState = {
    user: userInfo,
    foodItems:null,
    cartShow:false,
    cartItems:cartInfo,
    orderItems:orderInfo
}