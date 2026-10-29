'use client';

import { useEffect } from 'react';
import { usePageContext } from '@/components/docs/DocsSectionLayout';
import Content from './content.mdx';

export default function IndicateursPage() {
  const { setPageTitle } = usePageContext();

  useEffect(() => {
    setPageTitle('Liste des indicateurs');
  }, [setPageTitle]);

  return <Content />;
}
