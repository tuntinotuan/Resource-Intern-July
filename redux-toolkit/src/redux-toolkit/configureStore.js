import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import createSagaMiddleware from "@redux-saga/core";
import counterSlide from "./counterSlice";
import globalSlide from "./globalSlide";
import newsSlice from "./news/newsSlice";
import rootSaga from "./rootSaga";
import cakeSlice from "./cakes/cakeSlice";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  counter: counterSlide,
  global: globalSlide,
  news: newsSlice,
  cakes: cakeSlice,
});

const store = configureStore({
  reducer,
  middleware: (gDM) => gDM().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
