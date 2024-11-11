import { put, call, select, take } from "redux-saga/effects";
import { startGame, stopGame } from "../features/game/gameSlice";
import { selectGameSpeed, selectIsGameRunning } from "../features/game/gameSelector";
import { BoardContent, Shape } from "../types";
import { updateBoardContent } from "../features/board/boardSlice";
import { selectBoardContent } from "../features/board/boardSelector";

const requestAnimationFrameDelay = () => {
  return new Promise<void>((resolve) => {
    requestAnimationFrame(() => resolve());
  });
};

const updateTableContent = (
  table: BoardContent,
  rowIndex: number,
  colIndex: number,
  newValue: Shape
): BoardContent => {
  // Create the updated row by combining parts of the old row with the new value at colIndex
  const updatedRow = [
    ...table[rowIndex].slice(0, colIndex), // The part of the row before the index
    newValue, // The new value to be inserted
    ...table[rowIndex].slice(colIndex + 1), // The part of the row after the index
  ];

  // Return a new table with the updated row
  return [
    ...table.slice(0, rowIndex), // The rows before the updated row
    updatedRow, // The updated row
    ...table.slice(rowIndex + 1), // The rows after the updated row
  ];
};

function* applyGravity() {
  const boardContent: BoardContent = yield select(selectBoardContent);

  const updatedBoardContent = updateTableContent(boardContent, 5, 5, Shape.L);

  yield put(updateBoardContent(updatedBoardContent));
  console.log("Board updated!");
}

function* checkFullRows() {
  const boardContent: BoardContent = yield select(selectBoardContent);

  const updatedBoardContent = updateTableContent(boardContent, 5, 5, Shape.L);

  yield put(updateBoardContent(updatedBoardContent));
  console.log("Check if there is any complete row");
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
      yield call(applyGravity);
      yield call(checkFullRows);
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
