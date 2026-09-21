import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

type Project = {
  title: string;
  blurb: string;
  built: string;
  stack: string[];
  code: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "Online Learning Platform",
    blurb:
      "Instructors publish courses, students enrol and track progress. Role-based dashboards behind JWT auth, with course data and enrolments in MongoDB.",
    built: "The hardest part was getting enrolment state to stay consistent when a course is edited mid-term.",
    stack: ["React", "Node", "Express", "MongoDB", "JWT"],
    code: "https://github.com/tanvirmahmud31/online-learning-platform-server",
    image: "/projects/online-learning.png",
  },
  {
    title: "ZapShift",
    blurb:
      "Parcel delivery from booking to doorstep — riders claim jobs, customers pay by card and follow the parcel through each status change.",
    built: "First time I integrated Stripe and had to think about what happens when a payment succeeds but the write fails.",
    stack: ["React", "Express", "MongoDB", "Stripe", "Leaflet"],
    code: "https://github.com/tanvirmahmud31/Zap-shift-client",
    image: "/projects/zapshift.png",
  },
  {
    title: "3D Model Viewer",
    blurb: "Load a model in the browser, orbit it, light it, inspect it. An excuse to learn WebGL properly.",
    built: "Taught me how much of 3D on the web is really just managing the render loop.",
    stack: ["React", "Three.js", "WebGL"],
    code: "https://github.com/tanvirmahmud31/3d-model-client",
    image: "/projects/3d-model.png",
  },
  {
    title: "Dragon News",
    blurb: "A news reader with category routing and Firebase email and Google sign-in. My first project with real auth in it.",
    built: "Where I learned that protected routes are not the same thing as a protected API.",
    stack: ["React", "Firebase", "React Router", "Tailwind"],
    code: "https://github.com/tanvirmahmud31/Dragon-News-Firebase",
    image: "/projects/dragon-news.png",
  },
];

export const ProjectsSection = () => {
  const [feature, ...rest] = projects;

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24 md:py-32">
      <SectionHeading
        title="Four things I built and what broke"
        lead="University coursework and personal projects. I wrote, debugged and deployed each of these myself — the code is on GitHub if you want to check."
      />

      <FeatureCard project={feature} />

      <div className="grid md:grid-cols-3 gap-5 mt-5">
        {rest.map((p) => (
          <SmallCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
};

const Tags = ({ stack }: { stack: string[] }) => (
  <ul className="flex flex-wrap gap-1.5">
    {stack.map((s) => (
      <li key={s} className="text-[11px] px-2.5 py-1 rounded-full border border-line text-soft">
        {s}
      </li>
    ))}
  </ul>
);

const FeatureCard = ({ project }: { project: Project }) => (
  <motion.article
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    className="group grid md:grid-cols-2 rounded-3xl overflow-hidden border border-line bg-raised"
  >
    <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[340px] overflow-hidden bg-[#0a0f1e] order-1 md:order-2">
      <img
        src={project.image}
        alt=""
        loading="lazy"
        className="w-full h-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
      />
    </div>

    <div className="p-8 md:p-10 flex flex-col justify-between gap-8 order-2 md:order-1">
      <div>
        <h3 className="font-display text-2xl md:text-3xl mb-3">{project.title}</h3>
        <p className="text-soft leading-relaxed mb-4">{project.blurb}</p>
        <p className="text-[15px] leading-relaxed border-l-2 border-accent-flat pl-4 text-foreground/80">
          {project.built}
        </p>
      </div>

      <div className="space-y-5">
        <Tags stack={project.stack} />
        <a
          href={project.code}
          target="_blank"
          rel="noreferrer"
          className="link-underline inline-flex items-center gap-2 text-sm font-semibold w-fit"
        >
          <Github className="w-4 h-4" />
          Read the code
        </a>
      </div>
    </div>
  </motion.article>
);

const SmallCard = ({ project }: { project: Project }) => (
  <motion.a
    href={project.code}
    target="_blank"
    rel="noreferrer"
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    className="group rounded-3xl overflow-hidden border border-line bg-raised flex flex-col hover:border-accent-flat transition-colors"
  >
    <div className="relative aspect-[16/10] overflow-hidden bg-[#0a0f1e]">
      <img
        src={project.image}
        alt=""
        loading="lazy"
        className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity"
      />
    </div>

    <div className="p-6 flex-1 flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg leading-tight">{project.title}</h3>
        <ArrowUpRight className="w-4 h-4 shrink-0 mt-1 text-soft group-hover:text-accent transition-colors" />
      </div>
      <p className="text-sm text-soft leading-relaxed flex-1">{project.blurb}</p>
      <Tags stack={project.stack} />
    </div>
  </motion.a>
);
