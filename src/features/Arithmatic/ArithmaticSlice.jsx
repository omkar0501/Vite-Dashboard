import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Ip:0,
    ans: 0,
}

export const ArithmaticSlice = createSlice({
    name : 'arithmatic',
    initialState,
    reducers:{
        addition:(state,action)=>{
            state.Ip = action.payload;  //u can also write this :- const {Ip1 ,Ip2} = action.payload this is called destructing
            state.ans = parseInt(state.Ip.Ip1) + parseInt(state.Ip.Ip2);
        },
        substraction:(state,action)=>{
            state.Ip = action.payload;
            state.ans = parseInt(state.Ip.Ip1) - parseInt(state.Ip.Ip2);        
        },
        multiplication:(state,action)=>{
            state.Ip = action.payload;
            state.ans = parseInt(state.Ip.Ip1) * parseInt(state.Ip.Ip2);        
        },
        division:(state,action)=>{
            state.Ip = action.payload;
            state.ans = parseInt(state.Ip.Ip1) / parseInt(state.Ip.Ip2);        
        }
    }
})
export const {addition, substraction ,multiplication ,division } = ArithmaticSlice.actions;

export default ArithmaticSlice.reducer;