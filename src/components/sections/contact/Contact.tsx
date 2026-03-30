"use client";

import { useCallback, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { Check, Copy } from "lucide-react";

import { SocialLinks } from "@/components/molecules";

const subjects = ["Job Opportunity", "Freelance Project", "Collaboration", "Other"];

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const CopyEmailButton = ({ email }: { email: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }, [email]);

  return (
    <button
      onClick={handleCopy}
      className="flex min-h-[44px] items-center gap-3 text-left text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
      type="button"
    >
      <span>{email}</span>
      <span className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-[var(--border-default)]">
        <AnimatePresence mode="wait" initial={false}>
          {copied ? (
            <motion.span key="check" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }}>
              <Check size={14} className="text-green-500" />
            </motion.span>
          ) : (
            <motion.span key="copy" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }}>
              <Copy size={14} />
            </motion.span>
          )}
        </AnimatePresence>
      </span>
    </button>
  );
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!form.name.trim()) nextErrors.name = "Name is required";
    if (!form.email.trim()) nextErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = "Enter a valid email";
    if (!form.subject) nextErrors.subject = "Please select a subject";
    if (!form.message.trim()) nextErrors.message = "Message is required";
    return nextErrors;
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: "" }));
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("Failed to send");

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "min-h-[44px] w-full rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-surface)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-faint)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30";

  return (
    <section id="contact" className="py-16 md:py-24">
      <motion.div
        className="mx-auto max-w-[1136px] px-4 sm:px-6 lg:px-0"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div variants={item} className="mb-12">
          <span className="mb-4 block text-sm font-medium text-[var(--text-muted)]">
            <span className="text-[var(--brand-primary)]">.</span>contact
          </span>
          <h2 className="text-2xl font-bold text-[var(--text-primary)] sm:text-3xl md:text-4xl">
            Let&apos;s Work Together
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
            Open to full-stack internships, frontend roles, freelance UI/UX work, and thoughtful collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <motion.div variants={item}>
            <form onSubmit={handleSubmit} className="space-y-5 rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-surface)] p-4 sm:p-6" noValidate>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-faint)]">
                  Name
                </label>
                <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" className={inputClass} />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-faint)]">
                  Email
                </label>
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className={inputClass} />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-faint)]">
                  Subject
                </label>
                <select name="subject" value={form.subject} onChange={handleChange} className={inputClass}>
                  <option value="">Select a subject</option>
                  {subjects.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
                {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-faint)]">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about the opportunity or project..."
                  rows={5}
                  className={`${inputClass} resize-none`}
                />
                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="min-h-[44px] w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60 sm:w-auto"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-sm text-green-500">Message sent. I&apos;ll reply within 24 hours.</p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-500">Something went wrong. Please email me directly.</p>
              )}
            </form>
          </motion.div>

          <motion.div variants={item} className="space-y-5">
            <div className="rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-surface)] p-4 sm:p-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-faint)]">
                Email
              </p>
              <CopyEmailButton email="kundan.webdev@gmail.com" />
              <p className="mt-2 text-xs text-[var(--text-faint)]">Click to copy</p>
            </div>

            <div className="rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-surface)] p-4 sm:p-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-faint)]">
                Connect
              </p>
              <SocialLinks include={["linkedin", "github", "instagram", "twitter"]} className="gap-4" />
            </div>

            <div className="rounded-[var(--radius-lg)] border border-orange-500/20 bg-orange-500/5 p-4 sm:p-6">
              <div className="mb-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-green-500">
                  Available
                </span>
              </div>
              <p className="text-sm font-medium text-[var(--text-primary)]">Open to new opportunities</p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                Full-Stack Internships · Frontend Roles · Freelance UI/UX · Collabs
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;

