import React, {useEffect, useState} from 'react'
import {Link, useParams, useNavigate} from 'react-router-dom'
import {Row, Col, Button, Image, ListGroup, Card, Carousel, CarouselItem, Breadcrumb, Form, ListGroupItem} from 'react-bootstrap'
import Rating from '../Components/Rating'
import { useDispatch, useSelector } from 'react-redux'
import { listHotelDetails} from '../actions/hotelActions'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { addToCart } from '../actions/cartActions'
import { addToWish } from '../actions/wishActions'

const HotelScreen = () => {
    const dispatch = useDispatch()
    const hotelDetails = useSelector(state => state.hotelDetails)
    const { loading, error, hotel } = hotelDetails
    const { id } = useParams()
    const [qty, setQty] = useState(1)
    const [room, setRoom] = useState("Single")

    const [startDate, setStartDate] = useState(new Date("2022-01-01"))
    const [endDate, setEndDate] = useState(new Date("2022-01-01"))

    let diffInMs = 0

    diffInMs = (Math.abs(endDate - startDate)/(1000 * 60 * 60 * 24))+1

    const Map = ReactMapboxGl({
        accessToken:
          'pk.eyJ1IjoiYXJ1bmRoYXRpMDgiLCJhIjoiY2t3d2FwNjl0MDF1bTJucnJua3VldnN1ZCJ9.9YCEBV7RfCfhoEdb6wTTlw'
      })

      let mapLink = ""

      if (hotel.location ==="Amsterdam")
      {
          mapLink = "https://api.mapbox.com/styles/v1/arundhati08/ckxlkbhob22zi15qz1y0g4pdf.html?title=false&access_token=pk.eyJ1IjoiYXJ1bmRoYXRpMDgiLCJhIjoiY2t3d2FwNjl0MDF1bTJucnJua3VldnN1ZCJ9.9YCEBV7RfCfhoEdb6wTTlw&zoomwheel=false#11.56/52.3427/4.8845"
      }
      else if (hotel.location ==="Buenos Aires")
      {
          mapLink = "https://api.mapbox.com/styles/v1/arundhati08/ckxlxn8x31oo614pe42kyqtlq.html?title=false&access_token=pk.eyJ1IjoiYXJ1bmRoYXRpMDgiLCJhIjoiY2t3d2FwNjl0MDF1bTJucnJua3VldnN1ZCJ9.9YCEBV7RfCfhoEdb6wTTlw&zoomwheel=false#12.49/-34.59843/-58.40998"
      }
      else if (hotel.location ==="New York City")
      {
          mapLink = "https://api.mapbox.com/styles/v1/arundhati08/ckxlxh3jj5sul15nxwrbeleyl.html?title=false&access_token=pk.eyJ1IjoiYXJ1bmRoYXRpMDgiLCJhIjoiY2t3d2FwNjl0MDF1bTJucnJua3VldnN1ZCJ9.9YCEBV7RfCfhoEdb6wTTlw&zoomwheel=false#12.09/40.74678/-73.9825"
      }
      else
      {
          mapLink = "https://api.mapbox.com/styles/v1/arundhati08/ckxlxqsf23b1h14mmgypc603k.html?title=false&access_token=pk.eyJ1IjoiYXJ1bmRoYXRpMDgiLCJhIjoiY2t3d2FwNjl0MDF1bTJucnJua3VldnN1ZCJ9.9YCEBV7RfCfhoEdb6wTTlw&zoomwheel=false#12.49/-34.59843/-58.40998"
      }

    useEffect(() => {
        dispatch(listHotelDetails(id))
    }, [dispatch])

    let navigate = useNavigate()

    const addToCartHandler = () =>
    {
        dispatch(addToCart(id, qty, startDate, endDate, subtotal, room))
        navigate(`/bookings/${id}?qty=${qty}&start=${start}&end=${end}&subtotal=${subtotal}&room=${room}`)
    }
    const addToWishHandler = () =>
    {
        dispatch(addToWish(id))
        navigate(`/bucketlist`)
    }

    const start =  startDate.toISOString()
    const end =  endDate.toISOString()

    let roomFact = 1.0
    if(room === "Studio")
    {
        roomFact = 1.25
    }
    else if (room === "Suite")
    {
        roomFact = 1.5
    }
    else
    {
        roomFact = 1.0
    }

    const subtotal = (qty*roomFact*diffInMs*hotel.price).toFixed(2)

    return (
        <>
        <Breadcrumb>
  <Breadcrumb.Item href="/explore">Explore</Breadcrumb.Item>
  <Breadcrumb.Item href="#">{hotel.location}
  </Breadcrumb.Item>
  <Breadcrumb.Item active>{hotel.name}</Breadcrumb.Item>
</Breadcrumb>
        <Row>
                        <Col md ={7}>
                            <Carousel fade
                                controls={false}
                                interval="3000">
                                 <Carousel.Item>
                                    <Image src={hotel.image_exterior} alt="exterior" fluid></Image>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div>
                                        <Image src={hotel.image_room} alt="Room" fluid></Image>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image src={hotel.image_bar} alt="Bar/Restuarant" fluid></Image>
                                </Carousel.Item>
                            </Carousel>
                            <br></br>
                            <h5>About the Hotel</h5>
                            <p style = {{fontSize:"15px"}}>{hotel.description}</p>
                        </Col>
                        <Col>
                        <h1>{hotel.name}</h1>
                        <Rating value = {hotel.rating} color = '#e6ccff' />
                        <br></br>
                        <h6 style = {{fontWeight: 'normal'}}>{hotel.address}</h6>
                        <ListGroup>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>
                                    &#8377;{hotel.price} per night
                                    <p style = {{fontSize:"10px"}}>Surcharge added accordingly.</p>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                    <Form.Select value ={room} onChange={(e) => setRoom(e.target.value)}>
                                    <option value = "Single">Single</option>
                                    <option value = "Studio">Studio</option>
                                    <option value = "Suite">Suite</option>
                                    </Form.Select>
                                    </Col>
                                    <Col>
                                    <Form.Select value ={qty} onChange={(e) => setQty(e.target.value)}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    </Form.Select>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                             <Row> 
                            <Col>
                            Check-in Date:
                            </Col>
                             <Col>      
                             <DatePicker className="form-control"
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                selectsStart
                                startDate={startDate}
                                 endDate={endDate}/>
                            </Col>
                            </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                             <Row> 
                            <Col>
                            Check-out Date:
                            </Col>
                             <Col>      
                             <DatePicker className="form-control"
                                selected={endDate}
                                onChange={(date) => setEndDate(date)}
                                selectsStart
                                startDate={startDate}
                                 endDate={endDate}/>
                            </Col>
                            </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Subtotal:</Col>
                                    <Col>&#8377; {subtotal}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                <button type="button" className="btn btn-outline-success" onClick={addToCartHandler}>Book Now</button>
                                </Row>
                                <br></br>
                                <Row>
                                <button type="button" className="btn btn-outline-primary" onClick={addToWishHandler}>Add to Bucket List</button>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                        <br></br>
                        <h5>Amenities include:</h5>
                        <p>{hotel.amenities}</p>
                        </Col>
                        </Row>
                        <Row>
                        <br></br>
                        <br></br>
                        <br></br>
                        <center><h4>Hotels in the vicinity:</h4></center>
                        <br></br>
                        <iframe 
                        width='100%' 
                        height='400px' 
                        src={mapLink} 
                        title="tokyo-hotels" style={{border: "none"}}>
                        </iframe>
                        </Row>
        </>
    )
}

export default HotelScreen
