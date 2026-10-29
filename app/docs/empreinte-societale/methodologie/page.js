'use client';

import { useEffect } from 'react';
import { usePageContext } from '@/components/docs/DocsSectionLayout';
import Content from './content.mdx';

export default function MethodologiePage() {
  const { setPageTitle } = usePageContext();

  useEffect(() => {
    setPageTitle('Méthodologie');
  }, [setPageTitle]);

  return <Content />;
}
