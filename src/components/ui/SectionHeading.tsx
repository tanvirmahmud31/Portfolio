import { motion } from "framer-motion";

type Props = {
  title: string;
  lead?: string;
  id?: string;
};

/* The one recurring structural device: a marigold rule, the heading, a lead.
   Used identically in every section so the page has a spine. */
export const SectionHeading = ({ title, lead, id }: Props) => (
  <motion.div
    id={id}
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.6 }}
    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    className="mb-12 md:mb-16"
  >
    <span className="rule mb-5" />
    <h2 className="font-display text-[clamp(1.85rem,4.5vw,3rem)] leading-tight mb-4">{title}</h2>
    {lead && <p className="text-soft text-lg leading-relaxed max-w-[60ch]">{lead}</p>}
  </motion.div>
);
