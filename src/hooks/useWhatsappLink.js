import { useMemo } from "react";

export function useWhatsappLink(phoneNumber, message) {
  return useMemo(
    () => `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
    [message, phoneNumber]
  );
}
