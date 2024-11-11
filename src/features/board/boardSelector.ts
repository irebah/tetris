import { RootState } from "../../store";

export const selectBoardSize = (state: RootState) => state.board.size;
