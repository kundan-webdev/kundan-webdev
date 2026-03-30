"use client";

import { motion, type Variants } from "framer-motion";

import { testimonials } from "@/data/testimonials";

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24">
      <motion.div
        className="mx-auto max-w-[1136px] px-4 sm:px-6 lg:px-0"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div variants={item} className="mb-12">
          <span className="mb-4 block text-sm font-medium text-[var(--text-muted)]">
            <span className="text-[var(--brand-primary)]">.</span>testimonials
          </span>
          <h2 className="text-2xl font-bold text-[var(--text-primary)] sm:text-3xl md:text-4xl">
            What People Say
          </h2>
        </motion.div>

        {testimonials.length === 0 ? (
          <motion.div
            variants={item}
            className="rounded-[var(--radius-lg)] border border-dashed border-[var(--border-default)] bg-[var(--bg-surface)] p-6 text-sm text-[var(--text-secondary)]"
          >
            Testimonials are intentionally hidden until I have a final set I&apos;m comfortable publishing.
          </motion.div>
        ) : (
          <motion.div variants={container} className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            {testimonials.map((testimonial) => (
              <motion.article
                key={testimonial.id}
                variants={item}
                className="rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-surface)] p-4 sm:p-6"
              >
                <span className="mb-4 block text-4xl leading-none text-[var(--brand-primary)]">“</span>
                <p className="text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                  {testimonial.content}
                </p>
                <div className="mt-6">
                  <p className="text-sm font-semibold text-[var(--text-primary)]">{testimonial.name}</p>
                  <p className="text-xs text-[var(--text-muted)]">
                    {testimonial.role} · {testimonial.company}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default Testimonials;

