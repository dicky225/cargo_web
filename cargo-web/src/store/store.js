import { configureStore } from '@reduxjs/toolkit';
import flightStatusReducer from './flightStatusSlice';

export const store = configureStore({
    reducer: {
        flightStatus: flightStatusReducer,
    },
});
