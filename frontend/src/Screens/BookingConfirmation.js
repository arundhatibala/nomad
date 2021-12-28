//Shows all booking details
import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Card} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import { getBookingDetails } from '../actions/bookingActions'
import { resetCart } from '../actions/cartActions'

const BookingConfirmation = ( {match} ) => {

    const { id } = useParams()
    console.log(id)
    const dispatch = useDispatch()

    const bookingDetails = useSelector(state => state.bookingDetails)
    const { booking, loading, error } = bookingDetails
    
    if(!loading){
        booking.itemsPrice = booking.bookingItems.reduce((acc, item) => acc + item.subtotal * item.qty, 0)
    
    }
    useEffect(() => {
        if(!booking || booking._id !== id) {
            dispatch(getBookingDetails(id))
        }
        dispatch(resetCart())
    }, [booking, id])

    return loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : <>
        <h1>Booking Confirmation {booking._id}</h1>
        <Row>
                <Col md={8}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Booking Details</h2>
                            <p><strong>Name: </strong> {booking.user.name}</p>
                            <p><strong>Email: </strong><a href={`mailto:${booking.user.email}`}>{booking.user.email}</a></p>
                            
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h2>Payment Method</h2>
                            <strong>Your booking is on the house!</strong>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h2>Booking Items</h2>
                            {booking.bookingItems.length === 0 ? <Message>Booking is empty!</Message> :
                            <ListGroup variant='flush'> {booking.bookingItems.map((item, index) => (
                                <ListGroup.Item key={index}> 
                                <Row>
                                    <Col md={3}>
                                        <Image src={item.image} alt={item.name} fluid rounded />
                                    </Col>
                                    <Col md = {3}>
                                    <Link  as = "h6" style = {{textDecoration:"none"}}to={`/hotel/${item.product}`}>
                                        {item.name}
                                    </Link>
                                        </Col>
                                        <Col md = {2}>Check In: <br></br>
                                    {item.startDate}</Col> 
                                    <Col md= {2}>Check Out: <br></br>
                                    {item.endDate}</Col>
                                    <Col md={2}>
                                        {item.qty} x &#8377;{item.subtotal} = &#8377;{item.qty * item.subtotal} 
                                    </Col>
                                </Row>
                                </ListGroup.Item>
                            ))} </ListGroup> }
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={4}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>Booking Summary</h2>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Rooms</Col>
                                    <Col>&#8377;{booking.itemsPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            
                            <ListGroup.Item>
                                <Row>
                                    <Col>Tax (15%)</Col>
                                    <Col>&#8377;{booking.taxPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Total</Col>
                                    <Col>&#8377;{booking.totalPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
    </>
}

export default BookingConfirmation