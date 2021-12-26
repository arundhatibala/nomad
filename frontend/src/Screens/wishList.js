//items from wishlist can be added to cart or deleted. No qty associated with them.
import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Components/Message'
import { Row, Col, Image, ListGroup, Button } from 'react-bootstrap'
import { removeFromWish, addToWish } from '../actions/wishActions'
import { addToCart } from '../actions/cartActions'

const WishScreen = ({ match }) => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const wish = useSelector(state => state.wish)
    const { wishItems } = wish

    const startDate = useState(new Date("2022-01-01"))
    const endDate = useState(new Date("2022-01-01"))

    useEffect(() => {
        if (id) {
            dispatch(addToWish(id))
        }
    }, [dispatch, id])

    let subtotal = 0

    const removeFromWishHandler = (id) => {
        dispatch(removeFromWish(id))
    }
    let navigate = useNavigate()
    let roomPrice = 0
    const addToCartHandler = (id) => {
        roomPrice = (wishItems.filter((p) => p.product === id)[0]).price
        dispatch(removeFromWish(id))
        dispatch(addToCart(id, 1, startDate, endDate, roomPrice, "Single"))
        navigate(`/bookings?qty=1&start=2022-01-01T00:00:00.000Z&end=2022-01-01T00:00:00.000Z&subtotal=${roomPrice}.00&room=Single`)
    }

    return (
        <Row>
            <Col md={9}>
                <h1>Bucket List</h1>
                {wishItems.length === 0 ? (
                    <Message>Your bucket list is empty.  <br></br><Link to="/explore">Go back to Explore</Link></Message>
                ) : <ListGroup variant="flush">
                        {wishItems.map(item => (
                            <ListGroup.Item key={item.product}>
                                <Row>
                                    <Col md={3}>
                                        <Image src={item.image} alt={item.name} fluid rounded></Image>
                                    </Col>
                                    <Col md={3}>
                                        <Link style={{ textDecoration: 'none' }} to={`/product/${item.product}`}>{item.name}</Link>
                                    </Col>
                                    <Col md={1}>
                                        <Button type="button" variant='secondary' onClick={() => removeFromWishHandler(item.product)}>
                                            <i className="bi bi-trash"></i></Button>
                                    </Col>
                                    <Col md={3}>
                                        <Button type="button" variant='secondary' onClick={() => addToCartHandler(item.product)}>
                                            <i className="bi bi-compass"></i> Book</Button>
                                    </Col>
                                    <Col md={2}>
                                    &#8377; {item.price}

                                    </Col>
                                </Row>
                            </ListGroup.Item>

                        )
                        )}

                    </ListGroup>
                }
            </Col>
        </Row>
    )
}

export default WishScreen