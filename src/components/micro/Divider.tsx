const Divider = ({ className = "" }) => {
  return (
    <div className={`container-wide ${className}`}>
      <hr className="border-white/60" />
    </div>
  );
};

export default Divider;
