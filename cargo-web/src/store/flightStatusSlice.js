import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    criteria: null,
    results: [],
    isLoading: false,
    error: null,
};

const flightStatusSlice = createSlice({
    name: 'flightStatus',
    initialState,
    reducers: {
        setSearchResults(state, action) {
            state.criteria = action.payload.criteria || null;
            state.results = action.payload.results || [];
        },
        setSearchLoading(state, action) {
            state.isLoading = Boolean(action.payload);
        },
        setSearchError(state, action) {
            state.error = action.payload || null;
        },
        clearSearchResults(state) {
            state.criteria = null;
            state.results = [];
            state.isLoading = false;
            state.error = null;
        },
    },
});

export const { setSearchResults, setSearchLoading, setSearchError, clearSearchResults } =
    flightStatusSlice.actions;

export default flightStatusSlice.reducer;
