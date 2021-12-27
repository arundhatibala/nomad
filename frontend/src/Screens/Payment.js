//Mocked buy screen - order is free
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../Components/FormContainer'
import CheckoutSteps from '../Components/CheckoutSteps'
// import CheckoutSteps from '../Components/CheckoutSteps'

const Payment = ({ }) => {

    let navigate = useNavigate()
    const cart = useSelector(state => state.cart)
    // const { shippingAddress } = cart

    // if(!shippingAddress) {
    //     navigate('/shipping')
    // }

    // const [address, setAddress] = useState(shippingAddress.address)
    // const [city, setCity] = useState(shippingAddress.address)
    // const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    // const [country, setCountry] = useState(shippingAddress.country)

    const dispatch = useDispatch()


    const submitHandler = (e) => {
        e.preventDefault()
        navigate('/placebooking')
    }
    
    return (
    <FormContainer>
        <CheckoutSteps step1 step2/>
        <br></br><br></br>
        <h1>Payment Method</h1>
        <Form onSubmit={submitHandler}>
            <h3>Your bookings have been covered by the house!</h3>
            <Button type='submit' variant='primary'>
                Continue
            </Button>

        </Form>
    </FormContainer>
    )
}

export default Payment
