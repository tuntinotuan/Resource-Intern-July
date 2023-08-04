import { select } from "redux-saga/effects";

export default function requestSetFavoritesCake(id) {
  // console.log("id", id);
  try {
    const cakeList = select((state) => state.cakes.cakeList);
    // console.log("cakeList", cakeList);
  } catch (error) {}
  // const newCakeList =
}
