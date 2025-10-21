'use client';

import { useEffect } from 'react';
import { usePageContext } from './layout-client';
import Content from './content.mdx';

export default function MetrizWebappPage() {
  const { setPageTitle, setPageBreadcrumb } = usePageContext();

  useEffect(() => {
    setPageTitle('Application Web - Metriz');
    setPageBreadcrumb([
      { href: '/docs', title: 'Documentation' },
      { title: 'Metriz' }
    ]);
  }, [setPageTitle, setPageBreadcrumb]);

  return <Content />;
}
