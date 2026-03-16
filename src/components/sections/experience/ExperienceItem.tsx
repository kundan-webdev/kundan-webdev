"use client";

interface ExperienceItemProps {
  role: string;
  company: string;
  duration: string;
  type: string;
  description: string;
  bullets?: string[];
  tags?: string[];
  type_badge?: string;
  badge_color?: string;
}

const badgeColorMap: Record<string, string> = {
  blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  orange: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  green: "bg-green-500/10 text-green-400 border-green-500/20",
};

const ExperienceItem = ({
  role,
  company,
  duration,
  type,
  description,
  bullets,
  tags,
  type_badge,
  badge_color = "blue",
}: ExperienceItemProps) => {
  const colorClass = badgeColorMap[badge_color] || badgeColorMap.blue;

  return (
    <div className="group relative mb-8 last:mb-0">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-[#1c1c1c] via-[#1c1c1c] to-transparent hidden md:block" />
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-3 -translate-x-1/2 w-3 h-3 rounded-full bg-orange-500 border-4 border-[#080808] group-hover:scale-125 transition-transform hidden md:block" />

      <div className="md:ml-8 bg-[#0f0f0f] p-6 md:p-8 rounded-xl border border-[#1c1c1c] hover:border-[#2a2a2a] transition-all duration-300">
        {/* Header */}
        <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
              {role}
            </h3>
            <p className="text-orange-500 font-semibold">{company}</p>
          </div>

          <div className="flex flex-col items-end gap-2 text-sm text-[#777]">
            <span className="font-medium">{duration}</span>
            {type_badge && (
              <span className={`px-3 py-1 rounded-full text-xs font-medium border ${colorClass}`}>
                {type_badge}
              </span>
            )}
          </div>
        </div>

        {/* Type subtitle */}
        <p className="text-[#777] text-sm mb-4">{type}</p>

        {/* Description */}
        <p className="text-white/70 mb-6 leading-relaxed">{description}</p>

        {/* Bullets */}
        {bullets && bullets.length > 0 && (
          <div className="mb-6">
            <ul className="space-y-2">
              {bullets.map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-3 text-white/60 text-sm">
                  <span className="text-orange-500 mt-1 text-xs">▸</span>
                  <span className="flex-1">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-white/5 text-white/60 rounded-lg text-xs font-medium border border-[#1c1c1c]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceItem;