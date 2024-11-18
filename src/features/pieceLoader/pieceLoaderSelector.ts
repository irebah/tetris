import { RootState } from "../../store";

export const selectNextTetroids = (state: RootState) => state.pieceLoader.nextTetroids;
