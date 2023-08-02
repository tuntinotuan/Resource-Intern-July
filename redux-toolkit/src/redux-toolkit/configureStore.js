import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterSlide from "./counterSlice";
import globalSlide from "./globalSlide";

const reducer = combineReducers({ counter: counterSlide, global: globalSlide });

const store = configureStore({
  reducer,
});

export default store;
