import { all, fork } from "redux-saga/effects";
import newsSaga from "./news/saga";
import cakesSage from "./cakes/cakeSaga";

export default function* rootSaga() {
  yield all([fork(newsSaga), fork(cakesSage)]);
}
