import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ShapeI, ShapeJ, ShapeO, TetrisPiece } from "../../types";

interface PieceLoaderState {
  nextTetroids?: [TetrisPiece, TetrisPiece, TetrisPiece];
}

const initialState: PieceLoaderState = {
  nextTetroids: [{ shape: ShapeI }, { shape: ShapeJ }, { shape: ShapeO }],
};

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
