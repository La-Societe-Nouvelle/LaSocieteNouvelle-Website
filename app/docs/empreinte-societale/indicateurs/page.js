'use client';

import { useEffect } from 'react';
import { usePageContext } from '../layout-client';
import Content from './content.mdx';

export default function IndicateursPage() {
  const { setPageTitle, setPageBreadcrumb } = usePageContext();

  useEffect(() => {
    setPageTitle('Liste des indicateurs');
    setPageBreadcrumb([
      { href: '/docs/empreinte-societale', title: 'Empreinte Sociétale' },
      { title: 'Indicateurs' }
    ]);
  }, [setPageTitle, setPageBreadcrumb]);

  return <Content />;
}
