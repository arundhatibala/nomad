import React from 'react'
import { Card, Row, Col, Container } from 'react-bootstrap' 
import Fade from 'react-reveal/Fade'
import Amsterdam from '../Cards/Amsterdam.png'
import BuenosAires from '../Cards/BuenosAires.png'
import Tokyo from '../Cards/Tokyo.png'
import NYC from '../Cards/NYC.png'
import {Link} from 'react-router-dom'
// import CapeTown from '../Cards/Capetown.png'
// import mainImage from '../Cards/mainImage.jpg'
const Home = () => {

    return (
        <>
        <center>
         <div className = "centered">   
        <Fade cascade duration={4000}>
        <h1 style ={{fontSize:"180px", margin: "50px 0px 0px 0px"}}>nomad.</h1>
        <h1 style ={{fontSize:"25px", margin: "0px"}}>belong anywhere</h1>
        </Fade>
        </div>
        </center>
        <Row style ={{marginTop: "840px"}}>
            <h1 style = {{color:"rgba(0,0,0,0)"}}id= "destinations">anchor</h1>
            <h2 style ={{padding:"0px", margin:"0px"}}>destinations.</h2>
            <Col style = {{padding: "5px", margin:"0px"}}>
                <Link to = '/amsterdam'>
                <Card className = "px-1 py-1" style = {{marginTop: "30px", borderRadius:"0px"}}>
                <Card.Img src = {Amsterdam} style = {{borderRadius:"0px"}}/>
                <Card.ImgOverlay className = "overlay" style = {{borderRadius:"0px"}}>
                    <Container style = {{margin: "0px", padding: "0px", borderRadius:"0"}}>
                        <h4 className = "overlayText">Amsterdam</h4>
                    </Container>
                </Card.ImgOverlay>
        </Card></Link>
            </Col>
            <Col style = {{padding: "5px"}}>
            <Link to = '/buenosaires'>
                <Card className = "px-1 py-1" style = {{marginTop: "30px", borderRadius:"0px"}}>
                <Card.Img src = {BuenosAires} style = {{borderRadius:"0px"}}/>
                <Card.ImgOverlay className = "overlay" style = {{borderRadius:"0px"}}>
                    <Container style = {{margin: "0px", padding: "0px", borderRadius:"0"}}>
                        <h4 className = "overlayText">Buenos Aires</h4>
                    </Container>
                </Card.ImgOverlay>
        </Card></Link>
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
            <Link to = '/newyorkcity'>
                <Card className = "px-1 py-1" style = {{marginTop: "30px", borderRadius:"0px"}}>
                <Card.Img src = {NYC} style = {{borderRadius:"0px"}}/>
                <Card.ImgOverlay className = "overlay" style = {{borderRadius:"0px"}}>
                    <Container style = {{margin: "0px", padding: "0px", borderRadius:"0"}}>
                        <h4 className = "overlayText">New York City</h4>
                    </Container>
                </Card.ImgOverlay>
        </Card></Link>
            </Col>
            <Col style = {{padding: "5px"}}>
            <Link to = '/tokyo'>
                <Card className = "px-1 py-1" style = {{marginTop: "30px", borderRadius:"0px"}}>
                <Card.Img src = {Tokyo} style = {{borderRadius:"0px"}}/>
                <Card.ImgOverlay className = "overlay" style = {{borderRadius:"0px"}}>
                    <Container style = {{margin: "0px", padding: "0px", borderRadius:"0"}}>
                        <h4 className = "overlayText">Tokyo</h4>
                    </Container>
                </Card.ImgOverlay>
        </Card></Link>
            </Col>
        </Row>
        </>
    )
}

export default Home
