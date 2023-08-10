import { useSnapCarousel } from 'react-snap-carousel';
import { motion } from 'framer-motion';

const ReviewsCarousel = () => {
  const { scrollRef, snapPointIndexes, next, prev, pages, goTo } =
    useSnapCarousel();
  return (
    <>
      <motion.div
        initial={{ x: 0, opacity: 0.2 }}
        whileInView={{ x: [-500, 40, 0], opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <ul
          className="flex overflow-x-auto shadow-sm rounded-lg snap-x snap-mandatory overflow-x-hidden overflow-hidden border-green-500 border-4"
          ref={scrollRef}
        >
          {Array.from({ length: 18 }).map((_, i) => (
            <li
              key={i}
              className="flex-shrink-0"
              style={{
                scrollSnapAlign: snapPointIndexes.has(i) ? 'start' : '',
              }}
            >
              <img
                src={`https://picsum.photos/500?${i}`}
                width="250"
                height="250"
                alt={`Item ${i}`}
              />
            </li>
          ))}
        </ul>
        <div className="flex justify-center space-x mt-2" aria-hidden>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-2"
            onClick={() => prev()}
          >
            Previous
          </button>
          {pages.map((_, i) => (
            <button
              key={i}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded mx-2"
              onClick={() => goTo(i)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => next()}
          >
            Next
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default ReviewsCarousel;
