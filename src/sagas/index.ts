import { all, call } from "redux-saga/effects";
import { watchRefreshBoard } from "./boardSaga";
import { watchLoadNextPiece, watchStartGame } from "./gameSaga";

export default function* rootSaga() {
  yield all([call(watchRefreshBoard), call(watchLoadNextPiece), call(watchStartGame)]);
}
