import { useSelector } from "react-redux";
import { SQUARE_SIZE } from "../../constants";
import Piece from "../Piece/Piece";
import {
  selectBoardSize,
  selectActiveTetroid,
  selectBoardContent,
} from "../../features/board/boardSelector";
import { Color } from "../../types";

const Board = () => {
  const boardSize = useSelector(selectBoardSize);
  const boardContent = useSelector(selectBoardContent);
  const activeTetroid = useSelector(selectActiveTetroid);

  const fillBox = (index: number): Color | "" => {
    const row = Math.floor(index / boardSize.cols);
    const column = index - row * boardSize.cols;

    const data = boardContent[row][column];

    return data;
  };

  return (
    <section
      className="border-2 border-blue-400 rounded-xl flex flex-wrap overflow-hidden relative"
      style={{
        width: `${boardSize.cols * SQUARE_SIZE + 4}px`,
        height: `${boardSize.rows * SQUARE_SIZE + 4}px`,
      }}
    >
      {Array.from(Array(boardSize.rows * boardSize.cols).keys()).map((index) => (
        <div
          key={`col-${index}`}
          className={`border border-blue-200/40 ${fillBox(index)}`}
          style={{ width: `${SQUARE_SIZE}px`, height: `${SQUARE_SIZE}px` }}
        ></div>
      ))}

      {activeTetroid && <Piece tetroid={activeTetroid} size={SQUARE_SIZE} float />}
    </section>
  );
};

export default Board;
