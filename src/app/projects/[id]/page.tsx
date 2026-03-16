"use client";
import { notFound } from "next/navigation";
import { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, Github, FileText, Figma } from "lucide-react";
import { projects } from "@/data/projects";

const badgeColorMap: Record<string, string> = {
  orange: "bg-orange-500/10 text-orange-400 border-orange-500/30",
  blue:   "bg-blue-500/10 text-blue-400 border-blue-500/30",
  purple: "bg-purple-500/10 text-purple-400 border-purple-500/30",
  green:  "bg-green-500/10 text-green-400 border-green-500/30",
};

// Full project details — add more copy here per project
const projectDetails: Record<number, {
  problem: string;
  built: string;
  learnings: string;
  features: string[];
}> = {
  1: {
    problem: "Developer communities are scattered across Discord, Twitter, and Reddit with no single platform built specifically for student and early-career developers in India.",
    built: "Built DevXClub v2 as a full-stack Turborepo monorepo — Next.js 15 App Router frontend, Express.js REST API backend, MongoDB database, and Cloudinary for file storage. Implemented JWT auth, resource sharing, dashboard, and profile system.",
    learnings: "Learned monorepo architecture with Turborepo, JWT auth from scratch, Cloudinary integration, and how to manage a co-founder relationship and git workflow across a team.",
    features: [
      "JWT authentication — signup, login, protected routes, middleware",
      "Resources feature — Cloudinary file uploads with CDN delivery",
      "Dashboard with real-time stats and activity feed",
      "Profile pages with contribution history",
      "Turborepo monorepo — apps/web, apps/server, packages/shared",
      "Studio agency arm at studio.devxclub.com",
    ],
  },
  2: {
    problem: "DevXClub needed a public, documented REST API that developers could explore, use, and learn from — showing real-world API design patterns.",
    built: "Built a clean Express.js REST API with full CRUD on resources and users, JWT auth, Cloudinary uploads, Zod input validation, rate limiting on auth routes, global error handling middleware, and API versioning at /api/v1.",
    learnings: "Deepened understanding of REST API design — consistent response shapes, error handling patterns, Zod schema validation, and rate limiting for security.",
    features: [
      "JWT auth — /auth/register, /auth/login, /auth/me",
      "Resources CRUD — paginated, filterable by tag/type",
      "File uploads via Cloudinary — POST /resources",
      "Zod validation on all POST/PUT routes",
      "Rate limiting on auth routes (10 attempts / 15 min)",
      "Global error middleware — consistent JSON error shape",
      "API versioning at /api/v1/",
    ],
  },
  3: {
    problem: "DevXClub's Jobs pillar needed a backend that shows real backend depth — role-based auth, search, filtering, and pagination.",
    built: "Built a job listings API with two roles (admin can post/edit/delete jobs, users can apply and save listings), full-text search across title/company/stack, filters by location and job type, and cursor-based pagination.",
    learnings: "Learned role-based authorization patterns in Express middleware, MongoDB text search indexes, and clean pagination implementation.",
    features: [
      "Role-based auth — admin vs user access control",
      "POST /jobs — admin only, create job listing",
      "GET /jobs — full-text search + filters by stack/location/type",
      "POST /jobs/:id/apply — user applies to a job",
      "POST /jobs/:id/save — user saves a job listing",
      "Pagination — page + limit query params",
      "Zod validation on all input routes",
    ],
  },
  4: {
    problem: "Solvimate needed a polished frontend for their MERN product — built with React, integrated with existing Express.js APIs.",
    built: "Led frontend development — built React components, integrated REST API endpoints using Axios, made architecture decisions on folder structure and state management patterns, and collaborated with the backend team on API contracts.",
    learnings: "Learned how to work in a real team codebase, communicate API requirements clearly, and deliver production-ready components under deadlines.",
    features: [
      "React component architecture — feature-based folder structure",
      "REST API integration with Axios and custom hooks",
      "State management patterns for complex UI flows",
      "Pixel-perfect implementation from Figma designs",
      "Collaborated on API contract design with backend team",
    ],
  },
  5: {
    problem: "Client needed a professional UI/UX design for their project — from wireframes to dev-ready Figma handoff.",
    built: "Designed complete UI/UX in Figma — landing pages, onboarding flows, and dashboard screens. Delivered dev-ready components with spacing, color tokens, and component documentation.",
    learnings: "Improved Figma skills — auto layout, component variants, design tokens, and writing clear handoff documentation for developers.",
    features: [
      "Complete Figma design system — colors, typography, spacing",
      "Landing page design — hero, features, CTA sections",
      "Onboarding flow — multi-step user journey",
      "Dashboard UI — data visualization layout",
      "Dev-ready handoff — spacing, tokens, component specs",
    ],
  },
  6: {
    problem: "Wanted to practice GSAP animations and custom cursor effects with a visually striking landing page concept.",
    built: "Built a music-themed landing page with GSAP scroll-triggered animations, a custom SVG cursor that reacts to hover states, smooth scroll behavior, and a bold typographic layout.",
    learnings: "Learned GSAP ScrollTrigger, custom cursor implementation, and how to build high-performance CSS animations without layout jank.",
    features: [
      "GSAP ScrollTrigger — elements animate on scroll",
      "Custom SVG cursor with hover state reactions",
      "Bold typographic hero with split-text animation",
      "Smooth scroll with Lenis",
      "CSS-only responsive layout",
    ],
  },
  7: {
    problem: "Practice project — building a creative studio landing page with smooth transitions and component-based architecture.",
    built: "Built with React, Tailwind CSS, and Framer Motion. Clean component structure, animated page sections, and a dark minimal aesthetic.",
    learnings: "Practiced Framer Motion page transitions, component composition patterns, and Tailwind CSS utility-first design.",
    features: [
      "Framer Motion page transitions and micro-interactions",
      "Component-based architecture — reusable section components",
      "Dark minimal aesthetic with precise spacing",
      "Fully responsive layout",
    ],
  },
};

