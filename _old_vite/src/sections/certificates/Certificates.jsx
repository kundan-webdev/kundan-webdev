// src/sections/certificates/Certificates.jsx

import { useState } from "react";
import Heading from "../../components/ui/Heading";
import { certificates } from "../../data/certificates";

const Certificates = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className=" py-20">
      <Heading title="Certificates" />

      <p className="text-neutral-400 mt-4 mb-12 max-w-xl text-lg">
        Professional certifications and achievements that validate my expertise.
      </p>

      <div className="relative overflow-hidden">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        {/* Marquee container */}
        <div
          className="flex gap-6"
          style={{
            animation: isPaused ? "none" : "scroll 40s linear infinite",
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* First set of certificates */}
          {certificates.map((cert) => (
            <CertificateCard key={cert.id} {...cert} />
          ))}

          {/* Duplicate for seamless loop */}
          {certificates.map((cert) => (
            <CertificateCard key={`duplicate-${cert.id}`} {...cert} />
          ))}
        </div>
      </div>

      {/* Add keyframe animation */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

const CertificateCard = ({
  title,
  issuer,
  date,
  credentialId,
  image,
  link,
  skills,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex-shrink-0 w-[350px] bg-neutral-900/50 backdrop-blur-sm rounded-2xl border border-neutral-800 hover:border-neutral-700 overflow-hidden transition-all duration-300 hover:scale-105"
    >
      {/* Certificate Image */}
      <div className="relative h-48 bg-neutral-800 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg
              className="w-20 h-20 text-neutral-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
          </div>
        )}

        {/* Verified badge */}
        <div className="absolute top-3 right-3 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1.5">
          <svg
            className="w-4 h-4 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-xs font-semibold text-white">Verified</span>
        </div>
      </div>

      {/* Certificate Details */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
          {title}
        </h3>

        <div className="flex items-center gap-2 mb-3">
          <p className="text-primary font-semibold">{issuer}</p>
        </div>

        <div className="flex items-center gap-2 text-sm text-neutral-400 mb-4">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span>{date}</span>
        </div>

        {credentialId && (
          <div className="mb-4 p-3 bg-neutral-800/50 rounded-lg">
            <p className="text-xs text-neutral-500 mb-1">Credential ID</p>
            <p className="text-xs text-neutral-300 font-mono">{credentialId}</p>
          </div>
        )}

        {/* Skills */}
        {skills && skills.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {skills.slice(0, 3).map((skill, index) => (
              <span
                key={index}
                className="px-2.5 py-1 bg-neutral-800/80 text-neutral-300 rounded-md text-xs font-medium"
              >
                {skill}
              </span>
            ))}
            {skills.length > 3 && (
              <span className="px-2.5 py-1 text-neutral-500 text-xs">
                +{skills.length - 3} more
              </span>
            )}
          </div>
        )}
      </div>
    </a>
  );
};

export default Certificates;