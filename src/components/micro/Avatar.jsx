import DP from "../../assets/DP.png"
const Avatar = ({
  src = DP,
  height = 96, // capsule height
  width = 160, // capsule width (greater than height)
  bgColor = "bg-red-600",
  alt = "Profile avatar",
}) => {
  return (
     <div
      className={`rounded-full overflow-hidden ${bgColor} flex items-end justify-center`}
      style={{
        height: `${height}px`,
        width: `${width}px`,
      }}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-auto object-contain"
      />
    </div>
  );
};

export default Avatar;
