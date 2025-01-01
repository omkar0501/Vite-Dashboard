import React from "react";
import { useState, createContext } from "react";
import Comp2 from "./Comp2/Comp2";
import Comp3 from "./Comp2/Comp3/Comp3";

export const userContext = createContext();

const Comp1 = () => {
  const [user, setUser] = useState("Mustang");
  return (
    <div>
      <userContext.Provider value={user}>
        <h1>Hello {user}</h1>
        <Comp2 />
      </userContext.Provider>
    </div>
  );
};
export default Comp1;
