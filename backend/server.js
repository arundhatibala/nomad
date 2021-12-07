const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const colors = require('colors')
const PORT = 5000
const app = express()

dotenv.config()
app.get('/', (req,res) => {
    res.send('API is running')
})

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.error(`Error: ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}
connectDB()

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))