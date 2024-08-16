import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    query: null,
}

const querySlice = createSlice({
    name: 'searchQuery',
    initialState,
    reducers: {
        setSearchQuery: (state, action) => {
            state.query = action.payload;
        },
        resetSearchQuery: (state) => {
            state.query = null;
        },
    },
})

export const { setSearchQuery, resetSearchQuery } = querySlice.actions;

export default querySlice.reducer;