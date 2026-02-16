import DP from "../../assets/DPv2.png"
const Avatar = ({
  src = DP,
  height = 96, // capsule height
  width = 160, // capsule width (greater than height)
  bgColor = "bg-[linear-gradient(-145deg,#FFFF33_0%,#DF3405_37%,#8D2609_74%,#4C1300_100%)]",
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
