'use client';

import { useEffect } from 'react';
import { usePageContext } from '@/components/docs/DocsSectionLayout';
import Content from './content.mdx';

export default function MetrizWebappPage() {
  const { setPageTitle } = usePageContext();

  useEffect(() => {
    setPageTitle('Application Web - Metriz');
  }, [setPageTitle]);

  return <Content />;
}
