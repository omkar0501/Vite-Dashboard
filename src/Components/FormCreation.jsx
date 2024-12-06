import React, { useContext } from "react";
import { FormInfoContext } from "./TextField";

const FormCreation =()=>{

    const infos=useContext(FormInfoContext);

    return(
        <div>
            {infos.map((info,i)=>(
                <Row key={i}>
                <Col>
                    {info.key}
                </Col>
                <Col>
                {info.value}
                </Col>
            </Row>
            ))}
            
        </div>
    )
}
export default FormCreation;