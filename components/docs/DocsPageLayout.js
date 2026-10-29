'use client';

import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import DocsNavigationGroups from './DocsNavigationGroups';
import DocsToc from './DocsToc';
import DocsBreadcrumb from './DocsBreadcrumb';
import DocsPrevNext from './DocsPrevNext';
import DocsPageMeta from './DocsPageMeta';
import { getSection, getBreadcrumb, getPrevNext, getPageTitle } from '@/lib/docsConfig';

/**
 * Layout des pages de documentation : menu de la section, contenu, sommaire de la page
 *
 * @param {string} title - Titre de la page (par défaut : celui de lib/docsConfig.js)
 * @param {Array} sections - Sommaire de la page [{ id, title, level }] - optionnel, auto-généré depuis les h2/h3
 * @param {Array} navigation - Liens complémentaires (ex. autres indicateurs) [{ href, title }]
 * @param {string} navigationTitle - Titre des liens complémentaires
 * @param {React.ReactNode} children - Contenu de la page
 *
 * Le menu latéral, le fil d'Ariane et les liens « Précédent / Suivant »
 * sont déduits de l'URL à partir de lib/docsConfig.js.
 */
export default function DocsPageLayout({
  title: titleProp,
  sections,
  navigation = [],
  navigationTitle,
  children
}) {
  const pathname = usePathname();
  const contentRef = useRef(null);
  const [autoSections, setAutoSections] = useState([]);

  useEffect(() => {
    if (sections) return;

    const extractSections = () => {
      if (!contentRef.current) return;
      const headings = contentRef.current.querySelectorAll('h2[id], h3[id]');
      const extracted = Array.from(headings).map((heading) => ({
        id: heading.id,
        title: heading.textContent,
        level: heading.tagName === 'H2' ? 1 : 2,
      }));
      setAutoSections((current) =>
        JSON.stringify(current) === JSON.stringify(extracted) ? current : extracted
      );
    };

    extractSections();

    // Le contenu peut être complété après le premier rendu
    const observer = new MutationObserver(extractSections);
    if (contentRef.current) {
      observer.observe(contentRef.current, { childList: true, subtree: true });
    }

    return () => observer.disconnect();
  }, [pathname, sections]);

  const section = getSection(pathname);
  const title = titleProp || getPageTitle(pathname);
  const breadcrumb = getBreadcrumb(pathname, title);
  const { prev, next } = getPrevNext(pathname);

  const navigationGroups = [
    ...(section?.groups || []),
    ...(navigation.length > 0 ? [{ title: navigationTitle, links: navigation }] : []),
  ];

  return (
    <div className="docs-page-layout">
      <aside className="docs-sidenav" aria-label={`Menu ${section?.title || ''}`}>
        <div className="docs-sticky">
          <DocsNavigationGroups groups={navigationGroups} />
        </div>
      </aside>

      <main
        className="docs-main"
        data-pagefind-body
        data-pagefind-meta={section ? `section:${section.title}` : undefined}
      >
        {navigationGroups.length > 0 && (
          // key : referme le menu après un changement de page
          <details className="docs-mobile-nav" key={pathname} data-pagefind-ignore="all">
            <summary>
              <i className="bi bi-list" aria-hidden="true"></i>
              {section ? `Menu : ${section.title}` : 'Menu'}
            </summary>
            <DocsNavigationGroups groups={navigationGroups} />
          </details>
        )}

        <div data-pagefind-ignore="all">
          <DocsBreadcrumb items={breadcrumb} />
        </div>
        {title && <h1 className="docs-page-title">{title}</h1>}

        <div className="docs-content" ref={contentRef}>
          {children}
        </div>

        <div data-pagefind-ignore="all">
          <DocsPageMeta pathname={pathname} />
          <DocsPrevNext prev={prev} next={next} />
        </div>
      </main>

      <aside className="docs-toc">
        <div className="docs-sticky">
          <DocsToc sections={sections || autoSections} />
        </div>
      </aside>
    </div>
  );
}
