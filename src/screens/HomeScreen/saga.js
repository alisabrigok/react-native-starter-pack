import { takeEvery, put } from "redux-saga/effects";
import { getHome } from "./slice";

export function* getHomeSaga() {
  try {
    yield put(getHome({}));
  } catch (error) {}
}

export default function* root() {
  const GET_HOME = getHome.toString();
  yield takeEvery(GET_HOME, getHomeSaga);
}
