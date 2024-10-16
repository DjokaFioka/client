import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
    data: number;
    title: string;
}

const initialState: CounterState = {
    data: 42,
    title: 'YARC (yet another redux counter with Redux toolkit)'
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.data += action.payload //here we can mutate state with redux
        },
        decrement: (state, action) => {
            state.data -= action.payload //here we can mutate state with redux
        }
    }
})

export const {increment, decrement} = counterSlice.actions;