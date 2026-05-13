import { motion } from "framer-motion";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { Button } from "../atoms/Button";
import { MediaImage } from "../atoms/MediaImage";
import { Overline } from "../atoms/Overline";
import { SectionHeading } from "../molecules/SectionHeading";
import { fadeInUp, staggerContainer } from "../../lib/animations";

export function MediaSection({ isYouTubeLoading, mediaItems }) {
  const youtubeItems = mediaItems.filter((item) => item.id === "youtube-latest");

  return (
    <section className="section-pad media-section" aria-labelledby="media-heading" id="media">
      <SectionHeading id="media-heading" title="Latest Updates">
        Stay connected with Rev. Dr. Christy Vincent Rajendram&apos;s most recent messages,
        community events, and ministry highlights.
      </SectionHeading>

      <motion.div
        className="media-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {youtubeItems.map((item) => (
          <motion.article className="media-card" key={item.id} variants={fadeInUp}>
            <MediaImage isLoading={isYouTubeLoading} src={item.image} alt="Latest YouTube video">
              <div className="media-icon">
                <FaYoutube size={24} />
              </div>
            </MediaImage>
            <div className="media-content">
              <Overline>YouTube</Overline>
              <h3>{item.title}</h3>
              <p>Watch our latest video uploaded to YouTube.</p>
              <Button href={item.link} target="_blank" rel="noreferrer" variant="secondary">
                Watch on YouTube
              </Button>
            </div>
          </motion.article>
        ))}

        <motion.article className="media-card facebook-embed-card" variants={fadeInUp}>
          <div className="facebook-embed-wrapper">
            <iframe
              title="Facebook Page"
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100063558251493&tabs=timeline&width=500&height=700&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
              width="500"
              height="700"
              style={{ border: "none" }}
              scrolling="yes"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
            <div className="media-icon fb-badge">
              <FaFacebookF size={20} />
            </div>
          </div>
          <div className="media-content">
            <Button
              href="https://www.facebook.com/profile.php?id=100063558251493"
              target="_blank"
              rel="noreferrer"
              variant="secondary"
            >
              View Facebook Profile
            </Button>
          </div>
        </motion.article>
      </motion.div>
    </section>
  );
}
