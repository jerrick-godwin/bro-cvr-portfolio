import { useCallback, useState } from "react";
import { BusinessModal } from "../organisms/BusinessModal";
import { SiteFooter } from "../organisms/SiteFooter";
import { SiteHeader } from "../organisms/SiteHeader";
import { PortfolioTemplate } from "../templates/PortfolioTemplate";
import {
  businesses,
  contact,
  defaultMedia,
  founder,
  navItems,
  youtubeFeedUrl,
} from "../../data/portfolio";
import { useLatestYoutubeVideo } from "../../hooks/useLatestYoutubeVideo";
import { useWhatsappLink } from "../../hooks/useWhatsappLink";

const portfolioInquiryMessage =
  "Hello Rev Dr Christy Vincent Rajendram, I would like to inquire about your business portfolio.";

export function PortfolioPage() {
  const [activeBusiness, setActiveBusiness] = useState(null);
  const { mediaItems, isYouTubeLoading } = useLatestYoutubeVideo(defaultMedia, youtubeFeedUrl);
  const whatsappHref = useWhatsappLink(contact.whatsapp, portfolioInquiryMessage);
  const activeBusinessWhatsappHref = useWhatsappLink(
    contact.whatsapp,
    activeBusiness
      ? `Hello Rev Dr Christy Vincent Rajendram, I would like to inquire about ${activeBusiness.name}.`
      : portfolioInquiryMessage
  );

  const closeBusinessModal = useCallback(() => {
    setActiveBusiness(null);
  }, []);

  return (
    <>
      <SiteHeader navItems={navItems} />
      <PortfolioTemplate
        businesses={businesses}
        callHref={`tel:${contact.phoneHref}`}
        contact={contact}
        founder={founder}
        isYouTubeLoading={isYouTubeLoading}
        mediaItems={mediaItems}
        onSelectBusiness={setActiveBusiness}
        whatsappHref={whatsappHref}
      />
      <SiteFooter founder={founder} />
      <BusinessModal
        business={activeBusiness}
        contact={contact}
        onClose={closeBusinessModal}
        whatsappHref={activeBusinessWhatsappHref}
      />
    </>
  );
}
