//Mocked buy screen - booking is free
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../Components/FormContainer'
import CheckoutSteps from '../Components/CheckoutSteps'

const Payment = ({ }) => {

    let navigate = useNavigate()
    const cart = useSelector(state => state.cart)

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
            <h3>Your bookings is on the house!</h3>
            <Button type='submit' variant='primary'>
                Continue
            </Button>

        </Form>
    </FormContainer>
    )
}

export default Payment
