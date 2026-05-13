import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "../atoms/Button";

export function ModalActions({ callHref, whatsappHref }) {
  return (
    <div className="modal-actions">
      <Button href={whatsappHref} variant="primary">
        <FaWhatsapp size={18} />
        WhatsApp
      </Button>
      <Button href={callHref} variant="secondary">
        <Phone size={18} />
        Call Now
      </Button>
    </div>
  );
}
