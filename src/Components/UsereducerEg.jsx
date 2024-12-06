import React from "react";
import { useReducer } from "react";
import Button from "react-bootstrap/esm/Button";

const inarg=0;
const reducer=(state,action)=>{
    switch(action){
        case 'add':
            return state+1;
        case 'sub':
            return state-1;
        case 'reset':
            return 0;
        default:
            throw new Error("Unexpected Action");
    }
};

const UsereducerEg=()=>{

    
    const [cnt,dispatch]=useReducer(reducer,inarg);

    return(
        <div>
            <h2>{cnt}</h2>
            <Button className="me-3" onClick={()=>dispatch('add')}>Add</Button>
            <Button className="me-3" onClick={()=>dispatch('sub')}>Subtract</Button>
            <Button className="me-3" onClick={()=>dispatch('reset')}>Reset</Button>
        </div>
    );
};
export default UsereducerEg;