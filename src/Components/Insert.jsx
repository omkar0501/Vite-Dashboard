import React from "react";
import { createContext } from "react";
import { useEffect } from "react";
import data from './data.json'
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from 'react-bootstrap/Form'
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import ToDo from "./ToDo";

export const nameContext=createContext();
export const ageContext=createContext();
export const hobbyContext=createContext();
export const imgContext=createContext();

const Insert=()=>{

    const[pname,setPname]=useState('');
    const[page,setPage]=useState('');
    const[phobby,setPhobby]=useState('');
    const[pimg,setPimg]=useState('');

    const clear=()=>{
        setPage('');
        setPhobby('');
        setPname('');
        setPimg('');
    }
   
      
        const handleFileChange = (event) => {
          const file = event.target.files[0]; 
          if (file) {
            setPimg(file.name); 
            // console.log("fname=>"+file.name);
          }
        }
    return(
        <div>
            <Row>
                <Col md={4}>
                    <Form.Control className="me-3" style={{width:'90%'}} placeholder='Enter Name' value={pname} onChange={(e)=>setPname(e.target.value)} type='text'></Form.Control>   
                </Col>
                <Col md={2}>
                    <Form.Control className="me-3" style={{width:'90%'}} placeholder='Enter Age' value={page} onChange={(e)=>setPage(e.target.value)} type='text'></Form.Control>
                    
                </Col>
                <Col md={2}>
                    <Form.Control className="me-3" style={{width:'90%'}} placeholder='Enter Hobby' value={phobby} onChange={(e)=>setPhobby(e.target.value)} type='text'></Form.Control>
                   
                </Col>
                <Col md={2}>
                    <Form.Control className="me-3" style={{width:'100%'}}  onChange={handleFileChange} type='file'></Form.Control>
                   
                </Col>
                <Col md={2}>
                    <Button variant="outline-secondary fw-bold" onClick={clear}>Clear</Button>
                </Col>
            </Row>  
            <Row>
                <nameContext.Provider value={pname}>
                    <ageContext.Provider value={page}> 
                        <hobbyContext.Provider value={phobby}>
                            <imgContext.Provider value={pimg}>
                                <ToDo/>
                            </imgContext.Provider>
                        </hobbyContext.Provider>
                    </ageContext.Provider>
                </nameContext.Provider>
            </Row>
          
        </div>
        
    )
}
export default Insert;