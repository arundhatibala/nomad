//routes for bookings -> add booking, get booking, get booking by id

import express from 'express'
const router = express.Router()
import {
    addBookingItems, getBookingById, getMyBookings
} from '../controllers/bookingController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(protect, addBookingItems)
router.route('/mybookings').get(protect, getMyBookings)
router.route('/:id').get(protect, getBookingById)

export default router