import { useState, useEffect } from "react";
import { ActivityCalendar } from "react-activity-calendar";
import Heading from "../../components/ui/Heading";

const Activity = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [data, setData] = useState([]);

  // Calculate level based on contribution count
  const getLevel = (count) => {
    if (count === 0) return 0;
    if (count <= 3) return 1;
    if (count <= 6) return 2;
    if (count <= 9) return 3;
    return 4;
  };

  // Fetch GitHub contribution data
  const fetchGitHubData = async () => {
    try {
      const response = await fetch(
        "https://github-contributions-api.jogruber.de/v4/kundan-webdev?y=last",
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const apiData = await response.json();

      if (
        apiData &&
        apiData.contributions &&
        Array.isArray(apiData.contributions)
      ) {
        // Transform API data to match react-activity-calendar format
        const formattedData = apiData.contributions.map((day) => ({
          date: day.date,
          count: day.count,
          level: getLevel(day.count),
        }));

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

  // Custom theme with your orange gradient color scheme
const customTheme = {
  light: ["#1a1a1a", "#2a1e15", "#5c2e10", "#a23b00", "#ff6a00"],
  dark: [
    "#1B1B1B", // dark base - no activity
    "#78350f", // amber-900 - low activity
    "#b45309", // amber-700 - medium-low activity
    "#f59e0b", // amber-500 - medium-high activity
    "#fbbf24", // amber-400 - high activity
  ],
};
  return (
    <section className="container-content py-20">
      <Heading title="Activity" />

      <p className="text-neutral-400 mt-4 mb-10 max-w-xl text-lg">
        Consistent contribution and continuous improvement through real-world
        projects and open-source work.
      </p>

      <div className="activity-calendar-wrapper bg-neutral-900/50 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-neutral-800 hover:border-neutral-700 transition-all duration-300">
        {isLoading && (
          <div className="animate-pulse h-40 bg-neutral-800/50 rounded-xl" />
        )}

        {hasError && !isLoading && (
          <div className="text-center py-12">
            <p className="text-neutral-500">
              Unable to load activity calendar at this time.
            </p>
            <p className="text-neutral-600 text-sm mt-2">
              Please check back later.
            </p>
          </div>
        )}

        {!isLoading && !hasError && data.length > 0 && (
          <ActivityCalendar
            data={data}
            theme={customTheme}
            colorScheme="dark"
            blockSize={18}
            blockMargin={6}
            blockRadius={6}
            fontSize={14}
            showWeekdayLabels
            labels={{
              legend: {
                less: "Less",
                more: "More",
              },
            }}
          />
        )}
      </div>
    </section>
  );
};

export default Activity;
