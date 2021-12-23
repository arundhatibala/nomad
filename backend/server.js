import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import hotelRoutes from './routes/hotelRoutes.js'

dotenv.config()
connectDB()
const app = express()

app.get('/', (req,res) => {
    res.send('API is running')
})

app.use('/api/hotels', hotelRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))