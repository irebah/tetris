import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Size } from "../../types";
import { BOARD_COLS_SM, BOARD_ROWS_SM } from "../../constants";

// Define a type for the slice state
interface BoardState {
  size: Size;
}

// Define the initial state using that type
const initialState: BoardState = {
  size: {
    rows: BOARD_ROWS_SM,
    cols: BOARD_COLS_SM,
  },
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setSize: (state, action: PayloadAction<Size>) => {
      state.size = action.payload;
    },
  },
});

export const { setSize } = boardSlice.actions;

export default boardSlice.reducer;
