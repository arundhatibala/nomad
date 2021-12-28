import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import {useNavigate } from 'react-router'
import { HashLink as Link } from 'react-router-hash-link'
import { useDispatch, useSelector} from 'react-redux'
import { logout } from '../actions/userActions'
import { NavDropdown} from 'react-bootstrap' //, Button , Container, 

const Header = () => {
  let navigate = useNavigate()
  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const logoutHandler = () => {
    navigate("/")
    dispatch(logout())
  }
    return (
        <header style= {{backgroundColor: 'rgba(255, 255, 255, 0)'}}>
            <Navbar collapseOnSelect expand="lg" variant="dark" fix="top" style = {{padding: '10px 5px'}}>
  <Container style = {{padding: '0px 12px'}}>
  <Navbar.Brand href= "/" style ={{fontFamily:'Readex Pro', fontSize: '20px'}}>nomad.</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href= "/#destinations">destinations.</Nav.Link>
      <Nav.Link href = "/#contact">contact.</Nav.Link>
    </Nav>
    <Nav>
    <Nav.Link href = "/explore" className = "bi bi-search"></Nav.Link>
    {userInfo ? (
      <NavDropdown style ={{zIndex:"2", position:"relative"}}title={userInfo.name} id="basic-nav-dropdown">
        <NavDropdown.Item href='/profile'>Profile</NavDropdown.Item>
        <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
      </NavDropdown>
      ) : 
      <Nav.Link href = "/login" className = "bi bi-person-circle"></Nav.Link>
    }
    {userInfo && <Nav.Link href = "/bookings" className = "bi bi-compass"></Nav.Link>}
    {userInfo && <Nav.Link href = "/bucketlist" className = "bi bi-heart"></Nav.Link>}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </header>
    )
}

export default Header
