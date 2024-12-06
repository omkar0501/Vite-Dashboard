import React, { useReducer, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form'
import { MdDelete } from "react-icons/md";


const initialArg = {
    count :0,
    todo :[{text:''}],
    id :0,
};

const reducer = (state, action) =>{
    console.log(action.text)
    switch(action.type){
     case 'increment':   
        return {count: state.count+1};
     case 'decrement':   
        return {count: state.count-1};
     case 'add':
        {
            const newTodo ={
                text : action.text,
                
            };
        
        return{
            todo:[...state.todo,newTodo],
            id: state.id+1
        }}
     case 'remove':
        const updatedTodo = state.todo.filter((_, index) => index !== action.id); // dont use UpdatedTodo.splice bcoz splice is a object not an array
            return {
                ...state,
                todo: updatedTodo,
                id: state.id - 1
            };
     default:   
        return {count: state.count};
    }
 }

export const UseReducer2 =()=>{
   
    const[state,dispatch] = useReducer(reducer,initialArg);
    const[state1,dispatch1] = useReducer(reducer,initialArg);  
    const[input,setInput]  = useState('');

   
    return(
        <>
            <Button onClick={()=>{dispatch({type:'increment'})}}>+</Button>
                Count :{state.count}
            <Button onClick={()=>{dispatch({type:'decrement'})}}>-</Button>
            <Form>
                <Form.Control value={input} onChange={(e)=>setInput(e.target.value)} type="text"></Form.Control>
                <Button onClick={()=>{dispatch1({type:'add',text:input});setInput('')}}>Add</Button>
            </Form>
            <ul>
                {
                    // state1.todo.map((data,i)=>{
                        <div>{state1.todo.map((data,i)=>
                           <li key={i}>{i} {data.text} <MdDelete onClick={()=>{dispatch1({type:'remove',id:i})}} /></li>
                        )}</div>
                    // })
                }
            </ul>
        </>
    )
}


