import { createSlice } from "@reduxjs/toolkit";

export const bannerSlice = createSlice({
    name : "banner",
    initialState : {
    value : "Hello from Redux store"
    },
    reducers : {}
})

export const {} = bannerSlice.actions;
export default bannerSlice.reducer;