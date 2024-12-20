import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import boardReducer from "../features/board/boardSlice";
import gameReducer from "../features/game/gameSlice";
import pieceLoaderReducer from "../features/pieceLoader/pieceLoaderSlice";
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    board: boardReducer,
    game: gameReducer,
    pieceLoader: pieceLoaderReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
