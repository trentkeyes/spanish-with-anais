import ButtonCTA from "./ButtonCTA";

const Hero = () => {
  return (
    <div className="pt-8 pb-8">
      <div className="pb-8">
        <h1 className="font-bold">Learning Spanish has never been so much fun!</h1>
        <p className="py-6">Online lessons with a native Mexican teacher, in your time zone</p>
        <ButtonCTA>Take your first lesson free!</ButtonCTA>
      </div>

      <img className="rounded-xl" src="/src/assets/IMG_8898 conv.jpeg" alt="Anais smiling in a cafe" />
    </div>
  );
};

export default Hero;
