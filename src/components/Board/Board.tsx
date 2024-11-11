import { useSelector } from "react-redux";
import { SQUARE_SIZE } from "../../constants";
import { selectBoardSize } from "../../features/board/boardSelector";

const Board = () => {
  const boardSize = useSelector(selectBoardSize);

  return (
    <section
      className="border-2 border-blue-400 rounded-xl flex flex-wrap"
      style={{
        width: `${boardSize.cols * SQUARE_SIZE + 4}px`,
        height: `${boardSize.rows * SQUARE_SIZE + 4}px`,
      }}
    >
      {Array.from(Array(boardSize.rows * boardSize.cols).keys()).map((index) => (
        <div
          key={`col-${index}`}
          className={`border border-blue-200/40`}
          style={{ width: `${SQUARE_SIZE}px`, height: `${SQUARE_SIZE}px` }}
        ></div>
      ))}
    </section>
  );
};

export default Board;
