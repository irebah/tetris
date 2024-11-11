import { createSlice } from "@reduxjs/toolkit";

interface GameState {
  isGameRunning: boolean;
  speed: number;
}

const initialState: GameState = {
  isGameRunning: false,
  speed: 3000,
};

const gameStateSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    startGame(state) {
      state.isGameRunning = true;
    },
    stopGame(state) {
      state.isGameRunning = false;
    },
    setGameSpeed(state, action) {
      state.speed = action.payload;
    },
  },
});

export const { startGame, stopGame, setGameSpeed } = gameStateSlice.actions;

export default gameStateSlice.reducer;
