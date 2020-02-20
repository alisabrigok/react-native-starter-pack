import { put } from "redux-saga/effects";
import { getUser } from "./slice";

export function* getUserSaga() {
  try {
    yield put(getUser({}));
  } catch (error) {}
}
