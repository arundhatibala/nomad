import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
    return (
        <header style= {{backgroundColor: 'rgba(255, 255, 255, 0)'}}>
            <Navbar collapseOnSelect expand="lg" variant="dark" style = {{padding: '10px 5px'}}>
  <Container style = {{padding: '0px 12px'}}>
  <Navbar.Brand href="#" style ={{fontFamily:'Readex Pro', fontSize: '20px'}}>nomad.</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">destinations.</Nav.Link>
      <Nav.Link href="#pricing">contact.</Nav.Link>
    </Nav>
    <Nav>
    <Nav.Link href="#" className = "bi bi-search"></Nav.Link>
      <Nav.Link href="#" className = "bi bi-person-circle"></Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </header>
    )
}

export default Header
