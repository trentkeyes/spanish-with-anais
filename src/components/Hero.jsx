import ButtonCTA from './ButtonCTA';
// import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="pt-8 pb-8 sm:flex sm:gap-4 border-green-500 sm:h-[calc(100vh-6rem)] sm:justify-center sm:items-center sm:py-0">
      <div className="pb-8 sm:pb-0">
        <h1 className="font-bold">
          Learning Spanish has never been so much fun!
        </h1>
       
        <h3 className='text-4xl my-4'>Hola, soy Anais</h3>
        <p className="">
          Online lessons with a native Mexican teacher, in your time zone
        </p>
        {/* <p className='py-4'>Learn how spanish speakers REALLY talk in fun, dynamic classes</p> */}
        <ButtonCTA>Take your first lesson free!</ButtonCTA>
        
      </div>

      <img
        className="rounded-xl sm:w-[45%]"
        src="/src/assets/anaisSmile.jpeg"
        alt="Anais smiling in a cafe"
      />
    </div>
  );
};

export default Hero;
