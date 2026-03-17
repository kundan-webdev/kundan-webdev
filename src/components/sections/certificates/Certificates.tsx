"use client";
import { certificates } from "@/data/certificates";
import { motion } from "framer-motion";
import { Marquee } from "@/components/ui/Marquee";

const Certificates = () => {
  return (
    <section className="py-16 md:py-24" id="certificates">
      {/* Header */}
      <motion.div
        className="container-content !py-0 mb-10 md:mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-sm text-white/40 font-medium mb-4 block">
          <span className="text-orange-500 font-bold">.</span>certificates
        </span>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-[-0.04em] leading-[1.0]">
          Certifications
        </h2>
        <p className="text-[#777] mt-4 max-w-xl text-base md:text-lg">
          Professional certifications that validate my expertise.
        </p>
      </motion.div>

      {/* Marquee */}
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-20 md:w-40 z-10 bg-gradient-to-r from-[#080808] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-20 md:w-40 z-10 bg-gradient-to-l from-[#080808] to-transparent" />

        <Marquee
          pauseOnHover
          className="[--duration:40s] [--gap:0.75rem] md:[--gap:1rem] py-2"
        >
          {certificates.map((cert) => (
            <CertificateCard key={cert.id} {...cert} />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

interface CertificateProps {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  image?: string;
  link?: string;
  tags?: string[];
}

const CertificateCard = ({
  title,
  issuer,
  date,
  credentialId,
  image,
  link,
  tags,
}: CertificateProps) => {
  return (<a
    
      href={link || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group flex-shrink-0
        w-[220px] sm:w-[270px] md:w-[320px]
        bg-[#0f0f0f] rounded-2xl
        border border-[#1c1c1c]
        hover:border-orange-500/25
        overflow-hidden
        transition-all duration-300
        hover:shadow-[0_0_24px_rgba(232,80,2,0.08)]
      "
    >
      {/* Image */}
      <div className="relative h-32 sm:h-36 md:h-40 bg-[#141414] overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg
              className="w-10 h-10 text-neutral-700"
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

        {/* Subtle orange overlay on hover */}
        <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/5 transition-colors duration-300" />

        {/* Verified badge */}
        <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm px-1.5 py-0.5 rounded-full flex items-center gap-1 border border-white/[0.06]">
          <svg className="w-2.5 h-2.5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-[9px] font-semibold text-white/70 tracking-wide">Verified</span>
        </div>
      </div>

      {/* Details */}
      <div className="p-3 sm:p-4">
        <h3 className="text-xs sm:text-sm font-bold text-white mb-1 line-clamp-2 group-hover:text-orange-400 transition-colors leading-snug">
          {title}
        </h3>

        <div className="flex items-center justify-between mb-2">
          <p className="text-orange-500/80 text-[11px] font-semibold">{issuer}</p>
          <p className="text-[10px] text-neutral-600">{date}</p>
        </div>

        {credentialId && (
          <div className="mb-2.5 px-2 py-1.5 bg-white/[0.02] rounded-lg border border-white/[0.04]">
            <p className="text-[9px] text-neutral-600 mb-0.5 uppercase tracking-wide">ID</p>
            <p className="text-[10px] text-neutral-500 font-mono truncate">{credentialId}</p>
          </div>
        )}

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {tags.slice(0, 3).map((tag, i) => (
              <span
                key={i}
                className="px-1.5 py-0.5 bg-white/[0.03] text-white/35 rounded text-[9px] border border-white/[0.05]"
              >
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="text-[9px] text-neutral-700">+{tags.length - 3}</span>
            )}
          </div>
        )}
      </div>
    </a>
  );
};

export default Certificates;