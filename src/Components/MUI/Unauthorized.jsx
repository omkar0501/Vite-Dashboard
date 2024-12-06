import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Unauthorized =()=>{
    const navigate = useNavigate();
    return(
        <>
            <h1 className="m-3 fw-bold"> 404 - Unauthorized </h1>
            <p className="m-2 fs-4">You are not authorized to access this page.</p>
            <img src="/unauthorized.jpg" className="d-flex mx-auto" height='auto' width='30%'></img>
            <Button className="mt-3 fw-bold" onClick={()=> navigate('/')} variant="text">Back to Login</Button>
        </>
    )
}