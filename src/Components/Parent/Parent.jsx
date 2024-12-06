import React from "react";
import Child from "./Child/Child";
import Button from 'react-bootstrap/Button'

const Parent=()=>{
    const brandname='Tata Manza';
    const cars=['bmw','oddi','benz'];

    const fun1=(a,e)=>{
        alert(a+" "+e.type);
    }
    return(
        <div>
            <h2>Who Live in my Garage ?</h2>
            <Child brand={brandname}/>
         

            <Button variant="primary" onClick={(e)=>fun1('you perfom operation',e)}>Ok</Button>
        </div>
    )
}
export default Parent;