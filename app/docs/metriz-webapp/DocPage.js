'use client';

import { useEffect } from 'react';
import { usePageContext } from './layout-client';

/**
 * Page de documentation standard : renseigne le titre et le fil d'Ariane
 * à partir de la configuration de navigation.
 */
export default function DocPage({ href, title, children }) {
  const { setPageTitle, setPageBreadcrumb } = usePageContext();

  useEffect(() => {
    setPageTitle(title);
    setPageBreadcrumb([
      { href: '/docs', title: 'Documentation' },
      { href: '/docs/metriz-webapp', title: 'Metriz' },
      { title },
    ]);
  }, [href, title, setPageTitle, setPageBreadcrumb]);

  return children;
}
