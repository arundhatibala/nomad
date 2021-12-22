import React, { useState, useEffect } from 'react'
import FormContainer from '../Components/FormContainer'
import Message from '../Components/Message'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Components/Loader'
import { Link, useLocation, useNavigate } from 'react-router-dom'
// import { register } from '../actions/userActions'
import { Form, Button, Row, Col } from 'react-bootstrap'



const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    // const dispatch = useDispatch()

    
    // const userRegister = useSelector(state => state.userRegister)
    // const { loading, error, userInfo, success } = userRegister

    // let navigate = useNavigate()
    // let location = useLocation()

    // const submitHandler = (e) => {
    //     e.preventDefault()
    //     if (password !== confirmPassword) {
    //         setMessage('Passwords do not match')
    //     }
    //     else {
    //         dispatch(register(name, email, password))
    //         { success && navigate('/cart') }
    //     }
    // }
    return (
        <FormContainer>
            <h1>Sign Up</h1>
            {/* {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />} */}
            {/* <Form onSubmit={submitHandler}> */}
            <Form.Group controlId='name'>
                <Form.Label>Name</Form.Label>
                <Form.Control type='name' placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <br></br>
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
            <Form.Group controlId='ConfirmPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Confirm password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <br></br>
            <Button type='submit' variant='secondary'>
                Sign Up
            </Button>
            {/* </Form> */}
            <Row className='py-3'>
                <Col>
                    {/* Have an Account? <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>Login</Link> */}
                </Col>
            </Row>
        </FormContainer>
    )
}

export default Register
