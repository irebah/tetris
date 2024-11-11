const Arrow = ({ angle = 0 }: { angle?: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-6"
      style={{ transform: `rotate(${angle}deg)` }}
    >
      <path
        fillRule="evenodd"
        d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const ButtonContainer = () => {
  return (
    <section className="flex justify-between py-5 w-full">
      <button className="border-2 border-blue-400 rounded-xl h-14 w-20 sm:h-12 sm:w-20 flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path
            fillRule="evenodd"
            d="M14.47 2.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H9a5.25 5.25 0 1 0 0 10.5h3a.75.75 0 0 1 0 1.5H9a6.75 6.75 0 0 1 0-13.5h10.19l-4.72-4.72a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <article className="flex gap-5">
        {[180, 90, 0].map((angle) => (
          <button
            key={angle}
            className="border-2 border-blue-400 rounded-xl h-14 w-16 sm:h-12 sm:w-16 flex justify-center items-center"
          >
            <Arrow angle={angle} />
          </button>
        ))}
      </article>
    </section>
  );
};

export default ButtonContainer;
