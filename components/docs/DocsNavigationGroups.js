'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { getActiveLink } from '@/lib/docsConfig';

/**
 * Menu de navigation groupé (sections de la documentation)
 * La page courante (ou sa page parente) est mise en évidence.
 *
 * @param {Array} groups - [{ title, links: [{ href, title }] }]
 */
export default function DocsNavigationGroups({ groups = [] }) {
  const activeHref = getActiveLink(usePathname())?.href;

  return (
    <nav aria-label="Navigation de la documentation">
      {groups.map((group) => (
        <div key={group.title || group.links[0].href} className="docs-nav-group">
          {group.title && <div className="docs-nav-group-title">{group.title}</div>}
          {group.links.map((link) => {
            const isActive = link.href === activeHref;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`docs-navigation-link${isActive ? ' active' : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.title}
              </Link>
            );
          })}
        </div>
      ))}
    </nav>
  );
}
