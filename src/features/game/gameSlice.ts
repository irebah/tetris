import { createSlice } from "@reduxjs/toolkit";

interface GameState {
  isGameRunning: boolean;
  showGameOverScreen: boolean;
  speed: number;
}

const initialState: GameState = {
  isGameRunning: false,
  showGameOverScreen: false,
  speed: 300,
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
