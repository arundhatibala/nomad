import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
    return (
        <Card className = 'my-3 p-3'>
            <Link 
            // style = {{textDecoration:'none'}} 
            to= {`/product/${product._id}`}>
                <Card.Img src = {product.Image_URL_1} variant = "top" />
                </Link>
                
                <Card.Body>
                <Link 
                // style = {{textDecoration:'none'}} 
                to = {`/product/${product._id}`}>
                    <Card.Title as='div'>
                        {product.Name}
                        </Card.Title> 
                </Link>

                <Card.Text as='div'>
                    <Rating value = {product.Ratings} color = '#f4959a' />
                </Card.Text>
                <Card.Text as ='h6'>&#8377; {product.Price}</Card.Text>
            </Card.Body>
        </Card>
    )
}
export default Product
