import React from 'react'
import { Row,Col,Button,Container} from 'react-bootstrap'
import './Portfolio.css';

function Home() {
  return (
    <div>
        <Container>
        <Row>
          {/* <Col md={2}></Col> */}
             <Col>
                <h2 className='home-p1 mt-5 fw-bold'>Hello, I'm <span style={{color:'rgb(156, 154, 154)',fontWeight:'bolder'}}>Sanket Gaware </span> a Passionate Web Developer</h2>
                <h3 className='home-p2 mt-5'>Creating Modern, Responsive, and User-Friendly Websites.</h3>
                <Row className='mt-5'>
                    <Col className='d-flex justify-content-right'>
                        <Button className='home-hire'>Hire Me</Button>
                    </Col>
                    <Col className='d-flex justify-content-left '>
                        <Button className='home-download'>Download CV</Button>
                    </Col>
                </Row>
             </Col>
             {/* <Col md={3}>
             
             </Col> */}
        </Row>
        </Container>
    </div>
  )
}

export default Home