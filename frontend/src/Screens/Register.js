import React, { useState, useEffect } from 'react'
import FormContainer from '../Components/FormContainer'
import Message from '../Components/Message'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Components/Loader'
import { Link, useLocation, useNavigate } from 'react-router-dom'
// import { register } from '../actions/userActions'


const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    
    const userRegister = useSelector(state => state.userRegister)
    const { loading, error, userInfo, success } = userRegister

    let navigate = useNavigate()
    let location = useLocation()

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
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}

        </FormContainer>
    )
}

export default Register
