//db model for hotel data

import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema({
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
}) //implementing separate schema for reviews

const hotelSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }, 
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    image_exterior: {
        type: String,
        required: true,
    },
    image_bar: {
        type: String,
        required: true
    },
    image_room: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    amenities: {
        type: String,
        required: true
    },
    single_qty: {
        type: Number,
        default: 0
    },
    studio_qty: {
        type: Number,
        default: 0
    },
    suite_qty: {
        type: Number,
        default: 0
    },
    tag: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: false
    },
    lat: {
        type: Number,
        integer: true,
        required: true,
        default: 0
    },
    long: {
        type: Number,
        integer: true,
        required: true,
        default: 0
    },
    phone: {
        type: String,
        required: true
    },
    reviews: [reviewSchema],    
}, {
    timestamps: true
})

const Hotel = mongoose.model('Hotel', hotelSchema)
export default Hotel