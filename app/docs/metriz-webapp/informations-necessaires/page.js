'use client';

import { useEffect } from 'react';
import { usePageContext } from '../layout-client';
import Content from './content.mdx';

export default function InformationsNecessairesPage() {
  const { setPageTitle, setPageBreadcrumb } = usePageContext();

  useEffect(() => {
    setPageTitle('Prérequis : informations nécessaires');
    setPageBreadcrumb([
      { href: '/docs', title: 'Documentation' },
      { href: '/docs/metriz-webapp', title: 'Metriz' },
      { title: 'Prérequis : informations nécessaires' }
    ]);
  }, [setPageTitle, setPageBreadcrumb]);

  return <Content />;
}
