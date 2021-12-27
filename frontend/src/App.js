import React from 'react'
import background from "./background.png"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from '../../frontend/src/Components/Header'
import Footer from '../../frontend/src/Components/Footer'
import Home from './Screens/Home'
import Location from './Screens/Location'
import Profile from './Screens/Profile'
import Explore from './Screens/Explore'
import Login from './Screens/Login'
import Register from './Screens/Register'
import HotelScreen from './Screens/HotelScreen'
import Bookings from './Screens/Bookings'
import Wishlist from './Screens/wishList'
import Payment from './Screens/Payment'
import PlaceBooking from './Screens/PlaceBooking'

const App = () => {
  return (
    <div style={{ backgroundImage: `url(${background})` , backgroundAttachment:'fixed'}}>
    <Router>
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
      </Routes>
    </Container>
    </main> 
    <Footer />
    </Router>
    </div>
  )
}

export default App
