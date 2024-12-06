import React, { createContext, useState } from "react";
import Form from 'react-bootstrap/Form'
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import FormCreation from "./FormCreation";

export const FormInfoContext = createContext([]);

const TextField=()=>{

    const [key,setKey]=useState([]);
    const [value,setValue] = useState([]);
    
    return(
        <div>
            <Form>
                <Row>
                    <Col md={5} xs={5}>
                        <Form.Control style={{width:'100%'}} value={key} onChange={(e)=>setKey(e.target.value)} type="text"></Form.Control>
                    </Col>
                    <Col xs={1} md={1}>
                        :
                    </Col>
                    <Col md={6} xs={6}>
                    <Form.Control style={{width:'100%'}} value={value} onChange={(e)=>setValue(e.target.value)} type="text"></Form.Control>
                    </Col>
                </Row>
            </Form>
            <FormInfoContext.Provider value={[key,value]}>
                <FormCreation/>
            </FormInfoContext.Provider>
        </div>
    )
}
export default TextField;