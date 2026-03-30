import Image from "next/image";

interface CardProps {
  image: string;
  title: string;
  subtitle?: string;
  width?: number;
  height?: number;
  className?: string;
}

const Card = ({
  image,
  title,
  subtitle,
  width = 350,
  height = 275,
  className = "",
}: CardProps) => {
  return (
    <div className={`relative overflow-hidden rounded-3xl ${className}`} style={{ width, height }}>
      <Image src={image} alt={title} fill className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute bottom-0 left-0 w-full">
        <div className="relative w-full rounded-[0px_20px_0px_0px] bg-gray-400 p-6 shadow-lg">
          <div
            className="absolute -top-[18px] left-0 h-[25px] w-[160px] bg-gray-400"
            style={{
              clipPath: 'path("M 0 0 L 120 0 C 145 2, 135 16, 160 18 L 0 50 Z")',
            }}
          />
          <div className="absolute left-[30px] -top-[18px] h-[5px] w-[70px] rounded-b-md bg-orange-600" />
          <div className="relative z-10">
            <h3 className="text-xl font-semibold text-black">{title}</h3>
            <p className="text-sm text-black/60">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

