import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { CloseButton } from "../atoms/CloseButton";
import { Overline } from "../atoms/Overline";
import { ModalActions } from "../molecules/ModalActions";
import { useModalBodyLock } from "../../hooks/useModalBodyLock";

const socialLabels = new Set(["Facebook", "Instagram", "YouTube", "TikTok"]);

export function BusinessModal({ business, contact, onClose, whatsappHref }) {
  const [activeImage, setActiveImage] = useState(0);
  const [paused, setPaused] = useState(false);
  const pauseTimer = useRef(null);
  useModalBodyLock(Boolean(business), onClose);

  const gallery = business?.images?.length
    ? business.images
    : [{ src: business?.image, alt: `${business?.name} business` }];

  useEffect(() => {
    setActiveImage(0);
    setPaused(false);
  }, [business?.id]);

  /* Pause auto-scroll for 8s after manual navigation */
  const pauseAutoScroll = useCallback(() => {
    setPaused(true);
    if (pauseTimer.current) clearTimeout(pauseTimer.current);
    pauseTimer.current = setTimeout(() => setPaused(false), 8000);
  }, []);

  useEffect(() => {
    return () => {
      if (pauseTimer.current) clearTimeout(pauseTimer.current);
    };
  }, []);

  const goTo = useCallback(
    (direction) => {
      setActiveImage((current) => {
        const next =
          direction === "prev"
            ? (current - 1 + gallery.length) % gallery.length
            : (current + 1) % gallery.length;
        return next;
      });
      pauseAutoScroll();
    },
    [gallery.length, pauseAutoScroll],
  );

  useEffect(() => {
    if (!business || gallery.length < 2 || paused) return undefined;

    const timer = window.setInterval(() => {
      setActiveImage((currentImage) => (currentImage + 1) % gallery.length);
    }, 3500);

    return () => window.clearInterval(timer);
  }, [business, gallery.length, paused]);

  if (!business) return null;

  const socialLinks = business.links?.filter((link) => socialLabels.has(link.label)) ?? [];
  const websiteLinks = business.links?.filter((link) => !socialLabels.has(link.label)) ?? [];

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <CloseButton onClick={onClose} />
        <div className="modal-gallery" aria-label={`${business.name} images`}>
          <div
            className="modal-gallery-track"
            style={{ transform: `translateX(-${activeImage * 100}%)` }}
          >
            {gallery.map((image) => (
              <figure
                className={`modal-gallery-slide ${image.fit === "contain" ? "contain" : ""}`}
                key={image.src}
              >
                <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
              </figure>
            ))}
          </div>

          {gallery.length > 1 && (
            <>
              {/* Left / Right arrow navigation */}
              <button
                className="gallery-arrow gallery-arrow-left"
                aria-label="Previous image"
                onClick={() => goTo("prev")}
                type="button"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                className="gallery-arrow gallery-arrow-right"
                aria-label="Next image"
                onClick={() => goTo("next")}
                type="button"
              >
                <ChevronRight size={22} />
              </button>

              <div className="gallery-dots" aria-label="Gallery navigation">
                {gallery.map((image, index) => (
                  <button
                    aria-label={`Show image ${index + 1}`}
                    aria-pressed={activeImage === index}
                    className={activeImage === index ? "active" : ""}
                    key={image.src}
                    onClick={() => {
                      setActiveImage(index);
                      pauseAutoScroll();
                    }}
                    type="button"
                  />
                ))}
              </div>
            </>
          )}
        </div>
        <div className="modal-content">
          <Overline>{business.accent}</Overline>
          <h2 id="modal-title">{business.name}</h2>
          <p>{business.summary}</p>
          <ul>
            {business.services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
          {websiteLinks.length > 0 && (
            <div className="business-link-section" aria-label={`${business.name} website links`}>
              <h3>Website</h3>
              <div className="business-links">
                {websiteLinks.map((link) => (
                  <a href={link.href} key={link.href} rel="noreferrer" target="_blank">
                    {link.label}
                    <ExternalLink size={14} />
                  </a>
                ))}
              </div>
            </div>
          )}
          {socialLinks.length > 0 && (
            <div className="business-link-section" aria-label={`${business.name} social media links`}>
              <h3>Social Media</h3>
              <div className="business-links">
                {socialLinks.map((link) => (
                  <a href={link.href} key={link.href} rel="noreferrer" target="_blank">
                    {link.label}
                    <ExternalLink size={14} />
                  </a>
                ))}
              </div>
            </div>
          )}
          <ModalActions callHref={`tel:${contact.phoneHref}`} whatsappHref={whatsappHref} />
        </div>
      </section>
    </div>
  );
}
