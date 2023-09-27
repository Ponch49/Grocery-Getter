import { configureStore } from "@reduxjs/toolkit";
import itemReducer from '../reducers/itemUpdate';

export const store = configureStore({
    reducer: {
        item: itemReducer,
    },
})