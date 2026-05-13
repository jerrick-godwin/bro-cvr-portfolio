export function IconLink({ children, label, ...props }) {
  return (
    <a className="icon-link" aria-label={label} {...props}>
      {children}
    </a>
  );
}
