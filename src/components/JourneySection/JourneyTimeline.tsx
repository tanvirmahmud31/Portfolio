
import { ScrollTimeline } from "../lightswind/scroll-timeline";
import {
  GraduationCap,
  Code2,
  Globe,
  Rocket,
  Brain,
} from "lucide-react";

export const JourneyTimeline = () => {
  const journeyEvents = [
    {
      year: "2026 – Present",
      title: "Final Year & Research",
      subtitle: "B.Sc. in CSE, BUBT",
      description:
        "Currently in my final year of Computer Science & Engineering at BUBT. Working on my final-year research and thesis direction in AI-based medical image analysis, while preparing for a career in full-stack web development.",
      icon: <Rocket className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2025 – 2026",
      title: "Full-Stack Web Development",
      subtitle: "React, Node.js, Express.js & MongoDB",
      description:
        "Focused on building real-world full-stack applications using React, Node.js, Express.js, MongoDB and Firebase. Built projects such as Online Learning Platform and ZapShift with authentication, protected routes, APIs, dashboards and database integration.",
      icon: <Code2 className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2025",
      title: "Exploring AI & Research",
      subtitle: "Computer Vision & Explainable AI",
      description:
        "Started exploring Artificial Intelligence alongside web development. Worked on a research direction for knee osteoarthritis severity classification using deep learning and explored computer vision, transformer-based models and explainable AI.",
      icon: <Brain className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2024 – 2025",
      title: "Modern Frontend Development",
      subtitle: "React & Modern UI Development",
      description:
        "Moved from basic web development into modern frontend development with React. Learned component-based architecture, React Router, Firebase Authentication, Tailwind CSS and responsive UI design while building academic and personal projects.",
      icon: <Globe className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2023 – 2024",
      title: "Started Programming Journey",
      subtitle: "B.Sc. in Computer Science & Engineering",
      description:
        "Started my B.Sc. in Computer Science & Engineering at Bangladesh University of Business and Technology. Built my foundation in programming, data structures, algorithms, databases and core computer science concepts.",
      icon: <GraduationCap className="h-4 w-4 mr-2 text-primary" />,
    },
  ];

  return (
    <div id="journey">
      <ScrollTimeline
        events={journeyEvents}
        title="My Journey"
        subtitle="From learning the fundamentals of computer science to building full-stack applications and exploring AI research"
        animationOrder="staggered"
        cardAlignment="alternating"
        cardVariant="elevated"
        parallaxIntensity={0.15}
        revealAnimation="fade"
        progressIndicator={true}
        lineColor="bg-primary/20"
        activeColor="bg-primary"
        progressLineWidth={3}
        progressLineCap="round"
      />
    </div>
  );
};

