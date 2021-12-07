import React from 'react'
import { Card } from 'react-bootstrap' 
import Fade from 'react-reveal/Fade';
const Home = () => {
    return (
        <>
        <center>  
        <Fade cascade duration={4000}>
        <h1 style ={{fontSize:"180px"}}>nomad.</h1>
        <br></br>
        <h2>Belong anywhere.</h2>
        </Fade>
        </center>
        <Card className ="py-3" style = {{marginTop: "50px"}}>
            <center><Card.Title>Destinations</Card.Title></center>
        </Card>
        </>
    )
}

export default Home
