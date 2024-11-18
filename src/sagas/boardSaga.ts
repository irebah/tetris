import { put, call, select, take } from "redux-saga/effects";
import { startGame, stopGame } from "../features/game/gameSlice";
import { selectGameSpeed, selectIsGameRunning } from "../features/game/gameSelector";
import { BoardContent, TetrisPiece } from "../types";
import { updateBoardContent, updatePositionActiveTetroid } from "../features/board/boardSlice";
import { selectActiveTetroid, selectBoardContent } from "../features/board/boardSelector";
import { loadNextPiece } from "../features/pieceLoader/pieceLoaderSlice";

const requestAnimationFrameDelay = () => {
  return new Promise<void>((resolve) => {
    requestAnimationFrame(() => resolve());
  });
};

function* moveActiveTetroid() {
  const boardContent: BoardContent = yield select(selectBoardContent);
  const activeTetroid: TetrisPiece = yield select(selectActiveTetroid);

  const maxRow = activeTetroid.shape.length;
  const maxColumn = activeTetroid.shape[0].length;

  const offsetX = activeTetroid.position?.x || 0;
  const offsetY = activeTetroid.position?.y || 0;

  let collision = false;

  for (let row = 0; row < maxRow; row++) {
    for (let column = 0; column < maxColumn; column++) {
      if (
        boardContent[row + offsetY][column + offsetX] !== "" ||
        row + offsetY === boardContent.length - 1
      ) {
        collision = true;
      }
    }
  }

  if (!collision) {
    yield put(updatePositionActiveTetroid());
  } else {
    yield put(updateBoardContent(activeTetroid));
    yield put(loadNextPiece());
  }

  console.log("Board updated!");
}

function* updateBoardLoop() {
  let lastTime = 0;

  while (true) {
    yield call(requestAnimationFrameDelay);

    const isGameRunning: boolean = yield select(selectIsGameRunning);
    if (!isGameRunning) return;

    const speed: number = yield select(selectGameSpeed);

    const currentTime = performance.now();
    const elapsedTime = currentTime - lastTime;

    if (elapsedTime >= speed || lastTime === 0) {
      yield call(moveActiveTetroid);

      lastTime = currentTime;
    }
  }
}

export function* watchRefreshBoard() {
  while (true) {
    yield take(startGame.type);

    yield call(updateBoardLoop);

    yield take(stopGame.type);
  }
}
