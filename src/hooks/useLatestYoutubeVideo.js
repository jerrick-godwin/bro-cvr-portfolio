import { useEffect, useState } from "react";

export function useLatestYoutubeVideo(defaultMedia, feedUrl) {
  const [mediaItems, setMediaItems] = useState(defaultMedia);
  const [isYouTubeLoading, setIsYouTubeLoading] = useState(true);

  useEffect(() => {
    fetch(feedUrl)
      .then((res) => res.json())
      .then((data) => {
        if (data?.items?.length > 0) {
          const latestVideo = data.items[0];

          setMediaItems((items) =>
            items.map((item) => {
              if (item.id !== "youtube-latest") return item;

              return {
                ...item,
                title: latestVideo.title,
                summary: "Watch our latest video uploaded to YouTube.",
                image: latestVideo.thumbnail,
                link: latestVideo.link,
              };
            })
          );
        }
      })
      .catch((err) => console.error("Error fetching YouTube feed", err))
      .finally(() => setIsYouTubeLoading(false));
  }, [feedUrl]);

  return { mediaItems, isYouTubeLoading };
}
