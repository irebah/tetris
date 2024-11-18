import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { BoardContent, Size, TetrisPiece } from "../../types";
import { BOARD_COLS_SM, BOARD_ROWS_SM } from "../../constants";
import { getColorByShape } from "../../utils/pieceUtils";

interface BoardState {
  ready: boolean;
  size: Size;
  content: BoardContent;
  activeTetroid?: TetrisPiece;
}

const initialState: BoardState = {
  ready: false,
  size: {
    rows: BOARD_ROWS_SM,
    cols: BOARD_COLS_SM,
  },
  content: [[]],
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setSize: (state, action: PayloadAction<Size>) => {
      state.size = action.payload;
      state.ready = true;
      state.content = Array.from({ length: action.payload.rows }, () =>
        Array(action.payload.cols).fill("")
      );
    },
    updateBoardContent: (state, action: PayloadAction<TetrisPiece>) => {
      action.payload.shape.forEach((row, rowIndex) => {
        row.forEach((cell, columnIndex) => {
          if (cell === "1") {
            const effectiveRow = rowIndex + (action.payload.position?.y || 0);
            const effectiveColumn = columnIndex + (action.payload.position?.x || 0);
            state.content[effectiveRow][effectiveColumn] =
              getColorByShape(action.payload.shape) ?? "";
          }
        });
      });
    },
    updatePositionActiveTetroid: (state) => {
      if (state.activeTetroid && state.activeTetroid.position?.y != undefined) {
        state.activeTetroid.position.y = state.activeTetroid.position.y + 1;
      }
    },
    setActiveTetroid: (state, action: PayloadAction<TetrisPiece>) => {
      state.activeTetroid = action.payload;
    },
  },
});

export const { setSize, updateBoardContent, updatePositionActiveTetroid, setActiveTetroid } =
  boardSlice.actions;

export default boardSlice.reducer;
