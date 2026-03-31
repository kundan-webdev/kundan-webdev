"use client";

import { useEffect, useState } from "react";

const NAVBAR_OFFSET = 96;
const VIEWPORT_TRIGGER_RATIO = 0.35;
const PAGE_BOTTOM_OFFSET = 32;

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) return;

    const getSortedSections = () =>
      sections
        .map((section) => ({
          id: section.id,
          top: section.getBoundingClientRect().top + window.scrollY,
        }))
        .sort((a, b) => a.top - b.top);

    const updateActiveSection = () => {
      const sortedSections = getSortedSections();
      const triggerLine =
        window.scrollY + NAVBAR_OFFSET + window.innerHeight * VIEWPORT_TRIGGER_RATIO;
      const isNearPageBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - PAGE_BOTTOM_OFFSET;

      if (isNearPageBottom) {
        const lastSection = sortedSections.at(-1)?.id ?? sectionIds[0] ?? "";
        setActiveSection((current) => (current === lastSection ? current : lastSection));
        return;
      }

      const nextSection =
        sortedSections.reduce((current, section) => {
          if (section.top <= triggerLine) return section.id;
          return current;
        }, sortedSections[0]?.id) ?? "";

      setActiveSection((current) => (current === nextSection ? current : nextSection));
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, [sectionIds]);

  return activeSection;
}

export default useActiveSection;
