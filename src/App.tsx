import { useEffect, useState } from "react";
import Board from "./components/Board/Board";
import ButtonContainer from "./components/ButtonContainer/ButtonContainer";
import useDesktopResize from "./hooks/useDesktopResize";
import NextArea from "./components/NextArea/NextArea";
import { getBoardSizeByResolution } from "./utils/boardUtils";
import { useDispatch, useSelector } from "react-redux";
import { setSize } from "./features/board/boardSlice";
import { selectBoardReady } from "./features/board/boardSelector";
import { startGame } from "./features/game/gameSlice";

const App = () => {
  const [sizeDetected, setSizeDetected] = useState<boolean>(false);
  const boardReady = useSelector(selectBoardReady);
  const desktopSize = useDesktopResize();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!sizeDetected && desktopSize.width > 0 && desktopSize.height > 0) {
      setSizeDetected(true);
      const boardSize = getBoardSizeByResolution(desktopSize);
      dispatch(setSize(boardSize));
    }
  }, [desktopSize, sizeDetected, dispatch]);

  return (
    <main className="flex justify-center items-center w-screen h-screen">
      <section className="flex flex-col">
        <div className="flex gap-4 justify-center">
          {boardReady && <Board />}
          <NextArea />
        </div>
        <div>
          <ButtonContainer />
          <button onClick={() => dispatch(startGame())}>Temporal Start</button>
        </div>
      </section>
    </main>
  );
};

export default App;
