import { takeEvery, put } from "redux-saga/effects";
import { getUser } from "./slice";

export function* getUserSaga() {
  try {
    yield put(getUser({}));
  } catch (error) {}
}

export default function* root() {
  const GET_USER = getUser.toString();
  yield takeEvery(GET_USER, getUserSaga);
}
