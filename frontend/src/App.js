import React from 'react'
import background from "./background.png"
import {BrowserRouter as BrowserRouter, Route, Routes} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from '../../frontend/src/Components/Header'
import Footer from '../../frontend/src/Components/Footer'
import Home from './Screens/Home'
import Profile from './Screens/Profile'
import Explore from './Screens/Explore'
import Login from './Screens/Login'
import Register from './Screens/Register'
import HotelScreen from './Screens/HotelScreen'
import Bookings from './Screens/Bookings'
import Wishlist from './Screens/wishList'
import Payment from './Screens/Payment'
import PlaceBooking from './Screens/PlaceBooking'
import BookingConfirmation from './Screens/BookingConfirmation'

const App = () => {
  return (
    <div style={{ backgroundImage: `url(${background})` , backgroundAttachment:'fixed'}}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Header />
    <main>
      <Container>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/bookings' element={<Bookings />} />
        <Route path='/bucketlist' element={<Wishlist />} />
        <Route path='/bookings/:id' element={<Bookings />} />
        <Route path='/hotel/:id' element={<HotelScreen />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/placebooking' element={<PlaceBooking />} />
        <Route path='/booking/:id' element={<BookingConfirmation />} />
      </Routes>
    </Container>
    </main> 
    <Footer />
    </BrowserRouter>
    </div>
  )
}

export default App
