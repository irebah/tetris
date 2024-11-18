import { all, call } from "redux-saga/effects";
import { watchRefreshBoard } from "./boardSaga";
import { watchLoadPiece } from "./pieceLoaderSaga";

export default function* rootSaga() {
  yield all([call(watchRefreshBoard), call(watchLoadPiece)]);
}
