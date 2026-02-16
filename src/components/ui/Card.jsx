const Card = ({
  image,
  title,
  subtitle,
  width = 350,
  height = 275,
  className = "",
}) => {
  return (
    <div
      className={`relative rounded-3xl overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Folder Panel */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="relative w-full bg-gray-400 rounded-[0px_20px_0px_0px] shadow-lg p-6">

          {/* Folder Flap */}
          <div
            className="absolute -top-[18px] left-0 w-[160px] h-[25px] bg-gray-400"
            style={{
              clipPath:
                'path("M 0 0 L 120 0 C 145 2, 135 16, 160 18 L 0 50 Z")',
            }}
          />

          {/* Folder Tab */}
          <div className="absolute left-[30px] -top-[18px] w-[70px] h-[5px] bg-orange-600 rounded-b-md" />

          {/* Text Content */}
          <div className="relative z-10">
            <h3 className="text-xl font-semibold text-black">
              {title}
            </h3>
            <p className="text-sm text-black/60">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
