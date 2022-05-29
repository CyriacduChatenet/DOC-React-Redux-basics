import { createSlice } from "@reduxjs/toolkit";

export const inputSlice = createSlice({
    name : "formInput",
    initialState : {
        value : "",
    },
    reducers : {
        setText : (state, {payload}) => {
            state.value = payload;
        }
    }
})

export const {setText} = inputSlice.actions;
export default inputSlice.reducer;