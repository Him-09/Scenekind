import Link from "next/link";
import { contactEmail } from "@/lib/site";

const nav = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/#process", label: "Process" },
  { href: "/#engagements", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  { href: "https://www.instagram.com/scenekindstudio/", label: "Instagram" },
  { href: "https://www.tiktok.com/@scenekindstudio", label: "TikTok" },
];

export default function Footer() {
  return (
    <footer className="rule" aria-label="Footer">
      <div className="mx-auto max-w-wrap px-6 py-16 lg:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-2xl font-semibold tracking-normal text-ink">
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

          <div className="flex flex-col items-start gap-4">
            <Link
              href={`mailto:${contactEmail}`}
              data-mixpanel-event="Email Clicked"
              data-mixpanel-properties={JSON.stringify({
                location: "Footer",
              })}
              className="text-sm font-medium text-ink underline-offset-4 transition-colors duration-300 hover:underline"
            >
              {contactEmail}
            </Link>
            <div className="flex items-center gap-4">
              {socials.map((social) => (
                <Link
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-mixpanel-event="Social Clicked"
                  data-mixpanel-properties={JSON.stringify({
                    platform: social.label,
                    location: "Footer",
                  })}
                  className="text-sm text-mist underline-offset-4 transition-colors duration-300 hover:text-ink hover:underline"
                >
                  {social.label} ↗︎
                </Link>
              ))}
            </div>
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
