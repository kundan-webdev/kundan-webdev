const Heading = ({ title }: { title: string }) => {
  return (
    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-[-0.04em] leading-[1.0]">
      {title}
    </h2>
  );
};

export default Heading;