export default function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const project = projects.find((p: any) => p.id === parseInt(id));

  if (!project) notFound();

  const details = projectDetails[project.id];
  const currentIndex = projects.findIndex((p: any) => p.id === project.id);
  const prevProject = projects[currentIndex - 1] ?? null;
  const nextProject = projects[currentIndex + 1] ?? null;

  return (
    <div className="min-h-screen bg-[#080808] pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-6">

        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-[#555] hover:text-white text-sm font-medium transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          {/* Badge */}
          {project.badge && (
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${
              badgeColorMap[project.badge_color] || badgeColorMap.blue
            }`}>
              {project.badge}
            </span>
          )}

          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
            {project.title}
          </h1>

          <p className="text-[#777] text-lg leading-relaxed max-w-2xl">
            {project.description}
          </p>

          {/* Tags */}
          {project.tags && (
            <div className="flex flex-wrap gap-2 mt-5">
              {project.tags.map((tag: string, i: number) => (
                <span
                  key={i}
                  className="text-xs bg-white/5 px-3 py-1.5 rounded-lg text-white/50 border border-[#1c1c1c]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Links */}
          {project.links && (
            <div className="flex flex-wrap gap-3 mt-6">
              {project.links.live && project.links.live !== "#" && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold transition-colors"
                >
                  <ExternalLink size={13} />
                  Live Site
                </a>
              )}
              {project.links.github && project.links.github !== "#" && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#1c1c1c] hover:border-[#333] text-[#777] hover:text-white text-sm font-semibold transition-colors"
                >
                  <Github size={13} />
                  GitHub
                </a>
              )}
              {project.links.docs && project.links.docs !== "#" && (
                <a
                  href={project.links.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#1c1c1c] hover:border-[#333] text-[#777] hover:text-white text-sm font-semibold transition-colors"
                >
                  <FileText size={13} />
                  API Docs
                </a>
              )}
              {project.links.figma && project.links.figma !== "#" && (
                <a
                  href={project.links.figma}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#1c1c1c] hover:border-[#333] text-[#777] hover:text-white text-sm font-semibold transition-colors"
                >
                  <Figma size={13} />
                  Figma
                </a>
              )}
            </div>
          )}
        </motion.div>

        {/* Hero Image */}
        {project.image && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full rounded-2xl overflow-hidden border border-[#1c1c1c] mb-12 bg-[#0f0f0f]"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full object-cover"
            />
          </motion.div>
        )}

        {/* Details */}
        {details && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Problem */}
            <div className="bg-[#0f0f0f] border border-[#1c1c1c] rounded-2xl p-6 md:p-8">
              <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-3">
                The Problem
              </p>
              <p className="text-[#aaa] leading-relaxed text-base">
                {details.problem}
              </p>
            </div>

            {/* What I Built */}
            <div className="bg-[#0f0f0f] border border-[#1c1c1c] rounded-2xl p-6 md:p-8">
              <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-3">
                What I Built
              </p>
              <p className="text-[#aaa] leading-relaxed text-base">
                {details.built}
              </p>
            </div>

            {/* Key Features */}
            <div className="bg-[#0f0f0f] border border-[#1c1c1c] rounded-2xl p-6 md:p-8">
              <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-4">
                Key Features
              </p>
              <ul className="space-y-3">
                {details.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#aaa] text-sm">
                    <span className="text-orange-500 mt-0.5 flex-shrink-0">→</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Learnings */}
            <div className="bg-[#0f0f0f] border border-[#1c1c1c] rounded-2xl p-6 md:p-8">
              <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-3">
                What I Learned
              </p>
              <p className="text-[#aaa] leading-relaxed text-base">
                {details.learnings}
              </p>
            </div>
          </motion.div>
        )}

        {/* Prev / Next Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-between mt-16 pt-8 border-t border-[#1c1c1c]"
        >
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.id}`}
              className="flex items-center gap-2 text-[#555] hover:text-white text-sm font-medium transition-colors group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              <div>
                <p className="text-[10px] text-[#444] uppercase tracking-wider mb-0.5">Previous</p>
                <p className="text-sm group-hover:text-white transition-colors">{prevProject.title}</p>
              </div>
            </Link>
          ) : <div />}

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.id}`}
              className="flex items-center gap-2 text-[#555] hover:text-white text-sm font-medium transition-colors group text-right"
            >
              <div>
                <p className="text-[10px] text-[#444] uppercase tracking-wider mb-0.5">Next</p>
                <p className="text-sm group-hover:text-white transition-colors">{nextProject.title}</p>
              </div>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : <div />}
        </motion.div>

      </div>
    </div>
  );
}