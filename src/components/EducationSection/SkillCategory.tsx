import { motion } from "framer-motion";

/* Percentage bars on a student portfolio are guesswork and recruiters know it.
   These are plain, honest confidence levels instead. */
const groups = [
  {
    label: "I reach for these first",
    note: "Used across several projects, comfortable debugging them without help.",
    items: ["React", "JavaScript", "HTML & CSS", "Tailwind CSS", "React Router", "Git & GitHub"],
    strong: true,
  },
  {
    label: "I've shipped with these",
    note: "Working knowledge — enough to build a feature, still learning the edges.",
    items: ["Node.js", "Express", "MongoDB", "Firebase Auth", "REST APIs", "JWT", "TypeScript", "Stripe"],
  },
  {
    label: "From coursework",
    note: "Taught at university, exercised in assignments rather than production.",
    items: ["C", "C++", "Java", "Python", "MySQL", "Data structures", "Algorithms", "OOP"],
  },
  {
    label: "Learning right now",
    note: "Actively working through these this term.",
    items: ["Deep learning", "Computer vision", "Explainable AI", "System design"],
  },
];

export default function SkillCategory() {
  return (
    <div id="skills">
      <span className="rule mb-5" />
      <h3 className="font-display text-[clamp(1.5rem,3.5vw,2.25rem)] mb-3">
        What I can actually do
      </h3>
      <p className="text-soft text-lg leading-relaxed max-w-[60ch] mb-12">
        Grouped by how confident I am, rather than by a number I made up.
      </p>

      <div className="grid sm:grid-cols-2 gap-5">
        {groups.map((g, i) => (
          <motion.div
            key={g.label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            className={`rounded-3xl p-7 border ${
              g.strong ? "border-accent-flat/45 bg-accent-flat/[0.06]" : "border-line bg-raised"
            }`}
          >
            <h4 className="font-display text-lg mb-1.5">{g.label}</h4>
            <p className="text-sm text-soft leading-relaxed mb-5">{g.note}</p>

            <ul className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="text-[13px] px-3 py-1.5 rounded-full border border-line bg-background/60"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
