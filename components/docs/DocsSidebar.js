'use client';

import { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import DocsNavigation from './DocsNavigation';

export default function DocsSidebar({ sections, navigation = [], navigationTitle, sidebarTitle = 'SOMMAIRE' }) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-100px 0px -66%',
      }
    );

    // Observer toutes les sections
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Offset pour le header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="docs-sidebar ">
      <div className='sidebar-sticky'>
        <div className="sidebar-summary">
          <div className="sidebar-title">{sidebarTitle}</div>
          <Nav className="flex-column docs-sidebar-nav">
            {sections.map((section) => (
              <Nav.Link
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`docs-sidebar-link ${activeSection === section.id ? 'active' : ''
                  } ${section.level ? `level-${section.level}` : ''}`}
              >
                {section.title}
              </Nav.Link>
            ))}
          </Nav>

        </div>

        {/* Navigation vers les sous-pages */}
        {navigation && navigation.length > 0 && (
          <div className='docs-navigation '>
            <div className="sidebar-navigation-section">
              <DocsNavigation links={navigation} title={navigationTitle} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
