import express from 'express'
const router = express.Router()
import { getHotels, getHotelById, createHotelReview } from '../controllers/hotelController.js'

router.route('/').get(getHotels)
router.route('/:id').get(getHotelById)

export default router