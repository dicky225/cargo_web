import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    criteria: null,
    results: [],
    isLoading: false,
    error: null,
    lastSearchCriteria: null,
    lastSearchMode: 'flight-number',
};

const flightStatusSlice = createSlice({
    name: 'flightStatus',
    initialState,
    reducers: {
        setSearchResults(state, action) {
            state.criteria = action.payload.criteria || null;
            state.results = action.payload.results || [];
            state.lastSearchCriteria = action.payload.criteria || null;
            state.lastSearchMode = action.payload.mode || 'flight-number';
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
        clearLastSearchCriteria(state) {
            state.lastSearchCriteria = null;
            state.lastSearchMode = 'flight-number';
        },
    },
});

export const { setSearchResults, setSearchLoading, setSearchError, clearSearchResults, clearLastSearchCriteria } =
    flightStatusSlice.actions;

export default flightStatusSlice.reducer;
