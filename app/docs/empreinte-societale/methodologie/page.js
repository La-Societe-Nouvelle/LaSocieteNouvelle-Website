'use client';

import { useEffect } from 'react';
import { usePageContext } from '../layout-client';
import Content from './content.mdx';

export default function MethodologiePage() {
  const { setPageTitle, setPageBreadcrumb } = usePageContext();

  useEffect(() => {
    setPageTitle('Méthodologie');
    setPageBreadcrumb([
      { href: '/docs/empreinte-societale', title: 'Empreinte Sociétale' },
      { title: 'Méthodologie' }
    ]);
  }, [setPageTitle, setPageBreadcrumb]);

  return <Content />;
}
