import { configureStore } from "@reduxjs/toolkit";
import firstReducer from "../reducers";


const store = configureStore({
    //reduce
    reducer: firstReducer
});

export default store;
