import React from 'react';
import './Portfolio.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { MdMovieEdit } from "react-icons/md";
import { FaPersonSwimming } from "react-icons/fa6";


function About() {
  return (
    <div>
        
      <Row className='m-0 mt-5 mb-5 me-2'>
        <Col xs={12} md={6}>
          <img src='/sanket.jpeg' className='mypic' />
        </Col>

        <Col xs={12} md={6} className=''>
          <h4 className='head1-am'>MY INTRO</h4><br/><br/>
          {/* <h2 className='head1-am'>About Me</h2><br/><br/> */}
          <p className='introtext'>Strong in design and integration with intuitive problem-solving skills. Proficient in HTML, CSS, BOOTSTRAP, REACT, JAVA, and SQL. Passionate about implementing and launching new projects.Looking to start the career as an entry-level software
developer.</p>
          <Row className='mt-4'> 
            <Col xs={3} md={3} className='key d-flex  justify-content-left'> 
              Name:
            </Col>
            <Col xs={9} md={5} className='value d-flex  justify-content-left'>
              Sanket Jalindar Gaware
            </Col>
          </Row>
          <Row> 
            <Col xs={5} md={3} className='key d-flex mt-3 justify-content-left text-align-left'> 
              Date of Birth:
            </Col>
            <Col xs={5} md={5} className='value d-flex mt-3 justify-content-left'>
              April 9 2001
            </Col>
          </Row>
          <Row> 
            <Col xs={3} md={3} className='key d-flex mt-3 justify-content-left'> 
              Address:
            </Col>
            <Col xs={9} md={5} className='value d-flex mt-3 justify-content-left'>
              KalePadal Hadpsar ,Pune
            </Col>
          </Row>
          <Row> 
            <Col xs={3} md={3} className='key d-flex mt-3 justify-content-left'> 
              Email:
            </Col>
            <Col xs={5} md={5} className='value d-flex mt-3 justify-content-left'>
              gawaresanket03@gmail.com
            </Col>
          </Row>
          <Row> 
            <Col xs={3} md={3} className='key d-flex mt-3 justify-content-left'> 
              Phone:
            </Col>
            <Col xs={9} md={5} className='value d-flex mt-3 justify-content-left'>
              +91-8412031538
            </Col>
          </Row>
          <Row> 
            <Col xs={4} md={3} className='key d-flex mt-3 justify-content-left'> 
              Pin Code:
            </Col>
            <Col xs={5} md={5} className='value d-flex mt-3 justify-content-left'>
            411028
            </Col>
          </Row>
          <Row className='mt-5 fw-bold' style={{borderTopLeftRadius:'20%',borderBottomLeftRadius:'20%'}}>
        {/* Reading Travel  Anime Swimming */}
            <Col xs={3} md={3} className='hobby-icons' >
              <IoBookSharp  style={{height:'40%',width:'40%'}} />Reading
            </Col>
            <Col xs={3} md={3} className='hobby-icons'>
              <MdOutlineTravelExplore style={{height:'40%',width:'40%'}} />Travel
            </Col>
            <Col xs={3} md={3} className='hobby-icons'>
              <MdMovieEdit style={{height:'40%',width:'40%'}} />Animes
            </Col>
            <Col xs={3} md={3} className='hobby-icons'>
              <FaPersonSwimming style={{height:'40%',width:'40%'}} />Swimming
            </Col>
          </Row>
        </Col>
      </Row>
     
  
  

    </div>
  )
}

export default About