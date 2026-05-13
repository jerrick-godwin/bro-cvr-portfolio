export function CloseButton({ onClick }) {
  return (
    <button className="close-button" type="button" aria-label="Close details" onClick={onClick}>
      &times;
    </button>
  );
}
