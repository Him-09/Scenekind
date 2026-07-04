import Link from "next/link";
import { contactEmail } from "@/lib/site";

const nav = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/#process", label: "Process" },
  { href: "/#engagements", label: "Engagements" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="rule" aria-label="Footer">
      <div className="mx-auto max-w-wrap px-6 py-16 lg:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-2xl font-semibold tracking-tight text-ink">
              Scenekind<span className="text-mist">®</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-mist">
              AI-first creative production for commercials, product ads,
              motion design, and creator-style campaigns.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-12 gap-y-3 sm:grid-cols-3">
              {nav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-mist transition-colors duration-300 hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <Link
              href={`mailto:${contactEmail}`}
              className="text-sm font-medium text-ink underline-offset-4 transition-colors duration-300 hover:underline"
            >
              {contactEmail}
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 text-xs text-mist sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Scenekind. All rights reserved.</p>
          <p>Commercial-quality ad production, without the production drag.</p>
        </div>
      </div>
    </footer>
  );
}
