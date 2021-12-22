import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import {useNavigate } from 'react-router'
import { HashLink as Link } from 'react-router-hash-link'

const Header = () => {
  let navigate = useNavigate()
    return (
        <header style= {{backgroundColor: 'rgba(255, 255, 255, 0)'}}>
            <Navbar collapseOnSelect expand="lg" variant="dark" style = {{padding: '10px 5px'}}>
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
      <Nav.Link href = "/login" className = "bi bi-person-circle"></Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </header>
    )
}

export default Header
