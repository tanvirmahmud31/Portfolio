import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import SkillCategory from "./SkillCategory";

const entries = [
  {
    period: "2023 — 2027",
    title: "B.Sc. in Computer Science & Engineering",
    place: "Bangladesh University of Business and Technology, Dhaka",
    status: "4th year",
    points: [
      "Core coursework in data structures, algorithms, OOP, DBMS, operating systems, computer networks and software engineering",
      "Building full-stack applications in React, Node, Express, MongoDB and Firebase for both coursework and personal projects",
      "CGPA 3.70 / 4.00",
    ],
  },
  {
    period: "2025 — now",
    title: "Undergraduate thesis — medical image analysis",
    place: "Supervised research, BUBT",
    status: "In progress",
    points: [
      "Classifying knee osteoarthritis severity from X-rays using convolutional and transformer-based models",
      "Applying explainable-AI methods so a prediction can be traced back to the region of the image that produced it",
      "Running the university Software Development Project in parallel",
    ],
  },
];

export const EducationSection = () => (
  <section id="education" className="max-w-6xl mx-auto px-6 py-24 md:py-32">
    <SectionHeading
      title="Studies and research"
      lead="What I'm formally studying at BUBT, and the research I'm doing alongside it."
    />

    <div className="space-y-4 mb-24">
      {entries.map((e, i) => (
        <motion.article
          key={e.title}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl border border-line bg-raised p-8 md:p-10 grid md:grid-cols-[150px_1fr] gap-6 md:gap-10"
        >
          <div className="flex md:flex-col items-baseline md:items-start gap-3">
            <span className="text-sm font-semibold ">{e.period}</span>
            <span className="text-xs px-2.5 py-1 rounded-full bg-signal/10 text-signal border border-signal/25 w-fit">
              {e.status}
            </span>
          </div>

          <div>
            <h3 className="font-display text-xl md:text-2xl mb-1.5">{e.title}</h3>
            <p className="text-sm text-soft mb-6">{e.place}</p>

            <ul className="space-y-3">
              {e.points.map((p) => (
                <li key={p} className="flex gap-3.5 text-[15px] leading-relaxed text-soft">
                  <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-accent-flat shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.article>
      ))}
    </div>

    <SkillCategory />
  </section>
);
