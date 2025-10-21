import Link from 'next/link';
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';

/**
 * Composant breadcrumb pour la navigation dans la documentation
 *
 * @param {Array} items - Tableau des éléments du breadcrumb
 *   Exemple: [{ href: '/docs', title: 'Documentation' }, { title: 'Page actuelle' }]
 */
export default function DocsBreadcrumb({ items = [] }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="docs-breadcrumb">
      <Breadcrumb>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <BreadcrumbItem
              key={index}
              active={isLast}
              linkAs={Link}
              href={!isLast && item.href ? item.href : undefined}
            >
              {item.title}
            </BreadcrumbItem>
          );
        })}
      </Breadcrumb>
    </div>
  );
}
