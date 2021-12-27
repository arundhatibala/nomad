import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Row, Col, Button, Image, ListGroup, Card, Carousel, CarouselItem, Breadcrumb, Form, ListGroupItem } from 'react-bootstrap'
import Rating from '../Components/Rating'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { listHotelDetails, createHotelReview } from '../actions/hotelActions'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { addToCart } from '../actions/cartActions'
import { addToWish } from '../actions/wishActions'
import { HOTEL_CREATE_REVIEW_RESET } from '../constants/hotelConstants'


const HotelScreen = ({ match }) => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const hotelDetails = useSelector((state) => state.hotelDetails)
    const { loading, error, hotel } = hotelDetails
    const [qty, setQty] = useState(1)
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')
    const [room, setRoom] = useState("Single")


    const [start, setStartDate] = useState(new Date("2022-01-01"))
    const [end, setEndDate] = useState(new Date("2022-01-01"))

    const startDate = start.getDate() +"/"+ start.getMonth() +"/"+ start.getFullYear()
    const endDate = end.getDate() +"/"+ end.getMonth() +"/"+ end.getFullYear()

    console.log(startDate)


    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const hotelReviewCreate = useSelector(state => state.hotelReviewCreate)
    const { success: successHotelReview, error: errorHotelReview } = hotelReviewCreate

    useEffect(() => {
        dispatch(listHotelDetails(id))
        if (successHotelReview) {
            alert('Review Submitted!')
            setRating(0)
            setComment('')
            dispatch({ type: HOTEL_CREATE_REVIEW_RESET })
        }
    }, [dispatch, successHotelReview, id, match])


    let diffInMs = 0

    diffInMs = (Math.abs(end - start) / (1000 * 60 * 60 * 24)) + 1

    const Map = ReactMapboxGl({
        accessToken:
            'pk.eyJ1IjoiYXJ1bmRoYXRpMDgiLCJhIjoiY2t3d2FwNjl0MDF1bTJucnJua3VldnN1ZCJ9.9YCEBV7RfCfhoEdb6wTTlw'
    })

    let mapLink = ""
    let loc = ""

    if (hotel.location === "Amsterdam") {
        mapLink = "https://api.mapbox.com/styles/v1/arundhati08/ckxlkbhob22zi15qz1y0g4pdf.html?title=false&access_token=pk.eyJ1IjoiYXJ1bmRoYXRpMDgiLCJhIjoiY2t3d2FwNjl0MDF1bTJucnJua3VldnN1ZCJ9.9YCEBV7RfCfhoEdb6wTTlw&zoomwheel=false#11.56/52.3427/4.8845"
        loc = "amsterdam"
    }
    else if (hotel.location === "Buenos Aires") {
        mapLink = "https://api.mapbox.com/styles/v1/arundhati08/ckxlxn8x31oo614pe42kyqtlq.html?title=false&access_token=pk.eyJ1IjoiYXJ1bmRoYXRpMDgiLCJhIjoiY2t3d2FwNjl0MDF1bTJucnJua3VldnN1ZCJ9.9YCEBV7RfCfhoEdb6wTTlw&zoomwheel=false#12.49/-34.59843/-58.40998"
        loc = "buenosaires"
    }
    else if (hotel.location === "New York City") {
        mapLink = "https://api.mapbox.com/styles/v1/arundhati08/ckxlxh3jj5sul15nxwrbeleyl.html?title=false&access_token=pk.eyJ1IjoiYXJ1bmRoYXRpMDgiLCJhIjoiY2t3d2FwNjl0MDF1bTJucnJua3VldnN1ZCJ9.9YCEBV7RfCfhoEdb6wTTlw&zoomwheel=false#12.09/40.74678/-73.9825"
        loc = "nyc"
    }
    else {
        mapLink = "https://api.mapbox.com/styles/v1/arundhati08/ckxlxqsf23b1h14mmgypc603k.html?title=false&access_token=pk.eyJ1IjoiYXJ1bmRoYXRpMDgiLCJhIjoiY2t3d2FwNjl0MDF1bTJucnJua3VldnN1ZCJ9.9YCEBV7RfCfhoEdb6wTTlw&zoomwheel=false#12.49/-34.59843/-58.40998"
        loc = "tokyo"
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createHotelReview(id, {
            rating,
            comment
        }))
    }
    let navigate = useNavigate()

    const addToCartHandler = () => {
        if(userInfo){
        dispatch(addToCart(id, qty, startDate, endDate, subtotal, room))
        navigate(`/bookings`)
        }
        else
        navigate(`/login`)
    }
    const addToWishHandler = () => {
        dispatch(addToWish(id))
        navigate(`/bucketlist`)
    }

    let roomFact = 1.0
    if (room === "Studio") {
        roomFact = 1.25
    }
    else if (room === "Suite") {
        roomFact = 1.5
    }
    else {
        roomFact = 1.0
    }

    const subtotal = (roomFact * diffInMs * hotel.price).toFixed(2)

    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item href="/explore">Explore
                </Breadcrumb.Item>
                <Breadcrumb.Item href={`/explore?location=${loc}`}>{hotel.location}
                </Breadcrumb.Item>
                <Breadcrumb.Item active>{hotel.name}</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
                <Col md={7}>
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
                    <p style={{ fontSize: "15px" }}>{hotel.description}</p>
                </Col>
                <Col>
                    <h1>{hotel.name}</h1>
                    <Rating value={hotel.rating} color='#e6ccff' />
                    <br></br>
                    <h6 style={{ fontWeight: 'normal' }}>{hotel.address}</h6>
                    <ListGroup>
                        <ListGroup.Item>
                            <Row>
                                <Col>Price:</Col>
                                <Col>
                                    &#8377;{hotel.price} per night
                                    <p style={{ fontSize: "10px" }}>Surcharge added accordingly.</p>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    <Form.Select value={room} onChange={(e) => setRoom(e.target.value)}>
                                        <option value="Single">Single</option>
                                        <option value="Studio">Studio</option>
                                        <option value="Suite">Suite</option>
                                    </Form.Select>
                                </Col>
                                <Col>
                                    <Form.Select value={qty} onChange={(e) => setQty(e.target.value)}>
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
                                        selected={start}
                                        onChange={(date) => setStartDate(date)}
                                        selectsStart
                                        startDate={start}
                                        endDate={end} />
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
                                        selected={end}
                                        onChange={(date) => setEndDate(date)}
                                        selectsStart
                                        startDate={start}
                                        endDate={end} />
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Subtotal:</Col>
                                <Col>&#8377; {subtotal*qty}</Col>
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
                    title="tokyo-hotels" style={{ border: "none" }}>
                </iframe>
            </Row>
            <br></br>
            <Row>
                <Col md={6}>
                    <h2>Reviews</h2>
                    {hotel.reviews.length === 0 && <Message>No Reviews</Message>}
                    <ListGroup variant='flush'>
                        {hotel.reviews.map(review => (
                            <ListGroup.Item key={review._id}>
                                <strong>{review.name}</strong>
                                <Rating value={review.rating} />
                                <p>{review.comment}</p>
                            </ListGroup.Item>
                        ))}
                        <ListGroup.Item>
                            <h2>Would you like to review this hotel?</h2>
                            {errorHotelReview && <Message variant='danger'>{errorHotelReview}</Message>}
                            {userInfo ? (<Form onSubmit={submitHandler}>
                                <Form.Group controlId='rating'>
                                    <Form.Label>Rating</Form.Label>
                                    <Form.Control as='select' value={rating} onChange={(e) => setRating(e.target.value)}>
                                        <option value=''>Select...</option>
                                        <option value='1'>1 - Poor</option>
                                        <option value='2'>2 - Fair</option>
                                        <option value='3'>3 - Good</option>
                                        <option value='4'>4 - Very Good</option>
                                        <option value='5'>5 - Excellent</option>
                                    </Form.Control>
                                </Form.Group>
                                <br></br>
                                <Form.Group controlId='comment'>
                                    <Form.Label>Comment</Form.Label>
                                    <Form.Control as='textarea' row='3' value={comment} onChange={(e) => setComment(e.target.value)}>
                                    </Form.Control>
                                </Form.Group>
                                <br></br>
                                <Button type='submit' variant='primary'>
                                    Submit review
                            </Button>
                            </Form>) : <Message>Please <Link to='/login'>sign in </Link>to write a review</Message>}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </>
    )
}

export default HotelScreen
