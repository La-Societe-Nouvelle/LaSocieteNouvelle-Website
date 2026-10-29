'use client';

import { useEffect } from 'react';
import { usePageContext } from '@/components/docs/DocsSectionLayout';

/**
 * Page de documentation standard : renseigne le titre de la page.
 * Le fil d'Ariane est déduit de lib/docsConfig.js.
 */
export default function DocPage({ href, title, children }) {
  const { setPageTitle } = usePageContext();

  useEffect(() => {
    setPageTitle(title);
  }, [href, title, setPageTitle]);

  return children;
}
