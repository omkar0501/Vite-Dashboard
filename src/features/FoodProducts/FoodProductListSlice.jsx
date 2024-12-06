import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  TotalPrice: 0,
};

export const FoodProductListSlice = createSlice({
  name: "foodorder",
  initialState,
  reducers: {
    addtoordeercart: (state, action) => {
      var isId = true;
      state.products.map((p) => {
        if (p.id === action.payload.id) {
          isId = false;
        }
      });
      if (isId == true) {
        state.products.push(action.payload);
        state.TotalPrice += action.payload.price;
      } else {
        state.TotalPrice += action.payload.price;
      }
      // console.log(
      //   JSON.parse(JSON.stringify(state.products + " " + state.TotalPrice))
      // );
    },

    removeorderfromcart: (state, action) => {
      state.products.map((p) => {
        if (p.id === action.payload) {
          state.TotalPrice -= p.price;
        }
      });
      state.products = state.products.filter((p) => p.id !== action.payload);

      // console.log(JSON.parse(JSON.stringify(p)));
    },

    removeprice: (state, action) => {
      state.TotalPrice -= action.payload;
    },

    removeall: (state) => {
      state.products = [];
      state.TotalPrice = 0;
    },
  },
});
export const { addtoordeercart } = FoodProductListSlice.actions;
export const { removeorderfromcart, removeprice, removeall } =
  FoodProductListSlice.actions;
export default FoodProductListSlice.reducer;
