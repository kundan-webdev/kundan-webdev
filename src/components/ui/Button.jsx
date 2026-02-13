const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`px-[21px] py-[12px] text-[17px] font-semibold rounded-full bg-white text-black hover:opacity-80 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
