import React from 'react'
import {Link, useParams} from 'react-router-dom'
import {Row, Col, Button, Image, ListGroup, Card, Carousel, CarouselItem, Breadcrumb, Form, ListGroupItem} from 'react-bootstrap'
import Rating from '../Components/Rating'
import hotels from '../hotels'
import DatePicker from "react-datepicker"

const HotelScreen = () => {
    const { id } = useParams()
    const hotel = hotels.find(p => p._id === parseInt(id))

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
                                    <Form.Select>
                                    <option>Single Room</option>
                                    <option>Studio</option>
                                    <option>Suite</option>
                                    </Form.Select>
                                    </Col>
                                    <Col>
                                    <Form.Select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    </Form.Select>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            {/* <ListGroup.Item>
                                Check in date: <DatePicker />
                                <br></br>
                                Check out date: <DatePicker />
                            </ListGroup.Item> */}
                            <ListGroup.Item>
                                <Row>
                                    <Col>Subtotal:</Col>
                                    <Col>&#8377; 0</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                <button type="button" className="btn btn-outline-success">Book Now</button>
                                </Row>
                                <br></br>
                                <Row>
                                <button type="button" className="btn btn-outline-primary">Add to Bucket List</button>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                        <br></br>
                        <h5>Amenities include:</h5>
                        <p>{hotel.amenities}</p>
                        </Col>
                        </Row>
        </>
    )
}

export default HotelScreen
