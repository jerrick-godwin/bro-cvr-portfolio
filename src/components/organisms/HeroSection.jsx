import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "../atoms/Button";
import { fadeIn, fadeInUp } from "../../lib/animations";

export function HeroSection({ founder }) {
  return (
    <section id="home" className="hero section-pad">
      <motion.div className="hero-home" variants={fadeInUp} initial="hidden" animate="visible">
        <h1>
          Rev. Dr. Christy Vincent <span>Rajendram</span>
        </h1>
        <p className="hero-text">
          Pastor at Jesus Lives Evangelical International Ministry and a Multipreneur connecting
          Gemstones, Real-Estate, Wedding Planning, Travel, and Food Distribution through a single
          source of network.
        </p>
        <div className="hero-actions">
          <Button href="#businesses" variant="primary">
            Explore Now
            <ArrowRight size={18} strokeWidth={2.2} aria-hidden="true" />
          </Button>
          <Button href="#contact" variant="secondary">
            <MessageCircle size={18} strokeWidth={2.2} aria-hidden="true" />
            Enquire Now
          </Button>
        </div>
      </motion.div>
      <motion.div
        className="hero-visual founder-visual"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        aria-label="Portrait of Rev Dr Christy Vincent Rajendram"
      >
        <img
          src={founder.heroImage}
          alt="Rev Dr Christy Vincent Rajendram in a formal portrait"
          fetchpriority="high"
          decoding="sync"
        />
      </motion.div>
    </section>
  );
}
