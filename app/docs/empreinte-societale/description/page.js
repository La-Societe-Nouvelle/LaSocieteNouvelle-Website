'use client';

import { useEffect } from 'react';
import { usePageContext } from '../layout-client';
import Content from './content.mdx';

export default function DescriptionPage() {
  const { setPageTitle, setPageBreadcrumb } = usePageContext();

  useEffect(() => {
    setPageTitle('Description de l\'Empreinte Sociétale');
    setPageBreadcrumb([
      { href: '/docs/empreinte-societale', title: 'Empreinte Sociétale' },
      { title: 'Description' }
    ]);
  }, [setPageTitle, setPageBreadcrumb]);

  return <Content />;
}
