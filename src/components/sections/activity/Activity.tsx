"use client";

import { useEffect, useState } from "react";
import { ActivityCalendar } from "react-activity-calendar";
import { motion, type Variants } from "framer-motion";
import { BookMarked, GitCommitHorizontal, GitPullRequest, Star } from "lucide-react";

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const Activity = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [data, setData] = useState<{ date: string; count: number; level: 0 | 1 | 2 | 3 | 4 }[]>([]);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const getLevel = (count: number): 0 | 1 | 2 | 3 | 4 => {
      if (count === 0) return 0;
      if (count <= 3) return 1;
      if (count <= 6) return 2;
      if (count <= 9) return 3;
      return 4;
    };

    const fetchGitHubData = async () => {
      try {
        const response = await fetch("https://github-contributions-api.jogruber.de/v4/kundan-webdev?y=last");
        if (!response.ok) throw new Error("Failed to fetch");
        const apiData = await response.json();
        const contributions = apiData?.contributions;
        if (!Array.isArray(contributions)) throw new Error("Invalid data format");

        setData(
          contributions.map((day: { date: string; count: number }) => ({
            date: day.date,
            count: day.count,
            level: getLevel(day.count),
          })),
        );
        setTotalCount(
          contributions.reduce((sum: number, day: { count: number }) => sum + day.count, 0),
        );
        setIsLoading(false);
      } catch {
        setHasError(true);
        setIsLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  const stats = [
    { icon: GitCommitHorizontal, value: isLoading ? "-" : `${totalCount}`, label: "Contributions" },
    { icon: BookMarked, value: "12", label: "Public Repos" },
    { icon: GitPullRequest, value: "24", label: "PRs Merged" },
    { icon: Star, value: "8", label: "Stars Earned" },
  ];

  return (
    <section id="activity" className="py-16 md:py-24">
      <motion.div
        className="mx-auto max-w-[1136px] px-4 sm:px-6 lg:px-0"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div variants={itemVariants} className="mb-12">
          <span className="mb-4 block text-sm font-medium text-[var(--text-muted)]">
            <span className="text-[var(--brand-primary)]">.</span>activity
          </span>
          <h2 className="text-2xl font-bold text-[var(--text-primary)] sm:text-3xl md:text-4xl">
            Consistent Contribution
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
            A view into the rhythm behind the portfolio — shipping, iterating, and learning in public through real product work.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-6 flex flex-wrap gap-4 md:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex min-w-[160px] flex-1 items-center gap-3 rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-surface)] p-4"
            >
              <div className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-orange-500/10 text-[var(--brand-primary)]">
                <stat.icon size={16} />
              </div>
              <div>
                <p className="text-lg font-semibold text-[var(--text-primary)]">{stat.value}</p>
                <p className="text-xs text-[var(--text-faint)]">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-surface)] p-4 sm:p-6">
          {isLoading && <div className="h-[220px] animate-pulse rounded-[var(--radius-lg)] bg-[var(--bg-elevated)]" />}
          {hasError && !isLoading && (
            <div className="flex h-[220px] items-center justify-center text-center text-sm text-[var(--text-secondary)]">
              Unable to load the activity calendar right now. Check my GitHub profile directly.
            </div>
          )}
          {!isLoading && !hasError && data.length > 0 && (
            <div className="overflow-x-auto">
              <ActivityCalendar
                data={data}
                colorScheme="dark"
                blockSize={12}
                blockMargin={3}
                blockRadius={3}
                fontSize={12}
                showWeekdayLabels
                weekStart={1}
                showMonthLabels={false}
                theme={{
                  light: ["#ede7de", "#ffd7ba", "#ffb27e", "#f16001", "#df3405"],
                  dark: ["rgba(255,255,255,0.03)", "rgba(241,96,1,0.28)", "rgba(241,96,1,0.45)", "rgba(241,96,1,0.72)", "rgba(223,52,5,1)"],
                }}
                labels={{
                  legend: { less: "Less", more: "More" },
                  totalCount: "{{count}} contributions in the last year",
                }}
              />
            </div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Activity;

