'use client';

import { useEffect } from 'react';
import { usePageContext } from '../layout-client';
import Content from './content.mdx';

export default function InformationsNecessairesPage() {
  const { setPageTitle, setPageBreadcrumb } = usePageContext();

  useEffect(() => {
    setPageTitle('Connecteurs et Intégrations');
    setPageBreadcrumb([
      { href: '/docs', title: 'Documentation' },
      { href: '/docs/metriz-webapp', title: 'Metriz' },
      { title: 'Intégrations' }
    ]);
  }, [setPageTitle, setPageBreadcrumb]);

  return <Content />;
}
