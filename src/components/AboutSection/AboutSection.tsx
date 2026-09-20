import { SectionHeading } from "../ui/SectionHeading";

const facts = [
  { k: "University", v: "Bangladesh University of Business and Technology" },
  { k: "Programme", v: "B.Sc. in Computer Science & Engineering, 2023–2027" },
  { k: "CGPA", v: "3.70 out of 4.00" },
  { k: "Thesis", v: "Grading knee osteoarthritis severity from X-rays with deep learning" },
  { k: "Looking for", v: "An internship or junior developer role, starting anytime" },
];

export const AboutSection = () => (
  <section id="about" className="max-w-6xl mx-auto px-6 py-24 md:py-32">
    <SectionHeading title="Still a student, already shipping" />

    <div className="grid md:grid-cols-[1.15fr_1fr] gap-14 md:gap-20">
      <div className="space-y-5 text-lg text-soft leading-relaxed max-w-[58ch]">
        <p>
          I started with C in my first semester and spent two years on the
          fundamentals — data structures, algorithms, databases, operating
          systems. Then I found web development and it stuck, because for the
          first time I could put something on the internet and watch it work.
        </p>
        <p>
          Since then I've built six projects end to end: authentication,
          protected routes, REST APIs, payments, dashboards, deployment. Every
          one of them broke in a new and educational way before it worked.
        </p>
        <p>
          Alongside that I'm working on my thesis in medical imaging, which has
          taught me more about reading papers and being wrong in public than any
          course did.
        </p>
      </div>

      {/* A record, not four identical stat cards. */}
      <dl className="divide-y divide-line">
        {facts.map((f) => (
          <div key={f.k} className="py-5 grid grid-cols-[100px_1fr] gap-4 items-baseline">
            <dt className="text-sm text-soft">{f.k}</dt>
            <dd className="text-[15px] leading-relaxed font-medium">{f.v}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);
