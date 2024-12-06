import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ProductsCart } from "./ProductsCart";
import { MyCart } from "./MyCart";
import { patch } from "@mui/material";

export const RoutingFile =()=> {
    const router = createBrowserRouter([
        {
            path:'/',
            element:<ProductsCart/>,
        },
        {
            path:'/mycart',
            element:<MyCart/>,
        },
        
    ])
    return(
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    )
}