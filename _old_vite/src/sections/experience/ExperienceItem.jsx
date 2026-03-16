// src/sections/experience/ExperienceItem.jsx

const ExperienceItem = ({
  company,
  position,
  duration,
  location,
  type,
  description,
  responsibilities,
  technologies,
  logo,
}) => {
  return (
    <div className="group relative mb-12 last:mb-0">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-neutral-700 via-neutral-800 to-transparent hidden md:block" />
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-4 border-neutral-900 group-hover:scale-125 transition-transform hidden md:block" />

      <div className="md:ml-8 bg-neutral-900/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition-all duration-300">
        {/* Header */}
        <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
          <div className="flex items-center gap-4">
            {logo && (
              <div className="w-12 h-12 rounded-lg bg-neutral-800 p-2 flex items-center justify-center">
                <img src={logo} alt={company} className="w-full h-full object-contain" />
              </div>
            )}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                {position}
              </h3>
              <p className="text-primary font-semibold">{company}</p>
            </div>
          </div>

          <div className="flex flex-col items-end gap-1 text-sm text-neutral-400">
            <span className="font-medium">{duration}</span>
            <span>{location}</span>
            <span className="px-3 py-1 bg-neutral-800 rounded-full text-xs">
              {type}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-neutral-300 mb-4">{description}</p>

        {/* Responsibilities */}
        {responsibilities && responsibilities.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-3">
              Key Responsibilities
            </h4>
            <ul className="space-y-2">
              {responsibilities.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-neutral-300">
                  <span className="text-primary mt-1.5 text-xs">▸</span>
                  <span className="flex-1">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}
        {technologies && technologies.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-3">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-neutral-800/80 text-neutral-300 rounded-lg text-sm font-medium hover:bg-neutral-700 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceItem;