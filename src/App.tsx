import { useEffect, useState } from "react";
import Board from "./components/Board/Board";
import ButtonContainer from "./components/ButtonContainer/ButtonContainer";
import useDesktopResize from "./hooks/useDesktopResize";
import { Size } from "./types";
import { BOARD_COLS_SM, BOARD_ROWS_SM } from "./constants";
import NextArea from "./components/NextArea/NextArea";
import { getBoardSizeByResolution } from "./utils/boardUtils";

const App = () => {
  const [sizeDetected, setSizeDetected] = useState<boolean>(false);
  const [boardSize, setBoardSize] = useState<Size>({ rows: BOARD_ROWS_SM, cols: BOARD_COLS_SM });
  const desktopSize = useDesktopResize();

  useEffect(() => {
    if (!sizeDetected && desktopSize.width > 0 && desktopSize.height > 0) {
      setSizeDetected(true);
      setBoardSize(getBoardSizeByResolution(desktopSize));
    }
  }, [desktopSize, sizeDetected]);

  return (
    <main className="flex justify-center items-center w-screen h-screen">
      <section className="flex flex-col">
        <div className="flex gap-4 justify-center">
          <Board cols={boardSize.cols} rows={boardSize.rows} />
          <NextArea />
        </div>
        <div>
          <ButtonContainer />
        </div>
      </section>
    </main>
  );
};

export default App;
