import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import createSagaMiddleware from "@redux-saga/core";
import counterSlide from "./counterSlice";
import globalSlide from "./globalSlide";
import newsSlice from "./news/newsSlice";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  counter: counterSlide,
  global: globalSlide,
  news: newsSlice,
});

const store = configureStore({
  reducer,
  middleware: (gDM) => gDM().concat(logger, sagaMiddleware),
});

export default store;
