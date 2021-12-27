//final check before checkout
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Row, Col, ListGroup, Image, Card} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Components/Message'
import CheckoutSteps from '../Components/CheckoutSteps'
import { createBooking } from '../actions/bookingActions'


const PlaceBooking = () => {
    const hotelDetails = useSelector((state) => state.hotelDetails)
    const { hotel } = hotelDetails

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    let navigate = useNavigate()
    cart.itemsPrice = cart.cartItems.reduce((acc, item) => acc + item.subtotal * item.qty, 0)

    cart.shippingPrice = cart.itemsPrice > 10000 ? 0 : 100
    cart.taxPrice = Number((0.05 * cart.itemsPrice).toFixed(2))
    cart.totalPrice = (Number(cart.itemsPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice)).toFixed(2)
    
    const bookingCreate = useSelector(state => state.bookingCreate || {})
    const { booking, success, error } = bookingCreate
    
    useEffect(() => {
        if(success) {
            navigate(`/booking/${booking._id}`)
        }
    }, [success])

    const placeBookingHandler = () => {
        dispatch(createBooking({
            bookingItems: cart.cartItems,
            shippingAddress: cart.shippingAddress,
            itemsPrice: cart.itemsPrice,
            shippingPrice: cart.shippingPrice,
            taxPrice: cart.taxPrice,
            totalPrice: cart.totalPrice
        }),

        )
    }
    return (
        <>
        <CheckoutSteps step1 step2 step3/>
            <Row>
                <Col md={8}>
                    <ListGroup variant='flush'>
                        {/* <ListGroup.Item>
                            <h2>Shipping</h2>
                            <p>
                                <strong>Address:</strong>
                                {cart.shippingAddress.address}, {cart.shippingAddress.city}, {cart.shippingAddress.postalCode}, {cart.shippingAddress.country}
                            </p>
                        </ListGroup.Item> */}

                        <ListGroup.Item>
                            <h2>Payment Method</h2>
                            <strong>Your order is on the house!</strong>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h2>Rooms</h2>
                            {cart.cartItems.length === 0 ? <Message>Your cart is empty!</Message> :
                            <ListGroup variant='flush'> {cart.cartItems.map((item, index) => (
                                <ListGroup.Item key={index}> 
                                <Row>
                                    <Col md={3}>
                                        <Image src={item.image} alt={item.name} fluid rounded />
                                    </Col>

                                    <Col>
                                    <Link to={`/hotel/${item.product}`}>
                                        {item.name}: {item.room} room.
                                    </Link>
                                        </Col>

                                    <Col md={4}>
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
                                    <Col>&#8377;{cart.itemsPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            {/* <ListGroup.Item>
                                <Row>
                                    <Col>Shipping</Col>
                                    <Col>&#8377;{cart.shippingPrice}</Col>
                                </Row>
                            </ListGroup.Item> */}
                            <ListGroup.Item>
                                <Row>
                                    <Col>Tax (5%)</Col>
                                    <Col>&#8377;{cart.taxPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Total</Col>
                                    <Col>&#8377;{cart.totalPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                {error && <Message variant='danger'>{error}</Message>}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                <button type='button' className="btn btn-outline-dark" disabled={cart.cartItems === 0} onClick={placeBookingHandler}>Place Booking</button>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default PlaceBooking