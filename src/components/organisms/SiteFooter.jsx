export function SiteFooter({ founder }) {
  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} {founder.name}. All rights reserved.
      </p>
    </footer>
  );
}
