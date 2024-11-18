import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TetrisPiece } from "../../types";

interface PieceLoaderState {
  nextTetroids?: [TetrisPiece, TetrisPiece, TetrisPiece];
}

const initialState: PieceLoaderState = {};

const pieceLoaderStateSlice = createSlice({
  name: "pieceLoader",
  initialState,
  reducers: {
    loadNextPiece: () => {
      // to be used from saga, nothing to do here
    },
    updateNextTetroids: (state, action: PayloadAction<[TetrisPiece, TetrisPiece, TetrisPiece]>) => {
      state.nextTetroids = action.payload;
    },
  },
});

export const { loadNextPiece, updateNextTetroids } = pieceLoaderStateSlice.actions;

export default pieceLoaderStateSlice.reducer;
