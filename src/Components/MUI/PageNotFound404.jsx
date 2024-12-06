import React from "react";

const PageNotFound404 =()=>{
    return(
        <>  <img src="/pagenotfound.png" className="d-flex mx-auto" height='auto' width='40%'></img>
            <p className="fs-5 mt-0" style={{color:'gray'}}>Somwthing went wrong</p>
            <p className="fs-3 fw-lighter" style={{color:'red',textDecorationLine:"underline"}}> Unexpected Application Error !</p>
            <h1 className="fw-bold" style={{color:'black'}}>404 Page Not Found</h1>
        </>
    )
}
export default PageNotFound404;