const Button = ({ children }) => {
  return (
    <button className="bg-green-600 text-white outline-none hover:shadow-lg transition-shadow">
      {children}
    </button>
  );
};

export default Button;
