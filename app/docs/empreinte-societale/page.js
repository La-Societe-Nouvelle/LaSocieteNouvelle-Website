'use client';

import { useEffect } from 'react';
import { usePageContext } from '@/components/docs/DocsSectionLayout';
import Content from './content.mdx';

export default function EmpreinteSocietalePage() {
  const { setPageTitle } = usePageContext();

  useEffect(() => {
    setPageTitle('Empreinte Sociétale');
  }, [setPageTitle]);

  return <Content />;
}
