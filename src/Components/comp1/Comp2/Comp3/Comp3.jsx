import React from "react";
import { useContext } from "react";
import { userContext } from "../../Comp1";

const Comp3=()=>{
    const user=useContext(userContext);
    return(
        <div>
            <h1>Component 3</h1><br></br>
            <h2>Hello <b>{user} </b>again !</h2>
        </div>
    )
}
export default Comp3;