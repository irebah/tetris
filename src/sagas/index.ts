import { all, call } from "redux-saga/effects";
import { watchRefreshBoard } from "./boardSaga";

export default function* rootSaga() {
  yield all([call(watchRefreshBoard)]);
}
