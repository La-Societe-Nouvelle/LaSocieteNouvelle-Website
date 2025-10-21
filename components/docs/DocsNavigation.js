'use client';

import { usePathname } from 'next/navigation';
import { Nav } from 'react-bootstrap';
import Link from 'next/link';

/**
 * Composant de navigation pour les pages de documentation
 * Affiche des liens vers d'autres pages (pas des ancres)
 *
 * @param {Array} links - Tableau des liens de navigation
 *   Exemple: [{ href: '/docs/page', title: 'Titre', icon: 'bi-icon' }, ...]
 * @param {string} title - Titre de la section de navigation
 */
export default function DocsNavigation({ links = [], title }) {
  const pathname = usePathname();

  if (!links || links.length === 0) return null;

  return (
    <div className=" mt-3">
      <div className="sidebar-title">{title}</div>
      <Nav className="flex-column">
        {links.map((link, index) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={index}
              href={link.href}
              className={`docs-navigation-link`}
            >
              {link.title}
            </Link>
          );
        })}
      </Nav>
    </div>
  );
}
