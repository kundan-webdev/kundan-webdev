import { useEffect, useRef, useState } from "react";
import GitHubCalendar from "github-calendar";
import "github-calendar/dist/github-calendar-responsive.css";
import Heading from "../../components/ui/Heading";

const Activity = () => {
  const calendarRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (calendarRef.current) {
      // Clear any existing content first
      calendarRef.current.innerHTML = '';
      
      GitHubCalendar(calendarRef.current, "kundan-webdev", {
        responsive: true,
        tooltips: true,
        global_stats: false,
      })
        .then(() => {
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Failed to load GitHub calendar:", error);
          setHasError(true);
          setIsLoading(false);
        });
    }
  }, []);

  return (
    <section className="container-content py-20">
      <Heading title="Activity" />

      <p className="text-gray-500 mt-4 mb-10 max-w-xl">
        Consistent contribution and continuous improvement through real-world
        projects and open-source work.
      </p>

      <div className="calendar-wrapper bg-neutral-900 p-4 md:p-8 rounded-2xl border border-white/10 hover:border-white/20 transition">
        {isLoading && (
          <div className="animate-pulse h-32 bg-neutral-800 rounded-lg" />
        )}
        
        {hasError && !isLoading && (
          <div className="text-center py-8">
            <p className="text-gray-500">Unable to load activity calendar at this time.</p>
          </div>
        )}
        
        <div
          ref={calendarRef}
          className="calendar overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0"
          style={{ display: isLoading ? 'none' : 'block' }}
        />
      </div>
    </section>
  );
};

export default Activity;