'use client';

import { useEffect } from 'react';
import { usePageContext } from '@/components/docs/DocsSectionLayout';
import Content from './content.mdx';

export default function InformationsNecessairesPage() {
  const { setPageTitle } = usePageContext();

  useEffect(() => {
    setPageTitle('Prérequis : informations nécessaires');
  }, [setPageTitle]);

  return <Content />;
}
