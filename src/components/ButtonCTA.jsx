const ButtonCTA = ({ children }) => {
  return (
    <button className="bg-gradient-to-r from-green-400 via-green-200 to-blue-200 font-bold hover:opacity-80 transition-opacity duration-150">
      {children}
    </button>
  );
};

export default ButtonCTA;
