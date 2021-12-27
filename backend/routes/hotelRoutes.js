import express from 'express'
const router = express.Router()
import { getHotels, getHotelById, createHotelReview } from '../controllers/hotelController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').get(getHotels)
router.route('/:id/reviews').get(protect, createHotelReview)
router.route('/:id').post(getHotelById)

export default router