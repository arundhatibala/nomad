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
      <Route path='/hotel/:id' element={<HotelScreen />} />
       </Routes>
    </Container>
    </main> 
    <Footer />
    </Router>
    </div>
  )
}

export default App
