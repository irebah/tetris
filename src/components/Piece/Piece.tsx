import { TetrisPiece } from "../../types";
import { getColorByShape } from "../../utils/pieceUtils";

interface Props {
  size?: number;
}

const Piece = ({ shape, size = 15 }: TetrisPiece & Props) => {
  const rows = 2;

  return (
    <section
      className="flex flex-col flex-wrap"
      style={{ height: `${size * rows}px`, width: `${(size * shape.length) / rows}px` }}
    >
      {Array.from(Array(shape.length).keys()).map((index) => (
        <div
          key={`col-${index}`}
          style={{ width: `${size}px`, height: `${size}px` }}
          className={`${shape.charAt(index) === "1" ? `border ${getColorByShape(shape)}` : ""}`}
        ></div>
      ))}
    </section>
  );
};

export default Piece;
