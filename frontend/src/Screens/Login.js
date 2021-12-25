import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import FormContainer from '../Components/FormContainer'
import  { login } from '../actions/userActions'
import { USER_LOGIN_SUCCESS } from '../constants/userConstants'
import axios from 'axios'
// import Google from '../google.png'


const Login = ({ }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin || {} )
    const { loading, error, userInfo, success } = userLogin  
    const [data, setData] = useState("")

    let navigate = useNavigate()
    let location = useLocation()

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(async () => {
        if(userInfo)
        {
            navigate(redirect)
        }
        const callBack = await axios.get("api/users/auth/google")
        setData(callBack.data.loginLink) 
        console.log(data)
    },[userInfo, useNavigate, redirect, data])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
        {success && navigate('/cart')}
    }
    return (
        
        <FormContainer>
            <center><h1>Sign In</h1></center>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <br></br>
                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <br></br>
                <Button type='submit' variant='secondary'>
                    Sign In
                </Button>
                </Form>
            <Row className='py-3'>
                <Col>
                New Customer? <Link to={redirect ? `/register?redirect=${redirect}`:'/register'}>Register</Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default Login
