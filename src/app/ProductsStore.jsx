import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../features/Products/ProductCartSlice'

export const ProductsStore = configureStore({
    reducer:{
        cart:productReducer,
    },
})