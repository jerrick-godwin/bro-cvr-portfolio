export function MediaImage({ isLoading, src, alt, children }) {
  return (
    <div className="media-image">
      {isLoading ? (
        <div className="media-skeleton">Loading...</div>
      ) : (
        <img src={src} alt={alt} loading="lazy" decoding="async" />
      )}
      {children}
    </div>
  );
}
