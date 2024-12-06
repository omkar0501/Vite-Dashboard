import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};
export const ProductsCartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtocart: (state, action) => {
      state.products.push(action.payload);
      // console.log(state.products[0]);
    },
    removecart: (state, action) => {
      // console.log(action.payload);
      state.products = action.payload;
    },
  },
});
export const { addtocart } = ProductsCartSlice.actions;
export const { removecart } = ProductsCartSlice.actions;
export default ProductsCartSlice.reducer;
