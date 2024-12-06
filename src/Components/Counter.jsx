import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";

const Counter=()=>{

    const [cnt ,setcnt]=useState(0);
    var cnt1=cnt;
    const Increment=()=>{
        setcnt(cnt+1);
    }
    const Decrement=()=>{
        setcnt(cnt-1);
    }
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setcnt(cnt1+1);
    //     },1000)
    // });
    return(
        <div>
            <p>Counter:{cnt}</p>
            <Button className="me-5" onClick={Increment}>Increment</Button>
            <Button onClick={Decrement}>Decrement</Button>
            <p>Render Count:{cnt1}</p>
        </div>
    )
}
export default Counter;