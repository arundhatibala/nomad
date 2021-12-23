//individual hotel page with images, recommendation, add to cart, add to wishlist and quantity
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from "react-router"
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem, Carousel, Form } from 'react-bootstrap'
import Rating from '../Components/Rating'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import Hotel from '../Components/Hotel'
// import { listhotelDetails, createhotelReview } from '../actions/hotelActions'
// import { listhotels } from '../actions/hotelActions'
// import { hotel_CREATE_REVIEW_RESET } from '../constants/hotelConstants'


const hotelScreen = ({ match }) => {
    // const [qty, setQty] = useState(1)
    // const [rating, setRating] = useState(0)
    // const [comment, setComment] = useState('')

    // const [activeItemIndex, setActiveItemIndex] = useState(0);
    // const chevronWidth = 40;

    // const { id } = useParams()
    // const dispatch = useDispatch()
    // const hotelDetails = useSelector((state) => state.hotelDetails)
    // const hotelList = useSelector(state => state.hotelList)
    // const { loading, error, hotels } = hotelList
    // const { hotel } = hotelDetails

    // const userLogin = useSelector(state => state.userLogin)
    // const { userInfo } = userLogin

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 2
    // }

    // const hotelReviewCreate = useSelector(state => state.hotelReviewCreate)
    // const { success: successhotelReview, error: errorhotelReview } = hotelReviewCreate

    // useEffect(() => {
    //     window.scrollTo(0,0)
    //     dispatch(listhotels())
    // }, [dispatch])

    // useEffect(() => {
    //     if (successhotelReview) {
    //         alert('Review Submitted!')
    //         setRating(0)
    //         setComment('')
    //         dispatch({ type: hotel_CREATE_REVIEW_RESET })
    //     }
    //     dispatch(listhotelDetails(id))
    // }, [dispatch, match, successhotelReview])

    // const submitHandler = (e) => {
    //     e.preventDefault()
    //     dispatch(createhotelReview(id, {
    //         rating,
    //         comment
    //     }))
    // }

    let navigate = useNavigate()

    const recommend = hotels.filter(p => p.location === hotel.location && p.tag === "bestseller" && p.Name !== hotel.Name)
    const chunk1 = recommend.slice(0, 4)
    const chunk2 = recommend.slice(4, 8)


    const s = String(hotel.location)
    const title = s.charAt(0).toUpperCase() + s.slice(1)
    return (
        <>
            <ol className="breadcrumb bg-secondary">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item"><a href={`/${hotel.location}`}>{title}</a></li>
                <li className="breadcrumb-item active">{hotel.Name}</li>
            </ol>
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
                <>
                    <Row>
                        <Col>
                            <Carousel fade
                                controls={false}
                                interval="3000">
                                <Carousel.Item>
                                    <div>
                                        <Image src={hotel.Image_URL_1} alt={hotel.Name} fluid></Image>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Image src={hotel.Image_URL_2} alt={hotel.Name} fluid></Image>
                                </Carousel.Item>
                            </Carousel>

                        </Col>
                        <Col>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <h2>{hotel.Name}</h2>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <h5>location: {title}</h5>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <h4><Rating value={hotel.rating} color='#f9cd66' /></h4>
                                </ListGroup.Item>
                                <Card>
                                    <ListGroup variant='flush'>
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>
                                                    Price:
                                </Col>
                                                <Col>
                                                    <strong>&#8377; {hotel.price}</strong>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>
                                                    Status:
                                </Col>
                                                <Col>
                                                    {hotel.Quantity > 0 ? 'In Stock' : 'Out of Stock'}
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Qty</Col>
                                                <Col>
                                                    <div class="form-group">
                                                        <select multiple="" className="form-select" id="exampleSelect2" value={qty} onChange={(e) => setQty(e.target.value)}>
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                            <option>5</option>
                                                        </select>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                        <ListGroupItem>
                                            {/* <Link to={`/cart/${id}?qty=${qty}`} > */}
                                                <Button
                                                    className='btn btn-block btn-success mb-2'
                                                    type='button'
                                                    disabled={hotel.qty_single === 0}>
                                                    Add to Cart
                            </Button>
                                            {/* </Link> */}
                                            {/* <Link to={`/wishlist/${id}`}> */}
                                                <Button
                                                    className='btn btn-block btn-secondary mb-2'
                                                    type='button' >
                                                    Add to Wishlist
                            </Button>
                                            {/* </Link> */}
                                        </ListGroupItem>
                                    </ListGroup>
                                </Card>
                                <ListGroup.Item>
                                    <br></br>
                                    <p>{hotel.description}</p>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
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
                                    <h2>Write a Customer Review</h2>
                                    {errorhotelReview && <Message variant='danger'>{errorhotelReview}</Message>}
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
            )}
            <center><h2>More Like This</h2></center>
            <Carousel fade
                prevIcon={<span aria-hidden="true" className="bi bi-arrow-right-square-fill" />}
                controls={false}
                interval="3000"
            >
                <Carousel.Item>
                    <Row>
                        {chunk1.map(hotel => (
                            <Col key={hotel._id} s={12} md={6} lg={4} xl={3}>
                                <Card className='my-3 p-3 rounded'>
                                    <a href={`/hotel/${hotel._id}`} target="_blank">
                                        <Card.Img src={hotel.Image_URL_1} variant="top" />
                                    </a>
                                    <Card.Body>
                                        <a href={`/hotel/${hotel._id}`} target="_blank">
                                            <Card.Title as='div'>
                                                {hotel.Name}
                                            </Card.Title>
                                        </a>
                                        <Card.Text as='div'>
                                            <Rating value={hotel.Ratings} color='#f4959a' />
                                        </Card.Text>
                                        <Card.Text as='h6'>&#8377; {hotel.price}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        {chunk2.map(hotel => (
                            <Col key={hotel._id} s={12} md={6} lg={4} xl={3}>
                                <Hotel hotel={hotel} />
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default hotelScreen