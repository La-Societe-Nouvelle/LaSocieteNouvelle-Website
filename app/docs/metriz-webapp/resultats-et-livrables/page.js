'use client';

import { useEffect } from 'react';
import { usePageContext } from '@/components/docs/DocsSectionLayout';
import Content from './content.mdx';

export default function ResultatsLivrablesPage() {
  const { setPageTitle } = usePageContext();

  useEffect(() => {
    setPageTitle('Résultats et livrables');
  }, [setPageTitle]);

  return <Content />;
}
