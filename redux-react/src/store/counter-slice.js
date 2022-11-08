import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        // mutating the state is ok when using redux toolkit
        // internally its converted to non-mutate ops
        increment(state) { state.counter++ },
        decrement(state) { state.counter-- },
        increase(state, action) { state.counter = state.counter + action.payload.amount },
        toggleCounter(state) { state.showCounter = !state.showCounter },
    }
})

export default counterSlice;

export const counterActions = counterSlice.actions;
