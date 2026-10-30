'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { getActiveLink } from '@/lib/docsConfig';

function NavigationLink({ link, activeHref }) {
  const isActive = link.href === activeHref;
  return (
    <Link
      href={link.href}
      className={`docs-navigation-link${isActive ? ' active' : ''}`}
      aria-current={isActive ? 'page' : undefined}
    >
      {link.title}
    </Link>
  );
}

/**
 * Menu de navigation groupé (sections de la documentation)
 * La page courante (ou sa page parente) est mise en évidence.
 * Un lien avec `links` est un dossier dépliable, ouvert s'il contient la page courante.
 *
 * @param {Array} groups - [{ title, links: [{ href, title } | { title, links }] }]
 */
export default function DocsNavigationGroups({ groups = [] }) {
  const activeHref = getActiveLink(usePathname())?.href;

  return (
    <nav aria-label="Navigation de la documentation">
      {groups.map((group) => (
        <div key={group.title || group.links[0].href} className="docs-nav-group">
          {group.title && <div className="docs-nav-group-title">{group.title}</div>}
          {group.links.map((link) =>
            link.links ? (
              <details
                key={link.title}
                className="docs-nav-folder"
                open={link.links.some((child) => child.href === activeHref)}
              >
                <summary>{link.title}</summary>
                {link.links.map((child) => (
                  <NavigationLink key={child.href} link={child} activeHref={activeHref} />
                ))}
              </details>
            ) : (
              <NavigationLink key={link.href} link={link} activeHref={activeHref} />
            )
          )}
        </div>
      ))}
    </nav>
  );
}
