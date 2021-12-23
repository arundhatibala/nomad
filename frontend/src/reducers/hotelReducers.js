import { HOTEL_LIST_REQUEST, 
    HOTEL_LIST_SUCCESS, 
    HOTEL_LIST_FAIL, 
    HOTEL_DETAILS_REQUEST, 
    HOTEL_DETAILS_SUCCESS, 
    HOTEL_DETAILS_FAIL, 
    HOTEL_CREATE_REVIEW_REQUEST, 
    HOTEL_CREATE_REVIEW_SUCCESS, 
    HOTEL_CREATE_REVIEW_FAIL,
    HOTEL_CREATE_REVIEW_RESET
} from '../constants/hotelConstants'

export const hotelListReducer = (state = { hotels: [] }, action) => {
    switch(action.type){
        case HOTEL_LIST_REQUEST:
            return { loading: true, hotels: [] }
        case HOTEL_LIST_SUCCESS:
            return { loading: false, hotels: action.payload }
        case HOTEL_LIST_FAIL:
            return { loading: false, error: action.payload }
        default: 
        return state
    }
}

export const hotelDetailsReducer = (state = { hotel: { reviews: [] } }, action) => {
    switch(action.type){
        case HOTEL_DETAILS_REQUEST:
            return { loading: true, ...state }
        case HOTEL_DETAILS_SUCCESS:
            return { loading: false, hotel: action.payload }
        case HOTEL_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default: 
        return state
    }
}

export const hotelReviewCreateReducer = (state = { }, action) => {
    switch(action.type){
        case HOTEL_CREATE_REVIEW_REQUEST:
            return { loading: true}
        case HOTEL_CREATE_REVIEW_SUCCESS:
            return { loading: false, success: true}
        case HOTEL_CREATE_REVIEW_FAIL:
            return { loading: false, error: action.payload }
        case HOTEL_CREATE_REVIEW_RESET:
            return {}
        default: 
        return state
    }
}