import { BOOKING_CREATE_FAIL, BOOKING_CREATE_REQUEST, BOOKING_CREATE_SUCCESS, BOOKING_DETAILS_FAIL, BOOKING_DETAILS_REQUEST, BOOKING_DETAILS_SUCCESS, BOOKING_LIST_MY_FAIL, BOOKING_LIST_MY_REQUEST, BOOKING_LIST_MY_RESET, BOOKING_LIST_MY_SUCCESS } from "../constants/bookingConstants";

export const bookingCreateReducer = (state = {}, action) => {
    switch(action.type) {
        case BOOKING_CREATE_REQUEST:
            return {
                loading:true
            }
            case BOOKING_CREATE_SUCCESS:
            return {
                loading:false,
                success:true,
                booking: action.payload
            }
            case BOOKING_CREATE_FAIL:
                return {
                    loading:false,
                    error: action.payload
                }

            default:
                return state
    }
}

export const bookingDetailsReducer = (state = { loading: true, bookingItems: [] }, action) => {
    switch(action.type) {
        case BOOKING_DETAILS_REQUEST:
            return {
                ...state,
                loading:true
            }
            case BOOKING_DETAILS_SUCCESS:
            return {
                loading:false,
                booking: action.payload
            }
            case BOOKING_DETAILS_FAIL:
                return {
                    loading:false,
                    error: action.payload
                }

            default:
                return state
    }
}

export const bookingListMyReducer = (state = { bookings: []}, action) => {
    switch(action.type) {
        case BOOKING_LIST_MY_REQUEST:
            return {
                loading:true
            }
            case BOOKING_LIST_MY_SUCCESS:
            return {
                loading:false,
                bookings: action.payload
            }
            case BOOKING_LIST_MY_FAIL:
                return {
                    loading:false,
                    error: action.payload
                }
            case BOOKING_LIST_MY_RESET:
                return {bookings: []}
            default:
                return state
    }
}