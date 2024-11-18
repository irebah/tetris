import { TetrisPiece } from "../../types";
import { getColorByShape } from "../../utils/pieceUtils";

interface ExtraProps {
  size?: number;
  float?: boolean;
}

const Piece = ({
  tetroid: {
    shape,
    position = {
      x: 0,
      y: 0,
    },
  },
  size = 16,
  float = false,
}: { tetroid: TetrisPiece } & ExtraProps) => {
  const rows = shape.length;
  const cols = shape[0].length;

  return (
    <section
      className={`flex flex-wrap ${float ? "absolute" : "relative"}`}
      style={{
        height: `${size * rows}px`,
        width: `${size * cols}px`,
        top: position.y * size,
        left: position.x * size,
      }}
    >
      {Array.from(Array(rows).keys()).map((row) =>
        Array.from(Array(cols).keys()).map((col) => (
          <div
            key={`col-${col}`}
            style={{ width: `${size}px`, height: `${size}px` }}
            className={`${shape[row][col] === "1" ? `border ${getColorByShape(shape)}` : ""}`}
          ></div>
        ))
      )}
    </section>
  );
};

export default Piece;
