import { motion } from "framer-motion";
import { fadeInUp } from "../../lib/animations";

export function ContactLink({ children, href, target }) {
  return (
    <motion.a href={href} target={target} rel={target ? "noreferrer" : undefined} variants={fadeInUp}>
      <span>{children}</span>
    </motion.a>
  );
}
