import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
const Footer = () => {
    return (
        <footer id = "contact">
        {/* <Container style = {{maxWidth: "100%", backgroundColor:"rgba(255,255,255,0.3)"}}>
            <Row>
                <Col classNameName = "text-center py-3">
                    &copy; nomad inc. 2021.
                </Col>
            </Row>
        </Container> */}
        <Container style = {{padding: "30px 50px", maxWidth: "100%", backgroundColor:"rgba(0,0,0,0.4)", marginTop:"50px"}}>
        <div style={{float:"right", display: "flex", flexDirection:"column"}}>
                    <a href="https://instagram.com"><i className="bi bi-instagram footerIcon"></i></a>
                        <a href="https://facebook.com"><i className="bi bi-facebook footerIcon"></i></a>
                        <a href="https://twitter.com"><i className="bi bi-twitter footerIcon"></i></a>
                    </div>
                <Row>
                    <Col sm = {6} md ={3}>
                        <h5>destinations.</h5>
                            <a style = {{textDecoration:"none"}} href="/amsterdam">Amsterdam</a>
                            <br></br>
                            <a style = {{textDecoration:"none"}} href="/buenosaires">Buenos Aires</a>
                            <br></br>
                            <a style = {{textDecoration:"none"}} href="/newyorkcity">New York City</a>
                            <br></br>
                            <a style = {{textDecoration:"none"}} href="/tokyo">Tokyo</a>
                    </Col>
                    <Col sm = {6} md ={3}>
                        <h5>social.</h5>
                            <a style = {{textDecoration:"none"}} href="instagram.com">Instagram</a>
                            <br></br>
                            <a style = {{textDecoration:"none"}} href="facebook.com">Facebook</a>
                            <br></br>
                            <a style = {{textDecoration:"none"}} href="twitter.com">Twitter</a>
                        
                    </Col>
                    <Col sm = {6} md ={3}>
                        <h5>contact.</h5>
                        <p style = {{paddingBottom:"0px", marginBottom:"0px"}}>Hey! Feel free to reach out to us at:</p>
                        <a style = {{textDecoration:"none"}} href="mailto:contact@nomad.com"><i className="bi bi-envelope contactIcon"></i>contact@nomad.com</a>
                        <br></br>
                        <a><i className="bi bi-telephone contactIcon"></i>9871726354</a>
                    </Col>
                </Row>
                <br></br>
                <br></br>
                <br></br>
               <center><strong> <p style = {{marginBottom:"5px"}}className="copyright">nomad inc. © 2021.</p></strong></center>
            </Container>
        </footer>
    )

}

export default Footer
