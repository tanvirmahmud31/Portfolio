import { motion } from "framer-motion";
import { ArrowDown, FileText, Github, Linkedin, Mail } from "lucide-react";
import TechStackSection from "../TechStackSection/TechStackSection";
import { HangingIdCard } from "../lightswind/HangingIdCard";

const socials = [
  { Icon: Github, href: "https://github.com/tanvirmahmud31", label: "GitHub" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/tanvir-mahmud-80a21a33a/", label: "LinkedIn" },
  { Icon: Mail, href: "mailto:tanvir120765@gmail.com", label: "Email" },
];

/* One orchestrated load sequence. Nothing else on the page auto-animates. */
const enter = {
  hidden: { opacity: 0, y: 14 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.09, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export const HeroSection = () => {
  const goToProjects = () =>
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative">
      <div className="max-w-6xl mx-auto px-6 pt-28 md:pt-36 pb-16">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_380px] gap-16 lg:gap-12 items-center">
          {/* ---------------- Left: the quiet column ---------------- */}
          <div>
            <motion.div
              custom={0}
              variants={enter}
              initial="hidden"
              animate="show"
              className="flex items-center gap-2.5 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-signal opacity-60 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-signal" />
              </span>
              <span className="text-sm text-soft">
                Open to an internship — Dhaka or remote
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={enter}
              initial="hidden"
              animate="show"
              className="font-display text-[clamp(2.75rem,8vw,5.25rem)] leading-[0.94] mb-7"
            >
              Tanvir Mahmud
            </motion.h1>

            <motion.p
              custom={2}
              variants={enter}
              initial="hidden"
              animate="show"
              className="text-lg md:text-xl text-soft leading-relaxed max-w-[54ch] mb-3"
            >
              Final-year Computer Science student at BUBT, Dhaka. I build full-stack
              web apps — React on the front, Node and MongoDB behind it — and I'm
              writing a thesis on reading knee X-rays with deep learning.
            </motion.p>

            <motion.p
              custom={3}
              variants={enter}
              initial="hidden"
              animate="show"
              className="text-lg text-soft leading-relaxed max-w-[54ch] mb-10"
            >
              No job yet. Everything below is coursework, self-study, and things I
              started because I wanted to know how they worked.
            </motion.p>

            <motion.div
              custom={4}
              variants={enter}
              initial="hidden"
              animate="show"
              className="flex flex-wrap items-center gap-3 mb-12"
            >
              <button
                onClick={goToProjects}
                className="group h-12 px-6 rounded-full bg-accent-flat text-[#0a0f1e] font-semibold text-sm flex items-center gap-2 hover:brightness-110 transition"
              >
                See what I've built
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <a
                href="/public/Tanvir_Mahmud_Resume (2).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-6 rounded-full border border-line text-sm font-semibold flex items-center gap-2 hover:border-accent-flat hover:text-accent transition"
              >
                <FileText className="w-4 h-4" />
                Resume
              </a>
            </motion.div>

            <motion.div
              custom={5}
              variants={enter}
              initial="hidden"
              animate="show"
              className="flex items-center gap-6"
            >
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="text-soft hover:text-accent transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* ------------- Right: the one loud object on the page -------------
              A student ID on a lanyard — drag it and it swings. He is a
              student; this is the most characteristic object in that world. */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="hidden lg:flex justify-center"
          >
            <HangingIdCard
              name="Tanvir Mahmud"
              role="CSE Student, BUBT"
              badgeId="BUBT-CSE"
              accentColor="#f5a524"
              ropeLength={70}
              ropeColor="#5a4a2a"
              cardWidth="w-[280px]"
            >
              <IdCardFace />
            </HangingIdCard>
          </motion.div>

          {/* Static version for small screens — no rope physics on touch. */}
          <div className="lg:hidden flex justify-center">
            <div className="w-[280px] rounded-2xl overflow-hidden border border-line shadow-xl">
              <IdCardFace />
            </div>
          </div>
        </div>
      </div>

      <TechStackSection />
    </section>
  );
};

const IdCardFace = () => (
  <div className="flex flex-col bg-raised w-full">
    <div className="relative px-5 pt-8 pb-6 flex flex-col items-center bg-[#0a0f1e] overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-1 bg-accent-flat" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "10px 10px",
        }}
      />
      <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-accent-flat">
        <img
          src="/profile.jpg"
          alt="Tanvir Mahmud"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>
      <p className="relative mt-3 font-display text-white text-lg">Tanvir Mahmud</p>
      <p className="relative text-[#8e9ab5] text-xs mt-0.5">B.Sc. in CSE — BUBT</p>
    </div>

    <dl className="p-5 grid grid-cols-2 gap-x-4 gap-y-3.5 text-left">
      <Field label="Focus" value="Full-stack web" />
      <Field label="Year" value="4th of 4" />
      <Field label="Based in" value="Dhaka, BD" />
      <Field label="Status" value="Open to intern" signal />
    </dl>
  </div>
);

const Field = ({ label, value, signal }: { label: string; value: string; signal?: boolean }) => (
  <div>
    <dt className="text-[11px] text-soft mb-0.5">{label}</dt>
    <dd className={`text-[13px] font-semibold ${signal ? "text-signal" : "text-foreground"}`}>
      {value}
    </dd>
  </div>
);
