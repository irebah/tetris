import { RootState } from "../../store";

export const selectIsGameRunning = (state: RootState) => state.game.isGameRunning;

export const selectGameSpeed = (state: RootState) => state.game.speed;
