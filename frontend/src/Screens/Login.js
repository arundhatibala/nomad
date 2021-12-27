import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col, FloatingLabel } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import FormContainer from '../Components/FormContainer'
import  { login } from '../actions/userActions'
import { USER_LOGIN_SUCCESS } from '../constants/userConstants'
import axios from 'axios'
import Google from '../google.png'


const Login = ({ }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin) //here #svb
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
        navigate(`/explore`) // svb thinks this is not working
    }
    return (
        
        <FormContainer>
            <br></br>
            <center><h1>Sign In</h1></center>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
                <center><Button type='submit' variant='light' className='google' 
                style= {{backgroundColor: "rgba(255, 255, 255, 0)", borderColor:"rgba(0,0,0,0)", padding:"0px", paddingBottom:"10px",paddingTop: "10px", marginLeft:"0px"}}>
                <a href={data}>       
                    <img src = {Google}></img>
                </a>
                {/* <a href={data} style={{textDecoration: "none"}}>Sign In With Google</a> */}
                </Button>
                <h4>or</h4></center>
            <Form onSubmit={submitHandler}>
                <FloatingLabel 
                controlId='email'
                label="Email Address"
                >
                    <Form.Control className = "form-floating" type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}>
                    </Form.Control>
                </FloatingLabel>
                <br></br>
                <FloatingLabel 
                controlId='password'
                label="Password"
                >
                    <Form.Control type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}>
                    </Form.Control>
                </FloatingLabel>
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
