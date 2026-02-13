const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`
        rounded-2xl
        overflow-hidden
        bg-neutral-900
        border border-white/10
        hover:border-white/20
        transition
        ${className}
      `}
    >
      <div className="">{children}</div>
    </div>
  );
};

export default Card;
