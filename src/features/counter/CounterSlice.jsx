import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers1: {
    increment: (state) => {
      // redux toolkit allows us to write mutating logic in reducers. It
      // doesn't actually mutate the state bcoz it uses the immer library,
      // which detects changes to a draft state and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },  
    incrementByAmount: (state, action) => { 
      state.value += action.payload
    },
  }

})

// action creators are generated for each case reducer function .increment, decrement, and incrementByAmount. These modify the state directly, thanks to the immer library that redux toolkit uses internally to handle immutable state updates.
export const { increment, decrement, incrementByAmount} = counterSlice.actions

export default counterSlice.reducer