import { put, select } from "redux-saga/effects";
import { setCakes } from "./cakeSlice";

export default function* handleSetFavorites({ payload }) {
  try {
    const cakeList = yield select((state) => state.cakes.cakeList);
    const favoritedCakesList = yield cakeList.map((cake) => {
      if (cake.id === payload) {
        return { ...cake, favorites: !cake.favorites };
      }
      return cake;
    });
    yield put(setCakes(favoritedCakesList));
  } catch (error) {
    console.log(error);
  }
}
