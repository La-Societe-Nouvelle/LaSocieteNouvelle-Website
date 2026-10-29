import Link from "next/link";
import Image from "next/image";
import { docsSections, externalLinks } from "@/lib/docsConfig";

const siteLinks = [
  { href: "/", title: "Site principal" },
  { href: "/a-propos", title: "À propos" },
  { href: "/faq", title: "FAQ" },
  { href: "/contact", title: "Contact" },
];

const socials = [
  { href: "https://www.linkedin.com/company/la-societe-nouvelle/", title: "LinkedIn", icon: "bi-linkedin" },
  { href: "https://discord.gg/ANFwWZc3eu", title: "Discord", icon: "bi-discord" },
  { href: "https://github.com/La-Societe-Nouvelle", title: "GitHub", icon: "bi-github" },
];

// Colonnes : sections de la doc et ressources reprennent la configuration de l'en-tête
const columns = [
  { title: "Documentation", links: docsSections.map((s) => ({ href: s.href, title: s.shortTitle || s.title })) },
  { title: "Ressources", links: externalLinks.map((l) => ({ href: l.href, title: l.title, external: true })) },
  { title: "La Société Nouvelle", links: siteLinks },
];

export default function DocsFooter() {
  return (
    <footer className="docs-footer" data-pagefind-ignore="all">
      <div className="docs-footer-inner">
        <div className="docs-footer-brand">
          <Link href="/" className="docs-footer-logo">
            <Image src="/logo-La-Societe-Nouvelle.svg" height={40} width={105} alt="La Société Nouvelle" />
          </Link>
          <div className="docs-footer-socials">
            {socials.map((social) => (
              <a key={social.href} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.title}>
                <i className={`bi ${social.icon}`} aria-hidden="true"></i>
              </a>
            ))}
          </div>
        </div>

        {columns.map((column) => (
          <nav key={column.title} className="docs-footer-column" aria-label={column.title}>
            <p className="docs-footer-title">{column.title}</p>
            <ul>
              {column.links.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.title}
                      <i className="bi bi-box-arrow-up-right" aria-hidden="true"></i>
                    </a>
                  ) : (
                    <Link href={link.href}>{link.title}</Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="docs-footer-bottom">
        <p>
          © {new Date().getFullYear()} La Société Nouvelle
        </p>
        <Link href="/mentions-legales">Mentions légales</Link>
      </div>
    </footer>
  );
}
