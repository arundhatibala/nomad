import express from 'express'
import asyncHandler from 'express-async-handler'
import Hotel from '../models/hotelModel.js'
const router = express.Router()

//Fetch all hotels
//GET /api/hotels
//public
router.get('/', asyncHandler(async (req,res) => {
    const hotels = await Hotel.find({})
    res.json(hotels)
}))

//Fetch single hotel
//GET /api/hotels/:id
//public
router.get('/:id', asyncHandler(async (req,res) => {
    const hotel = await Hotel.findById(req.params.id)
    if(hotel){
        res.json(hotel)
    } else {
        res.status(404)
        throw new Error('Hotel Not Found!')
    }
}))

export default router