import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slices/counterSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

export default store;

export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
