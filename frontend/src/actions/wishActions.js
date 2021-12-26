import axios from 'axios'
import {WISH_ADD_ITEM, WISH_REMOVE_ITEM} from '../constants/wishConstants'

export const addToWish = (id) => async(dispatch, getState) => {
    const { data } = await axios.get(`/api/hotels/${id}`)
    dispatch( {
        type: WISH_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image_room,
            price: data.price,
            quantity : data.qty, 
            address: data.address,
        }
    } )

    localStorage.setItem('wishItems', JSON.stringify(getState().wish.wishItems))
}

export const removeFromWish = (id) => (dispatch, getState) => {
    dispatch({
        type: WISH_REMOVE_ITEM,
        payload: id,
    })
    localStorage.setItem('wishItems', JSON.stringify(getState().wish.wishItems))
}