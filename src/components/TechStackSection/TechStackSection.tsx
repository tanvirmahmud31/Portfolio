import { motion } from "framer-motion";

const base = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const technologies = [
  { name: "C", icon: `${base}/c/c-original.svg` },
  { name: "C++", icon: `${base}/cplusplus/cplusplus-original.svg` },
  { name: "Java", icon: `${base}/java/java-original.svg` },
  { name: "Python", icon: `${base}/python/python-original.svg` },
  { name: "JavaScript", icon: `${base}/javascript/javascript-original.svg` },
  { name: "HTML5", icon: `${base}/html5/html5-original.svg` },
  { name: "CSS3", icon: `${base}/css3/css3-original.svg` },
  { name: "React", icon: `${base}/react/react-original.svg` },
  { name: "Tailwind CSS", icon: `${base}/tailwindcss/tailwindcss-original.svg` },
  { name: "MySQL", icon: `${base}/mysql/mysql-original.svg` },
  { name: "Git", icon: `${base}/git/git-original.svg` },
  { name: "GitHub", icon: `${base}/github/github-original.svg` },
  { name: "VS Code", icon: `${base}/vscode/vscode-original.svg` },
  { name: "Figma", icon: `${base}/figma/figma-original.svg` },
];

const TechStackSection = () => {
  return (
    <div className="w-full py-6 border-t border-b border-foreground/10 bg-foreground/[0.02] flex flex-col items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full overflow-hidden relative flex items-center"
      >
        <div className="absolute left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-[marquee_35s_linear_infinite] whitespace-nowrap items-center hover:[animation-play-state:paused] py-1">
          {[...technologies, ...technologies].map((tech, i) => (
            <div
              key={i}
              className="mx-3 px-5 py-2.5 rounded-full border border-foreground/10 bg-background/80 text-foreground font-medium text-sm flex items-center gap-3 transition-all hover:scale-105 hover:border-primary/50 hover:bg-foreground/5 cursor-default shadow-sm group shrink-0"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-5 h-5 object-contain group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
                decoding="async"
              />
              <span className="tracking-wide text-xs md:text-sm">{tech.name}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
};

export default TechStackSection;
