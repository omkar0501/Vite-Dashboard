import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos:[],
    i:0,
}

export const TodoSlice = createSlice({
    name :'todo',
    initialState,
    reducers:{
        addtodo:(state,action) => {
            const newTodo ={
                text:action.payload,
            }
            state.todos = [...state.todos,newTodo]
            console.log(state.todos);
        },
        removetodo:(state,action) => {                 
            state.i = action.payload;
            state.todos = state.todos.filter((data,i)=>state.i !== i);
        }
    }
})

export const { addtodo , removetodo } = TodoSlice.actions;
export default TodoSlice.reducer;