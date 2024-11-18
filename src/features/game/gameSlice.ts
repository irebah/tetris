import { createSlice } from "@reduxjs/toolkit";
import { ShapeI, ShapeJ, ShapeO, TetrisPiece } from "../../types";

interface GameState {
  isGameRunning: boolean;
  showGameOverScreen: boolean;
  speed: number;
  nextTetroids?: [TetrisPiece, TetrisPiece, TetrisPiece];
}

const initialState: GameState = {
  isGameRunning: false,
  showGameOverScreen: false,
  speed: 500,
  nextTetroids: [{ shape: ShapeI }, { shape: ShapeJ }, { shape: ShapeO }],
};

const gameStateSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    startGame(state) {
      state.isGameRunning = true;
      state.showGameOverScreen = false;
    },
    stopGame(state) {
      state.isGameRunning = false;
    },
    gameOver(state) {
      state.showGameOverScreen = true;
      state.isGameRunning = false;
    },
    setGameSpeed(state, action) {
      state.speed = action.payload;
    },
  },
});

export const { startGame, stopGame, setGameSpeed, gameOver } = gameStateSlice.actions;

export default gameStateSlice.reducer;
