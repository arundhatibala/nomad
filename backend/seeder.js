//initial seeding of data into database

import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import hotels from './data/hotels.js'
import User from './models/userModel.js'
import Hotel from './models/hotelModel.js'
import Booking from './models/bookingModel.js'
import connectDB from './config/db.js'

dotenv.config()
connectDB()

const importData = async () => {
    try {
        await Booking.deleteMany()
        await User.deleteMany()
        await Hotel.deleteMany()

        const createdUsers = await User.insertMany(users)
        const adminUser = createdUsers[0]._id
        const sampleHotels = hotels.map(hotel => {
            return { ...hotel, user: adminUser }
        })
        await Hotel.insertMany(sampleHotels)
        console.log('Data Imported!'.green.inverse)
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        await Booking.deleteMany()
        await User.deleteMany()
        await Hotel.deleteMany()

        console.log('Data Destroyed!'.red.inverse)
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}
if (process.argv[2] == '-d') {
    destroyData()
} else {
    importData()
}

//npm run data:import for import
//npm run data:destroy -d for delete