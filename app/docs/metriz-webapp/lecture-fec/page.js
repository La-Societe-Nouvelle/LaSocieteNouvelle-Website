'use client';

import { useEffect } from 'react';
import { usePageContext } from '../layout-client';
import Content from './content.mdx';

export default function InformationsNecessairesPage() {
  const { setPageTitle, setPageBreadcrumb } = usePageContext();

  useEffect(() => {
    setPageTitle('Lecture du Fichier des Ecritures Comptables (FEC)');
    setPageBreadcrumb([
      { href: '/docs', title: 'Documentation' },
      { href: '/docs/metriz-webapp', title: 'Metriz' },
      { title: 'Lecture du FEC' }
    ]);
  }, [setPageTitle, setPageBreadcrumb]);

  return <Content />;
}
