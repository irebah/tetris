import { Shape } from "../../types";
import Piece from "../Piece/Piece";

const NextArea = () => {
  const nextShapes: Array<Shape> = [Shape.I, Shape.O, Shape.T, Shape.S, Shape.Z, Shape.J, Shape.L];

  return (
    <section className="bg-blue-400/10 text-center rounded-xl p-2">
      <p className="pb-4 text-xl">Next</p>
      <article className="flex flex-col gap-10 items-center">
        {nextShapes.map((shape) => (
          <Piece key={`next-${shape}`} shape={shape} />
        ))}
      </article>
    </section>
  );
};

export default NextArea;
