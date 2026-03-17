"use client";
import { useState, useEffect } from "react";
import { ActivityCalendar } from "react-activity-calendar";
import { motion } from "framer-motion";
import { GitCommitHorizontal, BookMarked, GitPullRequest, Star } from "lucide-react";

// ── Stat card ──────────────────────────────────────────────
const StatCard = ({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ElementType;
  value: string;
  label: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex-1 bg-[#0f0f0f] border border-[#1c1c1c] rounded-xl p-4 flex items-center gap-3 min-w-[140px]"
  >
    <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
      <Icon size={15} className="text-orange-400" />
    </div>
    <div>
      <p className="text-white font-bold text-lg leading-none">{value}</p>
      <p className="text-[#555] text-xs mt-1">{label}</p>
    </div>
  </motion.div>
);

// ── Main component ─────────────────────────────────────────
const Activity = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError]   = useState(false);
  const [data, setData]           = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  const getLevel = (count: number) => {
    if (count === 0) return 0;
    if (count <= 3)  return 1;
    if (count <= 6)  return 2;
    if (count <= 9)  return 3;
    return 4;
  };

  const fetchGitHubData = async () => {
    try {
      const response = await fetch(
        "https://github-contributions-api.jogruber.de/v4/kundan-webdev?y=last"
      );
      if (!response.ok) throw new Error("Failed to fetch");

      const apiData = await response.json();

      if (apiData?.contributions && Array.isArray(apiData.contributions)) {
        const formattedData = apiData.contributions.map((day: any) => ({
          date:  day.date,
          count: day.count,
          level: getLevel(day.count),
        }));
        const total = apiData.contributions.reduce(
          (acc: number, d: any) => acc + d.count,
          0
        );
        setTotalCount(total);
        setData(formattedData);
        setIsLoading(false);
      } else {
        throw new Error("Invalid data format");
      }
    } catch (error) {
      console.error("Failed to fetch GitHub data:", error);
      setHasError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGitHubData();
  }, []);

  const customTheme = {
    light: ["#e5e5e5", "#ffcdb2", "#ffb4a2", "#e5989b", "#b5838d"],
    dark: [
      "rgba(255,255,255,0.03)",
      "rgba(255,106,0,0.3)",
      "rgba(255,106,0,0.5)",
      "rgba(255,106,0,0.8)",
      "rgba(255,106,0,1.0)",
    ],
  };

  // Stats — contributions from live data, rest hardcoded (update manually)
  const stats = [
    {
      icon: GitCommitHorizontal,
      value: isLoading ? "—" : `${totalCount}`,
      label: "Contributions",
    },
    { icon: BookMarked,        value: "12",  label: "Public Repos"  },
    { icon: GitPullRequest,    value: "24",  label: "PRs Merged"    },
    { icon: Star,              value: "8",   label: "Stars Earned"  },
  ];

  return (
    <section className="container-content py-20 relative" id="activity">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="text-sm text-white/40 font-medium mb-4 block">
          <span className="text-orange-500 font-bold">.</span>activity
        </span>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-[-0.04em] leading-[1.0]">
          Consistent Contribution
        </h2>
        <p className="text-white/60 mt-4 mb-10 max-w-xl text-lg leading-relaxed">
          Consistent contribution and continuous improvement through real-world
          projects and open-source work.
        </p>

        {/* ── Stat Row ── */}
        <div className="flex flex-wrap gap-3 mb-8">
          {stats.map((s) => (
            <StatCard key={s.label} icon={s.icon} value={s.value} label={s.label} />
          ))}
        </div>

        {/* ── Heatmap Card ── */}
        <div className="relative w-full overflow-hidden rounded-[2rem] bg-white/5 border border-white/10 p-1 md:p-3 shadow-2xl backdrop-blur-md">
          <div className="absolute inset-0 rounded-[2rem] pointer-events-none ring-1 ring-inset ring-white/10" />

          <div className="w-full overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent rounded-[1.5rem] bg-black/40 p-6 md:p-8">
            {isLoading && (
              <div className="animate-pulse h-[200px] w-full bg-white/5 rounded-2xl" />
            )}

            {hasError && !isLoading && (
              <div className="text-center py-16 flex flex-col items-center justify-center h-[200px]">
                <p className="text-white/50 font-medium">
                  Unable to load activity calendar.
                </p>
                <p className="text-white/30 text-sm mt-2">
                  Check my{" "}
                  <a
                    href="https://github.com/kundan-webdev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-400 underline"
                  >
                    GitHub
                  </a>{" "}
                  directly.
                </p>
              </div>
            )}

            {!isLoading && !hasError && data.length > 0 && (
              <div className="min-w-[800px] flex justify-center">
                <ActivityCalendar
                  data={data}
                  theme={customTheme}
                  colorScheme="dark"
                  blockSize={14}
                  blockMargin={4}
                  blockRadius={3}
                  fontSize={14}
                  showWeekdayLabels
                  weekStart={1}
                  showMonthLabels={false}
                  labels={{
                    legend: { less: "Less", more: "More" },
                    totalCount: "{{count}} contributions in the last year",
                  }}
                />
              </div>
            )}
          </div>
        </div>

        {/* Caption below heatmap */}
        <p className="text-[#444] text-sm text-center mt-4">
          Real contributions — DevXClub v2, Solvimate internship, and personal projects.
        </p>
      </motion.div>
    </section>
  );
};

export default Activity;