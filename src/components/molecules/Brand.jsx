import { BrandMark } from "../atoms/BrandMark";

export function Brand() {
  return (
    <a className="brand" href="#home" aria-label="Christy Vincent portfolio home">
      <BrandMark />
      <span>Christy Vincent</span>
    </a>
  );
}
