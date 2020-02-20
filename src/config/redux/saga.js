import { takeEvery, all } from "redux-saga/effects";

import { getHome } from "../../screens/HomeScreen/slice";
import { getHomeSaga } from "../../screens/HomeScreen/saga";
import { getUser } from "../../screens/LoginScreen/slice";
import { getUserSaga } from "../../screens/LoginScreen/saga";

export function* watchIssues() {
  yield all([takeEvery(getHome, getHomeSaga), takeEvery(getUser, getUserSaga)]);
}
