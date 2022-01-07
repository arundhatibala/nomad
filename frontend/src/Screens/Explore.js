import React, { useEffect, useState } from 'react'
import { Row, Col, Toast, Image, Alert, Button } from 'react-bootstrap'
import Hotel from '../Components/Hotel'
//Displays all hotels and uses fuzzy search, location filter and sorting
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { listHotels } from '../actions/hotelActions'
import { Form } from 'react-bootstrap'
import Fuse from "fuse.js"
import { useLocation } from 'react-router'
import favicon from "../favicon-32x32.png"

const Explore = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin
  const wish = useSelector(state => state.wish)
  const { wishItems } = wish
  const hotelList = useSelector(state => state.hotelList)
  const { loading, error, hotels } = hotelList
  let locationFind = useLocation()

  const toastItem = wishItems[0]

  const [query, updateQuery] = useState('');
  let [loc, setLocation] = useState('All Locations')
  const [sort, setSort] = useState('')
  const [show, setShow] = useState(true);
  // const toggleShowA = () => setShowA(!showA);

  useEffect(() => {
    dispatch(listHotels())
  }, [dispatch])


  const fuse = new Fuse(hotels, {
    keys: [
      'name',
      'amenities',
      'location'
    ]
  })

  const onSearch = ({ currentTarget }) =>
  {
      updateQuery(currentTarget.value);
  }

  const loca = locationFind.search ? String(locationFind.search.split('=')[1]) : "All Locations"
  
  const results = fuse.search(query);
  const hotelResults = query ? results.map(hotel => hotel.item) : hotels

  let locResults = hotelResults

  if(loca === "nyc" || loc === "nyc")
  {
    locResults = hotelResults.filter(hotel => hotel.location === "New York City")
    loc = "nyc"
  }
  else if(loca === "tokyo"||loc === "tokyo")
  {
    locResults = hotelResults.filter(hotel => hotel.location === "Tokyo")
    loc = "tokyo"
  }
  else if(loca === "buenosaires"||loc === "buenosaires")
  {
    locResults = hotelResults.filter(hotel => hotel.location === "Buenos Aires")
    loc = "buenosaires"
  }
  else if(loca === "amsterdam"||loc === "amsterdam")
  {
    locResults = hotelResults.filter(hotel => hotel.location === "Amsterdam")
    loc = "amsterdam"
  }
  else
  {
    locResults = hotelResults
    loc = "default"
  }

  let sortResult = locResults
    if (sort === "Sort By: Default") {
         sortResult = locResults
    }
    else if (sort === "Sort By: Low to High"){
        sortResult = locResults.sort((firstItem, secondItem) => firstItem.price - secondItem.price)
    }
    else {
        const temp = locResults.sort((firstItem, secondItem) => firstItem.price - secondItem.price)
        sortResult = locResults.reverse()
    }


  return (
    <>
      <br></br>
      <center><h2>Explore all locations</h2></center>
      <br></br>
      <Form>
        <Form.Control
          type="text"
          value = {query}
          onChange = {onSearch}
          placeholder="Search by name, amenity..."
        >
        </Form.Control>
      </Form>

      <br></br>

      <Row>
        <Col md={3}>
          <Form.Select
            value = {loc} onChange={(e) => setLocation(e.target.value)}>
            <option value = "default">All Locations</option>
            <option value = "amsterdam">Location: Amsterdam</option>
            <option value = "buenosaires">Location: Buenos Aires</option>
            <option value = "nyc">Location: New York City</option>
            <option value = "tokyo">Location: Tokyo</option>
          </Form.Select>
        </Col>
        <Col md={3}></Col>
        <Col md={3}></Col>
        <Col md={3}>
          <Form.Select
            value = {sort} onChange={(e) => setSort(e.target.value)}
          >
            <option>Sort By: Default</option>
            <option>Sort By: Low to High</option>
            <option>Sort By: High to Low</option>
          </Form.Select>
        </Col>
      </Row>
      <br></br>
      {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> :
        <Row>
          {sortResult.map(hotel => (
            <Col key={hotel._id} s={12} md={6} lg={4} xl={3}>
              <Hotel hotel={hotel} />
            </Col>
          ))}
        </Row>
        }
        <br></br>
        {userInfo && wishItems.length!==0 &&
    // <Alert variant= "info" show={showA} onClose={toggleShowA} style = {{position:"sticky", bottom:"20px", left:"10px", backgroundColor:"rgba(43, 69, 89, 0.8)"}}>
    //   <h2>Hello</h2>
          /* <Toast.Header>
            <img
              src={favicon}
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">nomad.</strong>
            <small>Analytics</small>
          </Toast.Header>
          <a href = {`/hotel/${toastItem._id}`} style = {{textDecoration:"none"}}>
          <Toast.Body>
            We noticed you've been looking at <strong>{toastItem.name}</strong>. 
            <br></br>
            Use coupon code <strong>"NOMAD20OFF"</strong> for 20% off on a stay at {toastItem.name}!
          </Toast.Body>
          </a> */
        <Alert show={show} variant="warning" style = {{position:"sticky", width:"375px", bottom:"20px", left:"10px", backgroundColor:"rgba(43, 69, 89, 0.8)", padding:"20px"}}>
        <Alert.Heading style={{fontSize:"20px"}}>Analytics</Alert.Heading>
        <p style={{fontSize:"15px"}}>
          We noticed you've been looking at <strong>{toastItem.name}</strong>. 
          Use coupon code <strong>"NOMAD20OFF"</strong> for 20% off on a stay at {toastItem.name}!
        </p>
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="warning" style={{color:"darkslategrey"}}>Dismiss</Button>
        </div>
      </Alert>}
    </>
  )
}

export default Explore

