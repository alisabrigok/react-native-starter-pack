import { put } from "redux-saga/effects";
import { getHome } from "./slice";

export function* getHomeSaga() {
  try {
    yield put(getHome({}));
  } catch (error) {}
}
