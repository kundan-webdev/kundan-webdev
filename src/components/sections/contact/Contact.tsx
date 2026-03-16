"use client";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, Github, Linkedin, Instagram, Phone } from "lucide-react";

// ── Copy Email Button ──────────────────────────────────────
const CopyEmailButton = ({ email }: { email: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const el = document.createElement("textarea");
      el.value = email;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [email]);

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-2 text-[#777] hover:text-white transition-colors group"
      title="Copy email"
    >
      <span className="text-sm group-hover:text-orange-400 transition-colors">
        {email}
      </span>
      <span className="w-7 h-7 rounded-md border border-[#1c1c1c] flex items-center justify-center hover:border-orange-500/50 transition-colors">
        <AnimatePresence mode="wait" initial={false}>
          {copied ? (
            <motion.span
              key="check"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.15 }}
            >
              <Check size={12} className="text-green-400" />
            </motion.span>
          ) : (
            <motion.span
              key="copy"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.15 }}
            >
              <Copy size={12} />
            </motion.span>
          )}
        </AnimatePresence>
      </span>
    </button>
  );
};

// ── Toast ──────────────────────────────────────────────────
const Toast = ({ show, message }: { show: boolean; message: string }) => (
  <AnimatePresence>
    {show && (
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="fixed bottom-6 right-6 z-[200] bg-[#0f0f0f] border border-[#1c1c1c] rounded-xl px-4 py-3 text-sm text-white shadow-2xl flex items-center gap-2"
      >
        <Check size={14} className="text-green-400 flex-shrink-0" />
        {message}
      </motion.div>
    )}
  </AnimatePresence>
);

// ── Subject options ────────────────────────────────────────
const subjects = [
  "Job Opportunity",
  "Freelance Project",
  "Collaboration",
  "Other",
];

// ── Main Component ─────────────────────────────────────────
const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors]   = useState<Record<string, string>>({});
  const [status, setStatus]   = useState<"idle" | "sending" | "success" | "error">("idle");
  const [toast, setToast]     = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setToast(true);
    setTimeout(() => setToast(false), 2500);
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim())    e.name    = "Name is required";
    if (!form.email.trim())   e.email   = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
                              e.email   = "Enter a valid email";
    if (!form.subject)        e.subject = "Please select a subject";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      showToast("Message sent! I'll reply within 24 hours ✓");
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-[#0a0a0a] border border-[#1c1c1c] rounded-xl px-4 py-3 text-white text-sm placeholder-[#444] focus:outline-none focus:border-orange-500/60 transition-colors";
  const labelClass = "block text-xs font-semibold text-[#555] uppercase tracking-wider mb-2";
  const errorClass = "text-red-400 text-xs mt-1";

  const socials = [
    { icon: Linkedin,  label: "LinkedIn",  href: "https://linkedin.com/in/kundan-webdev"    },
    { icon: Github,    label: "GitHub",    href: "https://github.com/kundan-webdev"          },
    { icon: Instagram, label: "Instagram", href: "https://instagram.com/kundan_webdev"       },
    { icon: Phone,     label: "Book a Call", href: "https://cal.com/kundan-webdev"           },
  ];

  return (
    <>
      <Toast show={toast} message={toastMsg} />

      <section className="container-content py-20 md:py-28" id="contact">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-3 block">
            CONTACT
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-[#777] text-base max-w-lg">
            Open to: Full-Stack Internships · Frontend Roles · Freelance UI/UX · Collabs
          </p>
          <p className="text-[#555] text-sm mt-2">
            I typically reply within 24 hours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* ── LEFT — Form ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Name */}
              <div>
                <label className={labelClass}>Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={inputClass}
                />
                {errors.name && <p className={errorClass}>{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className={labelClass}>Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={inputClass}
                />
                {errors.email && <p className={errorClass}>{errors.email}</p>}
              </div>

              {/* Subject */}
              <div>
                <label className={labelClass}>Subject</label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className={`${inputClass} cursor-pointer`}
                >
                  <option value="" disabled>Select a subject</option>
                  {subjects.map((s) => (
                    <option key={s} value={s} className="bg-[#0f0f0f]">{s}</option>
                  ))}
                </select>
                {errors.subject && <p className={errorClass}>{errors.subject}</p>}
              </div>

              {/* Message */}
              <div>
                <label className={labelClass}>Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about the opportunity or project..."
                  rows={5}
                  className={`${inputClass} resize-none`}
                />
                {errors.message && <p className={errorClass}>{errors.message}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-semibold text-sm transition-all shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30"
              >
                {status === "sending" ? "Sending..." : "Send Message →"}
              </button>

              {/* Status messages */}
              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-400 text-sm text-center pt-1"
                >
                  ✓ Message sent! I'll reply within 24 hours.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-400 text-sm text-center pt-1"
                >
                  Something went wrong.{" "}
                  <a
                    href="mailto:kundan.webdev@gmail.com"
                    className="underline hover:text-red-300"
                  >
                    Email me directly.
                  </a>
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* ── RIGHT — Links ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8 md:pt-4"
          >
            {/* Email with copy */}
            <div className="bg-[#0f0f0f] border border-[#1c1c1c] rounded-xl p-5">
              <p className="text-xs font-semibold text-[#555] uppercase tracking-wider mb-3">
                Email
              </p>
              <CopyEmailButton email="kundan.webdev@gmail.com" />
              <p className="text-[#444] text-xs mt-2">Click to copy</p>
            </div>

            {/* Social links */}
            <div className="bg-[#0f0f0f] border border-[#1c1c1c] rounded-xl p-5">
              <p className="text-xs font-semibold text-[#555] uppercase tracking-wider mb-4">
                Connect
              </p>
              <div className="space-y-3">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#777] hover:text-white transition-colors group"
                  >
                    <span className="w-8 h-8 rounded-lg bg-white/5 border border-[#1c1c1c] flex items-center justify-center group-hover:border-orange-500/40 group-hover:bg-orange-500/5 transition-all">
                      <Icon size={14} />
                    </span>
                    <span className="text-sm group-hover:text-orange-400 transition-colors">
                      {label}
                    </span>
                    <span className="ml-auto text-[#333] group-hover:text-[#555] text-xs">↗</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <div className="bg-orange-500/5 border border-orange-500/20 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs font-semibold uppercase tracking-wider">
                  Available
                </span>
              </div>
              <p className="text-white text-sm font-medium mb-1">
                Open to new opportunities
              </p>
              <p className="text-[#555] text-xs leading-relaxed">
                Full-Stack Internships · Frontend Roles · Freelance UI/UX · Collabs
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;