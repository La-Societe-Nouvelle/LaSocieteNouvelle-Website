'use client';

import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import DocsSidebar from './DocsSidebar';
import DocsBreadcrumb from './DocsBreadcrumb';

/**
 * Layout pour les pages de documentation avec sidebar
 *
 * @param {string} title - Titre de la page
 * @param {Array} sections - Tableau des sections pour la sidebar (ancres) - optionnel, auto-généré si non fourni
 *   Exemple: [{ id: 'introduction', title: 'Empreinte Sociétale - Introduction', level: 1 }, ...]
 * @param {Array} navigation - Tableau des liens de navigation (autres pages)
 *   Exemple: [{ href: '/docs/page', title: 'Titre', icon: 'bi-icon' }, ...]
 * @param {string} navigationTitle - Titre de la section de navigation
 * @param {Array} breadcrumb - Tableau des éléments du breadcrumb
 *   Exemple: [{ href: '/docs', title: 'Documentation' }, { title: 'Page actuelle' }]
 * @param {React.ReactNode} children - Contenu de la page
 */
export default function DocsPageLayout({
  title,
  sections,
  navigation = [],
  navigationTitle,
  breadcrumb = [],
  children
}) {
  const pathname = usePathname();
  const contentRef = useRef(null);
  const [autoSections, setAutoSections] = useState([]);
  const [sidebarTitle, setSidebarTitle] = useState('SOMMAIRE');

  useEffect(() => {
    if (sections) return;

    const extractSections = () => {
      if (contentRef.current) {
        const headings = contentRef.current.querySelectorAll('h3[id], h4[id]');
        if (headings.length > 0) {
          const extractedSections = Array.from(headings).map(heading => ({
            id: heading.id,
            title: heading.textContent,
            level: heading.tagName === 'H3' ? 1 : 2
          }));
          setAutoSections(extractedSections);
        }
      }
    };

    extractSections();

    // Observer les changements dans le DOM pour détecter quand le contenu est chargé
    const observer = new MutationObserver(() => {
      extractSections();
    });

    if (contentRef.current) {
      observer.observe(contentRef.current, {
        childList: true,
        subtree: true
      });
    }

    return () => observer.disconnect();
  }, [pathname, sections]);

  useEffect(() => {
    const extractTitle = () => {
      if (contentRef.current) {
        const h2 = contentRef.current.querySelector('h2');
        if (h2) {
          setSidebarTitle(h2.textContent.toUpperCase());
        } else {
          setSidebarTitle('SOMMAIRE');
        }
      }
    };

    extractTitle();

    // Observer les changements dans le DOM
    const observer = new MutationObserver(() => {
      extractTitle();
    });

    if (contentRef.current) {
      observer.observe(contentRef.current, {
        childList: true,
        subtree: true
      });
    }

    return () => observer.disconnect();
  }, [pathname]);

  const finalSections = sections || autoSections;
  return (
    <div className="docs-page-layout">
      {title && (
        <div className="docs-page-header ">
          <Container>
            <h2 className="docs-page-title">{title}</h2>
            {/* Breadcrumb */}
            {breadcrumb && breadcrumb.length > 0 && (
              <DocsBreadcrumb items={breadcrumb} />
            )}
          </Container>
        </div>
      )}


      <Container className="py-4">
        <Row>
          {/* Sidebar */}
          <Col lg={3} className="d-none d-lg-block">
            <DocsSidebar
              sections={finalSections}
              navigation={navigation}
              navigationTitle={navigationTitle}
              sidebarTitle={sidebarTitle}
            />
          </Col>

          {/* Contenu principal */}
          <Col lg={9}>
            <div className="docs-content" ref={contentRef}>
              {children}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
