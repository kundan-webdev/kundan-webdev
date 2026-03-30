interface IconProps {
  children: React.ReactNode;
}

export function Icon({ children }: IconProps) {
  return <span className="inline-flex">{children}</span>;
}

export default Icon;

