'use client';

import { useEffect } from 'react';
import { usePageContext } from '../../layout-client';

export default function IntegrationPageClient({ title }) {
  const { setPageTitle, setPageBreadcrumb } = usePageContext();

  useEffect(() => {
    setPageTitle(title);
    setPageBreadcrumb([
      { href: '/docs', title: 'Documentation' },
      { href: '/docs/metriz-webapp', title: 'Metriz' },
      { href: '/docs/metriz-webapp/integrations', title: 'Intégrations' },
      { title },
    ]);
  }, [title, setPageTitle, setPageBreadcrumb]);

  return null;
}
