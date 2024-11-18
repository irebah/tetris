import { put, call, select } from "redux-saga/effects";
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

  if (!activeTetroid) return;

  const maxRow = activeTetroid.shape.length;
  const maxColumn = activeTetroid.shape[0].length;

  const offsetX = activeTetroid.position?.x || 0;
  const offsetY = activeTetroid.position?.y || 0;

  let collision = false;

  for (let row = 0; row < maxRow; row++) {
    for (let column = 0; column < maxColumn; column++) {
      if (
        row + offsetY + 1 >= 0 &&
        row + offsetY + 1 <= boardContent.length &&
        (row + offsetY + 1 === boardContent.length ||
          boardContent[row + offsetY + 1][column + offsetX] !== "")
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
    if (!isGameRunning) continue;

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
  yield call(updateBoardLoop);
}
