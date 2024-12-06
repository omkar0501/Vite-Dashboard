import React, { useContext } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";

const Home1=()=>
{

    // const {user,setUser}=useContext(userContext1)


    return(
          
            <div>
            <nav>
                <ul className="d-flex">
                    <Link className="me-5" to='/Comp'>Comp1</Link> 
                    <Link className="me-5" to='/Parent'>Comp2</Link> 
                    <Link className="me-5" to='/Counter'>Counter</Link> 
                    <Link className="me-5" to='/Comp1'>Comp1</Link>
                    <Link className="me-5" to='/RenderCount'>UseRef</Link>
                    <Link to='/UseMemoEg'>UseMemo</Link>
                    <Link className="ms-5" to='/UseREducer'>UseReducer</Link>
                    {/* <Link className="ms-5" to='/TodoApp'>TodoApp</Link>
                    <Link className="ms-5" to='/ToDo'>ToDo</Link> */}
                </ul>
            </nav>
            <Outlet/>
            </div>
          
        
    )
}
export default Home1;