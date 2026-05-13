import { Phone, Globe } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { ContactLink } from "../molecules/ContactLink";
import { fadeInUp, staggerContainer } from "../../lib/animations";

export function ContactSection({ contact, whatsappHref }) {
  return (
    <section className="contact-section section-pad" id="contact">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2>Contact Us Directly through Various Platforms</h2>
        <p>
          You may choose to schedule a phone call or make an appointment from the available options
          platforms.
        </p>
      </motion.div>

      <motion.div
        className="contact-panel"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <ContactLink href={`tel:${contact.phoneHref}`}>
          <Phone size={20} />
          Phone
        </ContactLink>

        <ContactLink href={whatsappHref}>
          <FaWhatsapp size={20} />
          WhatsApp
        </ContactLink>

        <ContactLink href={contact.ministry} target="_blank">
          <Globe size={20} />
          jesusliveslk.com
        </ContactLink>

        <ContactLink href={contact.facebook} target="_blank">
          <FaFacebookF size={20} />
          Facebook
        </ContactLink>

        <ContactLink href={contact.instagram} target="_blank">
          <FaInstagram size={20} />
          Instagram
        </ContactLink>

        <ContactLink href={contact.youtube} target="_blank">
          <FaYoutube size={20} />
          YouTube
        </ContactLink>
      </motion.div>
    </section>
  );
}
