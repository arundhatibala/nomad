import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Hotel from '../Components/Hotel'
//Displays all hotels and uses fuzzy search, location filter and sorting
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { listHotels } from '../actions/hotelActions'
import { Form } from 'react-bootstrap'
import Fuse from "fuse.js"
import { useLocation } from 'react-router'

const Explore = () => {
  const dispatch = useDispatch()
  const hotelList = useSelector(state => state.hotelList)
  const { loading, error, hotels } = hotelList
  let locationFind = useLocation()

  const [query, updateQuery] = useState('');
  let [loc, setLocation] = useState('All Locations')
  const [sort, setSort] = useState('')

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

  const onSearch = ({ e }) =>
  {
      updateQuery(e.value);
  }

  const loca = locationFind.search ? String(locationFind.search.split('=')[1]) : "All Locations"
  console.log(loca)

  const results = fuse.search(query);
  const hotelResults = query ? results.map(hotel => hotel.item) : hotels

  let locResults = hotelResults

  if(loca === "nyc")
  {
    locResults = hotelResults.filter(hotel => hotel.location === "New York City")
    loc = "New York City"
  }
  else if(loca === "tokyo")
  {
    locResults = hotelResults.filter(hotel => hotel.location === "Tokyo")
    loc = "Tokyo"
  }
  else if(loca === "buenosaires")
  {
    locResults = hotelResults.filter(hotel => hotel.location === "Buenos Aires")
    loc = "Buenos Aires"
  }
  else if(loca === "amsterdam")
  {
    locResults = hotelResults.filter(hotel => hotel.location === "Amsterdam")
    loc = "Amsterdam"
  }
  else
  {
    locResults = hotelResults
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
            <option value = "default" >All Locations</option>
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
        </Row>}
    </>
  )
}

export default Explore
