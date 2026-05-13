import { motion } from "framer-motion";
import { fadeInUp } from "../../lib/animations";

export function SectionHeading({ children, id, title }) {
  return (
    <motion.div
      className="section-heading"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <h2 id={id}>{title}</h2>
      <p>{children}</p>
    </motion.div>
  );
}
