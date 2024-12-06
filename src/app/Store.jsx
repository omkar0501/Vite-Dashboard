import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/CounterSlice";
import arithmaticReducer from "../features/Arithmatic/ArithmaticSlice";
import todoReducer from "../features/Todo/TodoSlice";
import FoodProductReducer from "../features/FoodProducts/FoodProductListSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer, // action name from reducers  : reducer component
    arithmatic: arithmaticReducer,
    todo: todoReducer,
    foodorder: FoodProductReducer,
  },
});
