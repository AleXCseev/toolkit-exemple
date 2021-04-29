import {createSlice} from "@reduxjs/toolkit";

const reduxSlice = createSlice({
    name: "toolkit",
    initialState: {
        count: 0
    },
    reducers: {
        increment(state) {
            state.count = state.count + 1
        },
        decrement(state) {
            state.count = state.count - 1
        },
    }
});

export default reduxSlice.reducer
export const { increment, decrement } = reduxSlice.actions