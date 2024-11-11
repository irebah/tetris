import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { BoardContent, Size } from "../../types";
import { BOARD_COLS_SM, BOARD_ROWS_SM } from "../../constants";

interface BoardState {
  ready: boolean;
  size: Size;
  content: BoardContent;
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
    updateBoardContent: (state, action: PayloadAction<BoardContent>) => {
      state.content = action.payload;
    },
  },
});

export const { setSize, updateBoardContent } = boardSlice.actions;

export default boardSlice.reducer;
