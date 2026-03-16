const Badge = ({ text }) => {
  return (
    <span
      className="
        flex items-center gap-1.5
        px-2.5 py-1.5
        rounded-full
        bg-white/10 backdrop-blur-md
        border border-white/20
        text-white text-sm font-normal
        shrink-0
      "
    >
      {/* Pulsing green dot */}
      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

      {text}
    </span>
  );
};

export default Badge;
