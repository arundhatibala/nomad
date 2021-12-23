import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Row, Col} from 'react-bootstrap'
import hotels from '../hotels'
import Hotel from '../Components/Hotel'
//Displays all hotels and uses fuzzy search, location filter and sorting
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import { useDispatch, useSelector } from 'react-redux'
//import { listhotels } from '../actions/hotelActions'
import { Form } from 'react-bootstrap'  
import Fuse from "fuse.js"

const Explore = () => {
    const dispatch = useDispatch()
    const hotelList = useSelector(state => state.hotelList)
    const { loading, error, hotels } = hotelList

    // useEffect(() => {
    //     dispatch(listhotels())
    // }, [dispatch])

    const [query, updateQuery] = useState('')
    const [location, setLocation] = useState('All Categories')
    const [sort, setSort] = useState('')
    const fuse = new Fuse(hotels, {
        keys: [
          'name', 'amenities'
        ]
      })
   
    const results = fuse.search(query)
    const hotelResults = query ? results.map(hotel => hotel.item) : hotels
    const catResults = (location === "All Locations") ? hotelResults : hotelResults.filter(p => p.location === location.charAt(0).toLowerCase()+location.slice(1))
    let sortResult = catResults
    if (sort === "Sort By: Default") {
         sortResult = catResults
    }
    else if (sort === "Sort By: Low to High"){
        sortResult = catResults.sort((firstItem, secondItem) => firstItem.price - secondItem.price)
    }
    else {
        const temp = catResults.sort((firstItem, secondItem) => firstItem.price - secondItem.price)
        sortResult = catResults.reverse()
    }

    console.log(hotelResults)
     const onSearch = ({ currentTarget }) => {
        updateQuery(currentTarget.value);
      }
    // // const [hotels, setHotels] = useState([])
    // // useEffect (() => {
    // //     const fetchHotels = async () => {
    // //         const { data } = await axios.get('/api/hotels')
    // //         setHotels(data)
    // //     }
    // //     fetchHotels()
    // // }, [])

    return (
        <>
        <br></br>
        <center><h2>Explore all locations</h2></center>
        <br></br>
          <Form>
              <Form.Control
          type = "text"
          value = {query}
          placeholder = "Search by name, amenity..."
          onChange = {onSearch}
          >
          </Form.Control>
          </Form>

          <br></br>

          <Row>
          <Col md = {3}>
          <Form.Select 
          value = {location} onChange={(e) => setLocation(e.target.value)}
          >
            <option>All Locations</option>  
            <option>Location: Amsterdam</option>
            <option>Location: Buenos Aires</option>
            <option>Location: New York City</option>
            <option>Location: Tokyo</option>
        </Form.Select>
          </Col>
          <Col md = {3}></Col>
          <Col md = {3}></Col>
          <Col md = {3}>
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
                    {hotels.map(hotel => (
                        <Col key={hotel.name} s={12} md={6} lg={4} xl={3}>
                            <Hotel hotel={hotel} />
                        </Col>
                    ))}
                </Row>
}
        </>
    )
}

export default Explore
