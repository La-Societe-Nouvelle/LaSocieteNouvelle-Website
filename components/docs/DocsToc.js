'use client';

import { useEffect, useState } from 'react';

/**
 * Sommaire « Sur cette page » : titres h2/h3 du contenu, avec suivi du défilement
 *
 * @param {Array} sections - [{ id, title, level }]
 */
export default function DocsToc({ sections = [] }) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-80px 0px -66%' }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  if (sections.length < 2) return null;

  return (
    <nav className="docs-toc-nav" aria-label="Sur cette page">
      <div className="docs-toc-title">Sur cette page</div>
      <ul>
        {sections.map((section) => (
          <li key={section.id} className={`level-${section.level}`}>
            <a
              href={`#${section.id}`}
              className={activeId === section.id ? 'active' : ''}
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
