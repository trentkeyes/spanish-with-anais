import { motion } from 'framer-motion';

const ClassesDescription = () => {
  return (
    <div>
      <motion.div
        initial={{ x: 0, opacity: 0.2 }}
        whileInView={{ x: [500, -40, 0], opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-24 flex shadow-sm rounded-lg overflow-hidden border border-green-500 my-8 border-4 gap-8 lg:w-2/3 mx-auto">
          <img
            className="w-1/3 object-cover object-right"
            src="/src/assets/pexels-kevin-villavicencio-hernandez-12687967.jpg"
            alt="Dining area in Queretaro, Mexico"
          />
          <div className="p-4 md:my-auto">
            <h2 className="font-bold text-xl mb-2 lg:text-2xl">
              Take classes{' '}
              <strong className="text-green-500 font-bold">online</strong> or{' '}
              <strong className="text-green-500 font-bold">in person</strong> in
              historic Querétaro, Mexico
            </h2>
            <ul className="list-disc list-inside font-bold mb-2 lg:text-lg">
              <li>Conversation</li>
              <li>General Spanish</li>
              <li>Medical Spanish</li>
              <li>Spanish for kids</li>
            </ul>
            <a className="font-bold text-green-500 lg:text-lg" href="#pricing">
              See pricing →
            </a>
          </div>

          {/* <img
          className="object-cover w-1/3 hidden sm:block"
          src="/src/assets/anaislaptop.jpeg"
          alt="Dining area in Queretaro, Mexico"
        /> */}
        </div>
      </motion.div>
      {/* <motion.div
        initial={{ y: 0, opacity: 0.2 }}
        whileInView={{ y: [100, -10, 0], opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex shadow-lg rounded-lg overflow-hidden border border-green-500 border-4  my-8 gap-8 md:w-2/3 md:mx-auto">
          <div className="p-4">
            <h2 className="font-bold text-xl mb-2">
              Meet Anais: A professional teacher who will help you reach your
              goals and have fun doing it!
            </h2>
            <ul className="list-disc list-inside font-bold mb-2">
              <li>Conversation</li>
              <li>General Spanish</li>
              <li>Medical Spanish</li>
              <li>Spanish for kids</li>
            </ul>
            <a className="font-bold text-green-500" href="#pricing">
              See pricing →
            </a>
          </div>

          <img
            src="/src/assets/anaislaptopCropped.jpeg"
            alt="Anais talking with an online student on her laptop"
            className="w-1/3 object-cover object-left"
          />
        </div>
      </motion.div> */}
    </div>
  );
};

export default ClassesDescription;
