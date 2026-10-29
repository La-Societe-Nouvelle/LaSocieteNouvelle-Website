'use client';

import { useEffect } from 'react';
import { usePageContext } from '@/components/docs/DocsSectionLayout';
import Content from './content.mdx';

export default function AnalyseRapidePage() {
  const { setPageTitle } = usePageContext();

  useEffect(() => {
    setPageTitle('Démarrage rapide');
  }, [setPageTitle]);

  return <Content />;
}
