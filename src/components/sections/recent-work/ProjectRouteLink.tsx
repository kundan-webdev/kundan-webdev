import Link from "next/link";

interface ProjectRouteLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

const enableRoutePrefetch = process.env.NODE_ENV === "production";

export default function ProjectRouteLink({
  href,
  className,
  children,
}: ProjectRouteLinkProps) {
  return (
    <Link href={href} prefetch={enableRoutePrefetch} className={className}>
      {children}
    </Link>
  );
}
