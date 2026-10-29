import Link from "next/link";

const links = [
  { href: "https://github.com/La-Societe-Nouvelle", title: "GitHub", external: true },
  { href: "https://api.sinese.fr", title: "API publique", external: true },
  { href: "https://metriz.lasocietenouvelle.org", title: "Metriz", external: true },
  { href: "/", title: "Site principal" },
  { href: "/contact", title: "Contact" },
  { href: "/mentions-legales", title: "Mentions légales" },
];

const socials = [
  { href: "https://www.linkedin.com/company/la-societe-nouvelle/", title: "LinkedIn", icon: "bi-linkedin" },
  { href: "https://discord.gg/ANFwWZc3eu", title: "Discord", icon: "bi-discord" },
  { href: "https://github.com/La-Societe-Nouvelle", title: "GitHub", icon: "bi-github" },
];

export default function DocsFooter() {
  return (
    <footer className="docs-footer" data-pagefind-ignore="all">
      <div className="docs-footer-inner">
        <p className="docs-footer-copyright">
          © {new Date().getFullYear()} La Société Nouvelle · Documentation sous licence libre
        </p>
        <ul className="docs-footer-links">
          {links.map((link) => (
            <li key={link.href}>
              {link.external ? (
                <a href={link.href} target="_blank" rel="noopener noreferrer">{link.title}</a>
              ) : (
                <Link href={link.href}>{link.title}</Link>
              )}
            </li>
          ))}
        </ul>
        <div className="docs-footer-socials">
          {socials.map((social) => (
            <a key={social.href} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.title}>
              <i className={`bi ${social.icon}`} aria-hidden="true"></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
