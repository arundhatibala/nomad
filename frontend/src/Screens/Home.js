import React from 'react'
import { Card, Row, Col, Container } from 'react-bootstrap' 
import Fade from 'react-reveal/Fade'
import Amsterdam from '../Cards/Amsterdam.png'
import BuenosAires from '../Cards/BuenosAires.png'
import Tokyo from '../Cards/Tokyo.png'
import NYC from '../Cards/NYC.png'
import CapeTown from '../Cards/Capetown.png'
import mainImage from '../Cards/mainImage.jpg'
const Home = () => {

    return (
        <>
        <center>
         <div className = "centered">   
        <Fade cascade duration={4000}>
        <h1 style ={{fontSize:"180px", margin: "0px"}}>nomad.</h1>
        <h1 style ={{fontSize:"25px", margin: "0px"}}>belong anywhere</h1>
        </Fade>
        <br></br>
        {/* <Card className="py-1 px-1">
            <Card.Img src = {mainImage}></Card.Img>
        </Card> */}
        </div>
        </center>
        <Row style ={{marginTop: "650px"}}>
            <h2 style ={{padding:"0p"}}>destinations.</h2>
            <Col style = {{padding: "5px", margin:"0px"}}>
                <Card className = "px-1 py-1" style = {{marginTop: "50px", borderRadius:"0px"}}>
                <Card.Img src = {Amsterdam} style = {{borderRadius:"0px"}}/>
                <Card.ImgOverlay className = "overlay" style = {{borderRadius:"0px"}}>
                    <Container style = {{margin: "0px", padding: "0px", borderRadius:"0"}}>
                        <h4 className = "overlayText">Amsterdam</h4>
                    </Container>
                </Card.ImgOverlay>
        </Card>
            </Col>
            <Col style = {{padding: "5px"}}>
                <Card className = "px-1 py-1" style = {{marginTop: "50px", borderRadius:"0px"}}>
                <Card.Img src = {BuenosAires} style = {{borderRadius:"0px"}}/>
                <Card.ImgOverlay className = "overlay" style = {{borderRadius:"0px"}}>
                    <Container style = {{margin: "0px", padding: "0px", borderRadius:"0"}}>
                        <h4 className = "overlayText">Buenos Aires</h4>
                    </Container>
                </Card.ImgOverlay>
        </Card>
            </Col>
            {/* <Col style = {{padding: "5px"}}>
                <Card className = "px-1 py-1" style = {{marginTop: "50px", borderRadius:"0px"}}>
                <Card.Img src = {CapeTown} style = {{borderRadius:"0px"}}/>
                <Card.ImgOverlay className = "overlay" style = {{borderRadius:"0px"}}>
                    <Container style = {{margin: "0px", padding: "0px", borderRadius:"0"}}>
                        <h4 className = "overlayText">Cape Town</h4>
                    </Container>
                </Card.ImgOverlay>
        </Card>
        </Col>  */}
            <Col style = {{padding: "5px"}}>
                <Card className = "px-1 py-1" style = {{marginTop: "50px", borderRadius:"0px"}}>
                <Card.Img src = {NYC} style = {{borderRadius:"0px"}}/>
                <Card.ImgOverlay className = "overlay" style = {{borderRadius:"0px"}}>
                    <Container style = {{margin: "0px", padding: "0px", borderRadius:"0"}}>
                        <h4 className = "overlayText">New York City</h4>
                    </Container>
                </Card.ImgOverlay>
        </Card>
            </Col>
            <Col style = {{padding: "5px"}}>
                <Card className = "px-1 py-1" style = {{marginTop: "50px", borderRadius:"0px"}}>
                <Card.Img src = {Tokyo} style = {{borderRadius:"0px"}}/>
                <Card.ImgOverlay className = "overlay" style = {{borderRadius:"0px"}}>
                    <Container style = {{margin: "0px", padding: "0px", borderRadius:"0"}}>
                        <h4 className = "overlayText">Tokyo</h4>
                    </Container>
                </Card.ImgOverlay>
        </Card>
            </Col>
        </Row>
        </>
    )
}

export default Home
