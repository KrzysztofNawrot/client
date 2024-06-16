import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    metro: {
        isWorking: true
    },
    user: {
        isDev: true
    }
}

const reducers = {

}

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: reducers
})

export const actions = dataSlice.actions;
export default dataSlice.reducer;