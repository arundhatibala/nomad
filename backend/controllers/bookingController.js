//route controllers from bookings

import asyncHandler from 'express-async-handler'
import Booking from '../models/bookingModel.js'

//Create new booking
//POST /api/products
const addBookingItems = asyncHandler(async (req, res) => {
    const { bookingItems, itemsPrice, taxPrice, totalPrice } = req.body

    if (bookingItems && bookingItems.length === 0) {
        res.status(400)
        throw new Error('No booking items')
        return
    }
    else {
        const booking = new Booking({
            bookingItems, user: req.user._id, itemsPrice, taxPrice, totalPrice
        })

        const createdBooking = await booking.save()

        res.status(201).json(createdBooking)
    }

})

//Get booking by id
//GET /api/products/:id
const getBookingById = asyncHandler(async (req, res) => {
    const booking = await Booking.findById(req.params.id).populate('user', 'name email')
    if (booking) {
        res.json(booking)
    } else {
        res.status(404)
        throw new Error('Booking Not Found!')
    }
})

//Get logged in user bookings
//GET /api/bookings/mybookings
const getMyBookings = asyncHandler(async (req, res) => {
    const bookings = await Booking.find({ user: req.user._id })
    res.json(bookings)
})

export { addBookingItems, getBookingById, getMyBookings }