import React from 'react'
import background from "./background.png"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from '../../frontend/src/Components/Header'
import Footer from '../../frontend/src/Components/Footer'
import Home from './Screens/Home'

const App = () => {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
    <Router>
    <Header />
    <main>
      <Container>
      <Routes>
      <Route path='/' element={<Home />} />
       </Routes>
    </Container>
    </main> 
    <Footer />
    </Router>
    </div>
  )
}

export default App
