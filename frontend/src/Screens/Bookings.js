// This is the cart screen you can update quantity, delete products, move them to wishlist or proceeed to checkout.
import React, { useEffect, useState } from 'react'
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Components/Message'
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'
import { addToCart, removeFromCart } from '../actions/cartActions'
import { addToWish } from '../actions/wishActions'

const CartScreen = ({}) => {
    const { id } = useParams()
    let location = useLocation()
    const query = location.search ? (location.search.split('=')) : []
    let start = location.search && query[2].substring(0,24)
    let end = location.search && query[3].substring(0,24) 
    const subtotal = location.search && query[4].split('&')[0]
    const qty = location.search ? query[1].substring(0,1) : 1
    const room = location.search && query[5] 

    let temp = start.split(/\D+/);

    const startDate = Date.UTC([0], --temp[1], temp[2], temp[3], temp[4], temp[5], temp[6])

     temp = end.split(/\D+/);

     const endDate = Date.UTC([0], --temp[1], temp[2], temp[3], temp[4], temp[5], temp[6])

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)

    const { cartItems } = cart

    let navigate = useNavigate()

const checkoutHandler = () => {
        navigate('/login?redirect=/shipping')
    }

    const removeFromCartHandler  = (id) => {
        dispatch(removeFromCart(id))
        }

    const moveToWishHandler  = (id) => {
            dispatch(removeFromCart(id))
            dispatch(addToWish(id))
            navigate('/bucketlist')
            }

    return (
        <>

            <Row>
           <Col>
            <h1>Bookings</h1>
            <br></br>
            {cartItems.length === 0 ? (
            <Message>Your cart is empty  <br></br><Link to ="/explore">Go back to Explore</Link></Message>
            ) : <ListGroup variant = "flush">
                {cartItems.map(item => (
                    <ListGroup.Item key = {item.product}>
                        <Row>
                            <Col md = {3}>
                            <a href = {`/hotel/${item.product}`}>
                            <Image src = {item.image} alt = {item.name} fluid rounded></Image>
                            </a>
                            </Col>
                            <Col md = {2}>
                            <h4>{item.name}</h4>
                            <p>{item.address}</p>
                            </Col>
                            <Col md = {2}>
                                <a href = {`/hotel/${item.product}`} style={{textDecoration:"none"}}>
                                Room Specifications:
                                <fieldset style = {{marginBottom: "10px"}}>
                                <center><input class="form-control" id="readOnlyInput" type="text" placeholder= {item.room} readonly=""/></center>
                                 </fieldset>
                                </a>
                                Room Quantity:
                                <div class="form-group" style = {{marginBottom: "10px"}}>
                                <select multiple="" className="form-select" id="exampleSelect2" value = {item.qty} onChange = {(e) => dispatch(addToCart(item.product, Number(e.target.value), item.startDate, item.endDate, (subtotal*e.target.value), item.room))}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                             </div>
                            </Col>
                            <Col md = {2}>
                            Check-in date: 
                            <br></br>
                            <fieldset style = {{marginBottom: "10px"}}>
                                <center><input class="form-control" id="readOnlyInput" type="text" placeholder = {item.startDate.toString().substring(0,15)} readonly=""/></center>
                                 </fieldset>
                            Check-out date: 
                            <br></br>
                            <fieldset style = {{marginBottom: "10px"}}>
                                <center><input class="form-control" id="readOnlyInput" type="text" placeholder= {item.endDate.toString().substring(0,15)} readonly=""/></center>
                                 </fieldset>
                            </Col>
                            <Col md ={2}>
                            Price (in rupees):
                            <fieldset style = {{marginBottom: "10px"}}>
                                <center><input class="form-control" id="readOnlyInput" type="text" placeholder= {item.subtotal} readonly=""/></center>
                                 </fieldset>
                            </Col>
                            <Col md = {1}>
                                <Button type = "button" variant = 'secondary' style = {{margin:"10px"}} onClick = {()=>removeFromCartHandler(item.product)}>
                                <i className = "bi bi-trash"></i></Button>
                                <Button type = "button" style = {{margin:"10px"}} variant = 'secondary'onClick = {()=>moveToWishHandler(item.product)}>
                                <i className = "bi bi-heart"></i></Button>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                )
                    
                    )}
            </ListGroup>        
        }
           </Col>
        </Row>
        <Row style = {{paddingTop:"20px"}}>
            <Col>
            <Card>
                <ListGroup variant = 'flush'>
                    <ListGroup.Item>
                        <h2>Subtotal ({cartItems.reduce((acc, item)=> acc + item.qty, 0)}) rooms booked</h2>
                        <h3>&#8377; {cartItems.reduce((acc, item) => acc + item.subtotal, 0).toFixed(2)}*</h3>
                        <h6>*Taxes not included</h6>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                        <Button type='button' className='btn btn-dark' disabled={cartItems.length === 0} onClick={checkoutHandler}>
                            Proceed to Checkout</Button> 
                        </Row>                   
                    </ListGroup.Item>
                </ListGroup>
            </Card>
            </Col>
        </Row>
        </>
    )

}

export default CartScreen
