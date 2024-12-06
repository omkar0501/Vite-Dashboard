
import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/esm/Button";

const Comp=()=>{
    const [name,setname]=useState('');
    const [age,setage]=useState(0);

    const handleonchange=()=>{
        alert(name+", yoy are "+age+" years Old");
    }

    return(
        <div>
            <h1>This is an example of Fnctional Component</h1>
            <Form>
                <Form.Group>
                <Form.Label className="d-flex float-left">Enter Name</Form.Label>
                <Form.Control style={{width:'30%'}} onChange={(e)=>setname(e.target.value)} type="text"></Form.Control>
                </Form.Group>
                <Form.Group>
                <Form.Label className="d-flex float-left mt-3">Enter Age</Form.Label>
                <Form.Control style={{width:'30%'}} onChange={(e)=>setage(e.target.value)} type="number"></Form.Control>
                </Form.Group>
                <Button className="d-flex float-left mt-3" onClick={handleonchange}>Submit</Button>
            </Form>
        </div>
    )
}
export default Comp;