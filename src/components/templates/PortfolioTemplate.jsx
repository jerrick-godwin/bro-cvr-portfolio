import { BusinessGrid } from "../organisms/BusinessGrid";
import { ContactSection } from "../organisms/ContactSection";
import { HeroSection } from "../organisms/HeroSection";
import { MediaSection } from "../organisms/MediaSection";

export function PortfolioTemplate({
  businesses,
  callHref,
  contact,
  founder,
  isYouTubeLoading,
  mediaItems,
  onSelectBusiness,
  whatsappHref,
}) {
  return (
    <main>
      <HeroSection founder={founder} />
      <BusinessGrid
        businesses={businesses}
        callHref={callHref}
        onSelectBusiness={onSelectBusiness}
        whatsappHref={whatsappHref}
      />
      <MediaSection isYouTubeLoading={isYouTubeLoading} mediaItems={mediaItems} />
      <ContactSection contact={contact} whatsappHref={whatsappHref} />
    </main>
  );
}
