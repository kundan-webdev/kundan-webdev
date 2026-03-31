"use client";

import { usePathname } from "next/navigation";

import LoadingScreen from "@/components/common/LoadingScreen";
import Navbar from "@/components/common/Navbar";
import ProjectNavbar from "@/components/common/ProjectNavbar";
import ScrollProgress from "@/components/common/ScrollProgress";
import SmoothScrolling from "@/components/common/SmoothScrolling";

interface AppShellProps {
  children: React.ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const isDetailPage =
    pathname.startsWith("/projects/") || pathname.startsWith("/certificates/");
  const shouldUseSmoothScrolling = !isDetailPage;
  const shouldShowScrollProgress = !isDetailPage;

  const content = (
    <div className="relative z-10 min-h-screen bg-background text-foreground">
      {isDetailPage ? <ProjectNavbar /> : <Navbar />}
      {children}
    </div>
  );

  return (
    <>
      <LoadingScreen />
      {shouldShowScrollProgress ? <ScrollProgress /> : null}
      {shouldUseSmoothScrolling ? <SmoothScrolling>{content}</SmoothScrolling> : content}
    </>
  );
}
