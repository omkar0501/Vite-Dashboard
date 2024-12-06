import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Portfolio.css';

function Projects() {
  return (
    <div>
        <Container>
            <h1 className='projects fw-bold d-flex justify-content-center mt-3'>PROJECTS</h1>
            <Row>
                <Col md={4}>
                    <div className='project-div'>
                    <img src='/fooddonation.jpg' className='pimg1' style={{height:'auto',width:'100%'}}/>
                    <p className='project-p1'>NOVEMBER 2024</p>
                    <p className='project-p2'>AAHAR - FOOD DONATION APP</p>
                    <p className='project-p3'>Aahar is a food donation app connecting users with local restaurants, cafes, and food trucks to donate surplus food. It enhances dining experiences while reducing food waste and benefiting the community. With a user-friendly interface, you can easily find nearby food donors and make a positive impact. </p>
                    </div>
                </Col>
                <Col md={4}>
                    <div className='project-div'>
                        <img src='/facedetection.jpg' className='pimg2' style={{height:'auto',width:'100%'}}/>
                        <p className='project-p1'>MAY 2023</p>
                        <p className='project-p2'>CRIMINAL FACE DETECTION </p>
                        <p className='project-p3'>This project aims to identify criminals in investigation departments
                            by storing their segmented images in a database. This user-friendly
                            project facilitates easy identification of criminals for operators and
                            eyewitnesses. </p>
                    </div>      
                </Col>
                <Col md={4}>
                    <div className='project-div'>
                        <img src='/ssm.jpg' className='pimg3' style={{height:'auto',width:'100%'}}/>
                        <p className='project-p1'>AUGUST 2022</p>
                        <p className='project-p2'>SOCIETY SECURITY SYSTEM</p>
                        <p className='project-p3'>
                        This project is an online recruitment system where users can apply for job vacancies via registered accounts. Visitors can view and apply for jobs remotely, while administrators manage most aspects, excluding company-specific evaluations.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Projects