import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

const details = [
  { Icon: Mail, label: "tanvir120765@gmail.com", href: "mailto:tanvir120765@gmail.com" },
  { Icon: Phone, label: "+880 1701 369031", href: "tel:+8801701369031" },
  { Icon: MapPin, label: "Dhaka, Bangladesh" },
];

export const ContactSection = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const message = String(form.get("message") ?? "");

    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);

    window.location.href = `mailto:tanvir120765@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const field =
    "w-full rounded-xl bg-background border border-line px-4 py-3 text-[15px] placeholder:text-soft/60 focus:border-accent-flat focus:outline-none transition-colors";

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24 md:py-32">
      <SectionHeading
        title="Tell me what you're building"
        lead="I'm looking for an internship or a junior developer role. If you're hiring, or you just want to point out something I got wrong on this page, I'd like to hear it."
      />

      <div className="grid md:grid-cols-[1fr_1.1fr] gap-12 md:gap-20 items-start">
        <div className="space-y-1">
          {details.map(({ Icon, label, href }) => {
            const content = (
              <span className="flex items-center gap-4 py-4 border-b border-line">
                <Icon className="w-4.5 h-4.5  shrink-0" />
                <span className="text-[15px]">{label}</span>
              </span>
            );

            return href ? (
              <a key={label} href={href} className="block hover:text-accent transition-colors">
                {content}
              </a>
            ) : (
              <div key={label} className="text-soft">
                {content}
              </div>
            );
          })}

          <p className="text-sm text-soft leading-relaxed pt-6">
            The form opens your own mail app with the message filled in, so
            nothing is stored on this site.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm text-soft mb-2">
                Your name
              </label>
              <input id="name" name="name" type="text" required placeholder="Jane Rahman" className={field} />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-soft mb-2">
                Your email
              </label>
              <input id="email" name="email" type="email" required placeholder="jane@company.com" className={field} />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-soft mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              placeholder="What's the role, and what would I be working on?"
              className={`${field} resize-none`}
            />
          </div>

          <button
            type="submit"
            className="h-12 px-7 rounded-full bg-accent-flat text-[#0a0f1e] font-semibold text-sm flex items-center gap-2 hover:brightness-110 transition"
          >
            {sent ? "Opened in your mail app" : "Open this in my mail app"}
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
};
