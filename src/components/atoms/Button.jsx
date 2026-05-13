export function Button({
  as: Component = "a",
  children,
  className = "",
  variant = "primary",
  ...props
}) {
  const classes = ["button", variant, className].filter(Boolean).join(" ");

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}
