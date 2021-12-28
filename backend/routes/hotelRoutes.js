//routes for hotels -> all hotels, particular hotel, particular hotel review

import express from 'express'
const router = express.Router()
import { getHotels, getHotelById, createHotelReview } from '../controllers/hotelController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').get(getHotels)
router.route('/:id/reviews').post(protect, createHotelReview)
router.route('/:id').get(getHotelById)

export default router