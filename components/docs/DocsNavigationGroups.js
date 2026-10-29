'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const normalize = (path) => (path || '').replace(/\/$/, '');

/**
 * Menu de navigation groupé (sections de la documentation)
 * La page courante est mise en évidence.
 *
 * @param {Array} groups - [{ title, links: [{ href, title }] }]
 */
export default function DocsNavigationGroups({ groups = [] }) {
  const pathname = normalize(usePathname());

  return (
    <nav aria-label="Navigation de la documentation">
      {groups.map((group) => (
        <div key={group.title} className="docs-nav-group">
          <div className="docs-nav-group-title">{group.title}</div>
          {group.links.map((link) => {
            const isActive = normalize(link.href) === pathname;
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
