import React, { useState } from "react"; 
import Form from 'react-bootstrap/Form';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import { addtodo, removetodo } from "./TodoSlice";
import { Table } from "@mui/material";
import { MdDelete } from "react-icons/md";

export const Todo =()=>{
    const dispatch = useDispatch();
    const todo = useSelector((state) => state.todo.todos);
    const[input,setInput] = useState('');
    return(
        <>
            <Form>
                <Form.Control className="mb-3" value={input} onChange={(e)=>setInput(e.target.value)} />
            </Form>
            <table className="mt-3 mx-auto">                <Button onClick={()=>{dispatch(addtodo(input))}} variant="contained">Add</Button>          {/* u can add onlt one argument to a dispatch () ,if u wanna pass more than one argument pass through a object      */}

                <tbody>
                { todo.map((data,i)=>(                  // map() should return a value thats why use () after arrow not{}
                    <tr key={i}>
                        <td className="border-1 p-2">{i+1}</td>
                        <td className="border-1 p-2">{data.text}</td>
                        <td className="border-1 p-2"><MdDelete onClick={()=>{dispatch(removetodo(i))}} color="red"/></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}