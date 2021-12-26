import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {hotelListReducer, hotelDetailsReducer, hotelReviewCreateReducer} from './reducers/hotelReducers'
import { cartReducer } from './reducers/cartReducers'
import { 
    userLoginReducer, 
    userRegisterReducer, 
    userDetailsReducer, 
    userUpdateProfileReducer 
} 
    from './reducers/userReducers'

// import {orderCreateReducer, orderDetailsReducer, orderListMyReducer } from './reducers/orderReducers'
import { wishReducer } from './reducers/wishReducers'

const reducer = combineReducers({
    hotelList: hotelListReducer,
    hotelDetails: hotelDetailsReducer,
    //hotelReviewCreate: hotelReviewCreateReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
//     orderCreate: orderCreateReducer,
//     orderDetails: orderDetailsReducer,
//     orderListMy: orderListMyReducer,
    wish: wishReducer
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const queryUserInfo = new URL(window.location.href).searchParams.get('setUserInfo')
 if(queryUserInfo) localStorage.setItem('userInfo', atob(queryUserInfo)) 
const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

// const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {}

const wishItemsFromStorage = localStorage.getItem('wishItems') ? JSON.parse(localStorage.getItem('wishItems')) : []

const initialState = {
    cart: { cartItems: cartItemsFromStorage },
    userLogin: { userInfo: userInfoFromStorage },
    wish: { wishItems: wishItemsFromStorage},
}
const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store