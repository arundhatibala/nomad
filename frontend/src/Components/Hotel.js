import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'


const Hotel = ({hotel}) => {
    return (
        <Card className = 'my-2 p2 rounded'>
           {/* <a href = {`/hotel/${hotel._id}`}>*/}
        <Card.Img src = {hotel.image_room} variant = "top" />
        {/* </a>  */}
        <Card.Body>
        <Card.Title as = "h4">
            {hotel.name}
        </Card.Title>
        <Card.Text as ="h5" style = {{fontWeight:'normal'}}>
            {hotel.location}
        </Card.Text>
        <Card.Text style = {{fontWeight:'normal', color:"#cce0ff", fontSize: "15px"}}>
            {hotel.amenities}
        </Card.Text>
        <Card.Text as = "h6">
                    <Rating value = {hotel.rating} color = '#e6ccff' />
        </Card.Text>
        <Card.Text as ='h6' style = {{fontWeight: 'normal'}} >&#8377;{hotel.price} per night</Card.Text>
        </Card.Body>
        </Card>
    )
}

export default Hotel
