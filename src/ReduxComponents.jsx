import React, { Fragment } from "react";
import { Provider } from "react-redux";
import { store } from "./app/Store";
// import { Counter } from "./features/counter/Counter";
// import { Arithmatic } from "./features/Arithmatic/Arrthmatic";
// // import { Todo } from "./features/Todo/Todo";
// import { ProductsStore } from "./app/ProductsStore";
// import { ProductsCart } from "./features/Products/ProductsCart";
// import { RoutingFile } from "./features/Products/RoutingFile";
import { FoodProductList } from "./features/FoodProducts/FoodProductList";
import UserList from "./features/AsyncThunk/UserList";

export const RedeuxComponents = () => {
  return (
    <>
      <Fragment>
        <Provider store={store}>
          {/* <Counter/> */}
          {/* <Arithmatic/> */}
          {/* <Todo/> */}
          {/* <RoutingFile /> */}
          {/* <FoodProductList /> */}
          <UserList />
        </Provider>
      </Fragment>
    </>
  );
};
