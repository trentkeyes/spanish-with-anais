import { motion } from 'framer-motion';

const StatsCard = () => {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0.2 }}
      whileInView={{ y: [100, -10, 0], opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
    >
      <div className="my-8 pt-8 pb-8 shadow-sm border border-4 border-green-500 rounded-lg lg:w-2/3 mx-auto">
        <div className="flex justify-evenly gap-4">
          <div className="text-center">
            <h3 className="text-5xl font-bold pb-6 px-6">178</h3>
            <p>Amazing Students</p>
          </div>
          <div className="text-center">
            <h3 className="text-5xl font-bold pb-6 px-6">4520</h3>
            <p>Hours of lessons</p>
          </div>
          <div className="text-center">
            <h3 className="text-5xl font-bold pb-6 px-6">162</h3>
            <p>5 star reviews</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StatsCard;