'use client';

import { useEffect } from 'react';
import { usePageContext } from '@/components/docs/DocsSectionLayout';
import Content from './content.mdx';

export default function InformationsNecessairesPage() {
  const { setPageTitle } = usePageContext();

  useEffect(() => {
    setPageTitle('Indicateurs et déclarations');
  }, [setPageTitle]);

  return <Content />;
}
