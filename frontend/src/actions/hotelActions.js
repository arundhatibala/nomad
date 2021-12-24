import axios from 'axios'

import { HOTEL_LIST_REQUEST, 
    HOTEL_LIST_SUCCESS, 
    HOTEL_LIST_FAIL, 
    HOTEL_DETAILS_REQUEST, 
    HOTEL_DETAILS_SUCCESS, 
    HOTEL_DETAILS_FAIL,
    HOTEL_CREATE_REVIEW_REQUEST, 
    HOTEL_CREATE_REVIEW_SUCCESS, 
    HOTEL_CREATE_REVIEW_FAIL} from '../constants/hotelConstants'

export const listHotels = (keyword ='') => async (dispatch) => {
    try {
        dispatch({type:HOTEL_LIST_REQUEST})
        const { data } = await axios.get('api/hotels') //is api correct, `/api/hotels?keyword=${keyword}`
        dispatch({
            type: HOTEL_LIST_SUCCESS,
            payload: data
        })
    } catch(error){
        dispatch({
            type: HOTEL_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}

export const listHotelDetails = (id) => async (dispatch) => {
    try {
        dispatch({type:HOTEL_DETAILS_REQUEST})
        const { data } = await axios.get(`/api/hotels/${id}`)
        dispatch({
            type: HOTEL_DETAILS_SUCCESS,
            payload: data
        })
    } catch(error){
        dispatch({
            type: HOTEL_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}

export const createHotelReview = (hotelId, review) => async (dispatch, getState) => {
    try {
        dispatch({type:HOTEL_CREATE_REVIEW_REQUEST})
        const {
            userLogin: {userInfo}} = getState()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            }
        }

        await axios.post(`/api/hotels/${hotelId}/reviews`, review, config)
        dispatch({
            type: HOTEL_CREATE_REVIEW_SUCCESS,
        })
    } catch(error){
        dispatch({
            type: HOTEL_CREATE_REVIEW_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}