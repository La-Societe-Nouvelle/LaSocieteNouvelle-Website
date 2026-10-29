'use client';

import { useEffect } from 'react';
import { usePageContext } from '@/components/docs/DocsSectionLayout';
import Content from './content.mdx';

export default function InformationsNecessairesPage() {
  const { setPageTitle } = usePageContext();

  useEffect(() => {
    setPageTitle('Connecteurs et Intégrations');
  }, [setPageTitle]);

  return <Content />;
}
