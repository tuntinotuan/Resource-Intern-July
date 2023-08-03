import { call, put } from "redux-saga/effects";
import { setLoading, setNews } from "./newsSlice";
import requestGetNews from "./requests";
// JWT
export default function* handleGetNews() {
  try {
    yield put(setLoading(true));
    const response = yield call(requestGetNews);
    const { hits } = response.data;
    yield put(setNews(hits));
    yield put(setLoading(false));
  } catch (error) {
    console.log(error);
  }
}
