import { SQUARE_SIZE } from "../../constants";
import { Size } from "../../types";

const Board = ({ cols, rows }: Size) => {
  return (
    <section
      className="border-2 border-blue-400 rounded-xl flex flex-wrap"
      style={{
        width: `${cols * SQUARE_SIZE + 4}px`,
        height: `${rows * SQUARE_SIZE + 4}px`,
      }}
    >
      {Array.from(Array(rows * cols).keys()).map((index) => (
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
