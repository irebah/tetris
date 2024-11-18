import { RootState } from "../../store";

export const selectBoardReady = (state: RootState) => state.board.ready;

export const selectBoardSize = (state: RootState) => state.board.size;

export const selectBoardContent = (state: RootState) => state.board.content;

export const selectActiveTetroid = (state: RootState) => state.board.activeTetroid;
