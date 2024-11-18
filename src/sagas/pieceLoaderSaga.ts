import { call, put, select, take } from "redux-saga/effects";
import { loadNextPiece, updateNextTetroids } from "../features/pieceLoader/pieceLoaderSlice";
import { ShapeZ, TetrisPiece } from "../types";
import { selectNextTetroids } from "../features/pieceLoader/pieceLoaderSelector";
import { setActiveTetroid } from "../features/board/boardSlice";

function* updatePieceLoader() {
  const tetroids: [TetrisPiece, TetrisPiece, TetrisPiece] = yield select(selectNextTetroids);

  yield put(setActiveTetroid(tetroids[0]));

  const newTetroid = { shape: ShapeZ, position: { x: 0, y: 0 } };

  const newTetroids: [TetrisPiece, TetrisPiece, TetrisPiece] = [
    tetroids[1],
    tetroids[2],
    newTetroid,
  ];

  yield put(updateNextTetroids(newTetroids));
}

export function* watchLoadPiece() {
  while (true) {
    yield take(loadNextPiece.type);
    yield call(updatePieceLoader);
  }
}
