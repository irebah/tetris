import { useSelector } from "react-redux";
import { selectNextTetroids } from "../../features/pieceLoader/pieceLoaderSelector";
import Piece from "../Piece/Piece";

const NextArea = () => {
  const nextTetroids = useSelector(selectNextTetroids);

  return (
    <section className="bg-blue-400/10 text-center rounded-xl p-2 pb-4 h-fit">
      <p className="pb-4 text-xl">Next</p>
      <article className="flex flex-col gap-10 items-center">
        {nextTetroids &&
          nextTetroids.map((tetroid, index) => <Piece key={`next-${index}`} tetroid={tetroid} />)}
      </article>
    </section>
  );
};

export default NextArea;
