import { put, call, select, take, all } from "redux-saga/effects";
import { startGame } from "../features/game/gameSlice";
import { Position, Shape, Size, TetrisPiece } from "../types";
import { setActiveTetroid } from "../features/board/boardSlice";
import { selectBoardSize } from "../features/board/boardSelector";
import { getRandomTetroidShape } from "../utils/pieceUtils";
import { loadNextPiece, updateNextTetroids } from "../features/pieceLoader/pieceLoaderSlice";
import { selectNextTetroids } from "../features/pieceLoader/pieceLoaderSelector";

const position: Position = { x: 0, y: 0 };

function* getApproxMidColumn() {
  const boardSize: Size = yield select(selectBoardSize);
  return Math.floor(boardSize.cols / 2) - 1;
}

function* loadActivePiece(approxMidColumn: number, tetroidShape?: Shape) {
  yield put(
    setActiveTetroid({
      shape: tetroidShape || getRandomTetroidShape(),
      position: {
        x: approxMidColumn,
        y: -2,
      },
    })
  );
}

function* loadNextPieces() {
  const newTetroids: [TetrisPiece, TetrisPiece, TetrisPiece] = [
    { shape: getRandomTetroidShape(), position },
    { shape: getRandomTetroidShape(), position },
    { shape: getRandomTetroidShape(), position },
  ];

  yield put(updateNextTetroids(newTetroids));
}

export function* watchStartGame() {
  yield take(startGame.type);
  const approxMidColumn: number = yield call(getApproxMidColumn);

  yield all([call(loadActivePiece, approxMidColumn), call(loadNextPieces)]);
}

export function* watchLoadNextPiece() {
  while (true) {
    yield take(loadNextPiece.type);

    const tetroids: [TetrisPiece, TetrisPiece, TetrisPiece] = yield select(selectNextTetroids);
    const approxMidColumn: number = yield call(getApproxMidColumn);

    yield call(loadActivePiece, approxMidColumn, tetroids[0].shape);

    const newTetroids: [TetrisPiece, TetrisPiece, TetrisPiece] = [
      tetroids[1],
      tetroids[2],
      { shape: getRandomTetroidShape(), position },
    ];

    yield put(updateNextTetroids(newTetroids));
  }
}
