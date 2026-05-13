import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { IconLink } from "../atoms/IconLink";

export function CardActions({ callHref, onViewDetails, whatsappHref }) {
  return (
    <div className="card-actions">
      <button type="button" onClick={onViewDetails}>
        View Details
      </button>
      <IconLink href={whatsappHref} label="WhatsApp">
        <FaWhatsapp size={18} />
      </IconLink>
      <IconLink href={callHref} label="Call">
        <Phone size={18} />
      </IconLink>
    </div>
  );
}
