'use client';

import { useEffect } from 'react';
import { usePageContext } from '../layout-client';
import Content from './content.mdx';

export default function TutorielPage() {
  const { setPageTitle, setPageBreadcrumb } = usePageContext();

  useEffect(() => {
    setPageTitle('Guide d\'Utilisation');
    setPageBreadcrumb([
      { href: '/docs', title: 'Documentation' },
      { href: '/docs/metriz-webapp', title: 'Metriz' },
      { title: 'Guide d\'Utilisation' }
    ]);
  }, [setPageTitle, setPageBreadcrumb]);

  return <Content />;
}
