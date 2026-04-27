
import { type ReactNode, type MouseEvent } from "react";
import { usePathname, useRouter } from "next/navigation";

interface BookingLinkProps {
  className?: string;
  children: ReactNode;
  /**
   * Optional. Defaults to "/#booking" (the BookingWizard on homepage).
   * Pass "/#contact", "/#faq" etc. for other targets.
   */
  to?: string;
}

/**
 * Route-aware anchor link. If you're already on the target page, it scrolls
 * smoothly to the hash. If you're on another page, it navigates to the
 * target page (React Router client-side, no full reload) and the target
 * page's own scroll handling picks up the hash.
 *
 * This exists so every "Book a Call" CTA across the site behaves the same,
 * whether the user clicks it from /, /about, /services, or /case-studies.
 */
export default function BookingLink({ className, children, to = "/#booking" }: BookingLinkProps) {
  const location = usePathname();
  const navigate = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const [pathPart, hash] = to.split("#");
    const targetPath = pathPart || "/";

    if (location === targetPath) {
      const el = document.getElementById(hash);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate.push(to);
    }
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
