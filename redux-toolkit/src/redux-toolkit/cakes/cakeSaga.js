import { takeLatest } from "redux-saga/effects";
import { setFavorites } from "./cakeSlice";
import handleSetFavorites from "./cakeHandlers";

export default function* cakesSage() {
  yield takeLatest(setFavorites.type, handleSetFavorites);
}
