'use client';

import { useEffect } from 'react';
import { usePageContext } from './layout-client';
import Content from './content.mdx';

export default function EmpreinteSocietalePage() {
  const { setPageTitle, setPageBreadcrumb } = usePageContext();

  useEffect(() => {
    setPageTitle('Empreinte Sociétale');
    setPageBreadcrumb([
      { href: '/docs', title: 'Documentation' },
      { title: 'Empreinte Sociétale' }
    ]);
  }, [setPageTitle, setPageBreadcrumb]);

  return <Content />;
}
