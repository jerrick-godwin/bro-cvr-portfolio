import { motion } from "framer-motion";
import { CardActions } from "../molecules/CardActions";
import { SectionHeading } from "../molecules/SectionHeading";
import { fadeInUp, staggerContainer } from "../../lib/animations";

export function BusinessGrid({ businesses, callHref, onSelectBusiness, whatsappHref }) {
  return (
    <section className="section-pad business-section" aria-labelledby="business-heading" id="businesses">
      <SectionHeading id="business-heading" title="Featured Businesses">
        Explore each venture through a concise profile, service overview, and direct contact path.
      </SectionHeading>

      <motion.div
        className="business-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {businesses.map((business) => (
          <motion.article
            className={`business-card ${
              business.thumbnailFit === "contain" ? "business-card-logo" : ""
            }`}
            id={business.id}
            key={business.id}
            variants={fadeInUp}
          >
            <img
              src={business.thumbnail || business.image}
              alt={`${business.name} visual`}
              loading="lazy"
              decoding="async"
            />
            <div className="business-card-content">
              <h3>{business.name}</h3>
              <p>{business.summary}</p>
              <CardActions
                callHref={callHref}
                onViewDetails={() => onSelectBusiness(business)}
                whatsappHref={whatsappHref}
              />
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
