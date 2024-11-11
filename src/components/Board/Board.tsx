import { useSelector } from "react-redux";
import { SQUARE_SIZE } from "../../constants";
import { selectBoardContent, selectBoardSize } from "../../features/board/boardSelector";
import { Color } from "../../types";
import { getColorByShape } from "../../utils/pieceUtils";

const Board = () => {
  const boardSize = useSelector(selectBoardSize);
  const boardContent = useSelector(selectBoardContent);

  const fillBox = (index: number): Color | "" => {
    const row = Math.floor(index / boardSize.cols);
    const column = index - row * boardSize.cols;

    const data = boardContent[row][column];

    return data !== "" ? getColorByShape(data) : "";
  };

  return (
    <section
      className="border-2 border-blue-400 rounded-xl flex flex-wrap overflow-hidden"
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
    </section>
  );
};

export default Board;
